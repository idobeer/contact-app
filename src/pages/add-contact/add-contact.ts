import { Component } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Contacts, Contact, ContactField, ContactName } from '@ionic-native/contacts';

@Component({
	selector: 'page-add-contact',
	templateUrl: 'add-contact.html'
})
export class AddContactPage {
	contactform: FormGroup;
	contactError: string;

	public allContacts: any
	contactnamefname; contactnamelname; contactnumber;
	constructor(fb: FormBuilder, public contacts: Contacts) {

		this.contactform = fb.group({
			firstName: ['', Validators.compose([Validators.required, Validators.minLength(3)])],
			lastName: ['', Validators.compose([Validators.minLength(3)])],
			contactNumber: ['', Validators.compose([Validators.required, Validators.minLength(10), Validators.maxLength(10)])]
		});
		
	}

	createContact() {
		var newCnt = this.contacts.create();
		newCnt.name = new ContactName(null, this.contactnamefname, this.contactnamelname);
		newCnt.phoneNumbers = [new ContactField('mobile', this.contactnumber)];
		newCnt.save().then(() => {
        alert('Contact saved!')
      }).catch((error) => {
        this.contactError = error.message
      })/*.then(
			() => alert('Contact saved!'),
			(error: any) => error => this.contactError = error.message
		);*/

	}
		
}
