import { LightningElement } from 'lwc';
// import { ShowToastEvent } from 'lightning/platformShowToastEvent';
import CONTACT_OBJECT from '@salesforce/schema/Contact'
import NAME_FIELD from '@salesforce/schema/Contact.Name'
import PHONE_FIELD from '@salesforce/schema/Contact.Phone'
import EMAIL_FIELD from '@salesforce/schema/Contact.Email'
import ACCOUNT_FIELD from '@salesforce/schema/Contact.AccountId'
import LEADSOURCE_FIELD from '@salesforce/schema/Contact.LeadSource'
export default class LightningRecordEditForm extends LightningElement 
{
	objectName = CONTACT_OBJECT

	fields = 
	{
		accField : ACCOUNT_FIELD,
		nameField : NAME_FIELD,
		phoneField : PHONE_FIELD,
		emailField : EMAIL_FIELD,
		leadSourceField : LEADSOURCE_FIELD
	}

	resetHandler()
	{
		const fields = this.template.querySelectorAll('lightning-input-field')
		Array.from(fields).forEach(field => {
			field.reset()
		});
	}
}