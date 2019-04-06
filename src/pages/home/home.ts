import { Component } from '@angular/core';
import { NavController, Platform } from 'ionic-angular';
import { Contacts, ContactField, ContactName } from '@ionic-native/contacts';

import { AddContactPage } from '../add-contact/add-contact' 
import { AuthService } from '../../services/auth.service';
import { ContactService } from '../../services/contact.service';
import { Contact } from '../../models/contact.interface';
import { AngularFirestore, AngularFirestoreCollection, AngularFirestoreDocument } from 'angularfire2/firestore';

declare var FCMPlugin: any;

@Component({
	selector: 'page-home',
	templateUrl: 'home.html'
})

export class HomePage {
	usersCollection: AngularFirestoreCollection<any>;
	userDoc: AngularFirestoreDocument<any>;

	public allContacts: any
	addContactPage = AddContactPage
	private user;

	contact: Contact = {
    name: '',
    number:'',
    custEmail: '',
    custUid: '',
  }

	constructor(public afs: AngularFirestore, public platform: Platform, public navCtrl: NavController, private auth: AuthService, public contacts: Contacts, private contactService: ContactService) {	
		this.user = this.auth.afAuth.auth.currentUser
		this.onNotification()
		this.userDoc = this.afs.doc(`Users/${this.user.email}`);
	}	

  async onNotification(){	
	 	var self = this
		try {
			await this.platform.ready();

			if (typeof FCMPlugin != 'undefined') {
				//FCMPlugin.subscribeToTopic('all');

				FCMPlugin.getToken(function(token){			    
    			self.userDoc.update({
    				deviceToken: token,
    				uid: self.user.uid
    			});	    
				});

		  	FCMPlugin.onNotification(function(data){
			    if(data.wasTapped){	    		    	
						var contact = self.contacts.create();
						contact.name = new ContactName(null, data.name);
						contact.phoneNumbers = [new ContactField('mobile', data.number)];
						contact.save().then(
							() => alert('Contact saved!'),
							(error: any) => console.error('Error saving contact.', error)
						);
			      //alert( JSON.stringify(data) );
			    }else{     
						var contact = self.contacts.create();
						contact.name = new ContactName(null, data.name);
						contact.phoneNumbers = [new ContactField('mobile', data.number)];
						contact.save().then(
							() => alert('Contact saved!'),
							(error: any) => console.error('Error saving contact.', error)
						);
			    }
				},(error) => console.error(error));


				FCMPlugin.onTokenRefresh(function(token){
			    alert( token );
				});

				//FCMPlugin.unsubscribeFromTopic('topicExample');
			}
		}
		catch (e) {
			console.error(e);
		}
	}

  syncContacts() {
		this.contacts.find(['displayName', 'name', 'phoneNumbers'], {filter: "", multiple: true, hasPhoneNumber: true})
    .then((contacts) => {
    	var contactsLength = 5
      for (var i=0 ; i < contactsLength; i++) {
        if(contacts[i].displayName !== null && contacts[i].phoneNumbers) {
	        //var contact = {}
	        this.contact.name   = contacts[i].displayName;
	        this.contact.number = contacts[i].phoneNumbers[0] && contacts[i].phoneNumbers[0].value;
	        this.contact.custEmail = this.user.email;
	        this.contact.custUid = this.user.uid;	        
      		this.contactService.addContact(this.contact);    				  
        }
      }
		})
	}

	logout() {
    this.auth.signOut();
  }
}