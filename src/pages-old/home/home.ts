import { Component } from '@angular/core';
import { NavController, Platform } from 'ionic-angular';
import { Contacts, Contact, ContactField, ContactName } from '@ionic-native/contacts';
declare var FCMPlugin: any; 

@Component({
	selector: 'page-home',
	templateUrl: 'home.html'
})
export class HomePage {
	public allContacts: any
	contactnamefname; contactnamelname; contactnumber;
	constructor(public platform: Platform, public navCtrl: NavController, public contacts: Contacts) {
		this.onNotification()
	}
	
	 async onNotification(){
	 	var self = this
		try {
			await this.platform.ready();

			if (typeof FCMPlugin != 'undefined') {

				FCMPlugin.subscribeToTopic('contact');

				FCMPlugin.getToken(function(token){
			    alert(token);
				});

		  	FCMPlugin.onNotification(function(data){
			    if(data.wasTapped){			    		    	
						var contact = self.contacts.create();
						contact.name = new ContactName(null, data.fname, data.lname);
						contact.phoneNumbers = [new ContactField('mobile', data.number)];
						contact.save().then(
							() => alert('Contact saved!'),
							(error: any) => console.error('Error saving contact.', error)
						);
			      //alert( JSON.stringify(data) );
			    }else{			      
						var contact = self.contacts.create();
						contact.name = new ContactName(null, data.fname, data.lname);
						contact.phoneNumbers = [new ContactField('mobile', data.number)];
						contact.save().then(
							() => alert('Contact saved!'),
							(error: any) => console.error('Error saving contact.', error)
						);
			      //alert( JSON.stringify(data) );
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


	

openFilters() {
		var xyz = this.contacts.create();
		xyz.name = new ContactName(null, this.contactnamefname, this.contactnamelname);
		xyz.phoneNumbers = [new ContactField('mobile', this.contactnumber)];
		xyz.save().then(
			() => alert('Contact saved!'),
			(error: any) => console.error('Error saving contact.', error)
		);

	}

		/*getContacts() {
		this.contacts.find(['displayName', 'name', 'phoneNumbers'], { filter: "", multiple: true })
			.then(data => {
				this.allContacts = data

			});
	}*/
}
