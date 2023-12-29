import { LightningElement } from 'lwc';
import { createRecord } from 'lightning/uiRecordApi';
import CONTACT_OBJECT from '@salesforce/schema/Contact'
import { ShowToastEvent } from 'lightning/platformShowToastEvent';
export default class WireCreateRecord extends LightningElement 
{
	formFields= {}


	changeHandler(event)
	{
		const {name, value} = event.target
		this.formFields[name] = value
	}

	createContact()
	{
		const recordInput = {apiName: CONTACT_OBJECT.objectApiName, fields:this.formFields}
		createRecord(recordInput).then(item=>{
			this.toastEvent('Success!!',`Contact Creation Successfull with id ${item.id}`)
			this.template.querySelector('form.createForm').reset()
			this.formFields= {}
		}).catch(error=>{
			this.toastEvent('Error!!!', `Contact Creation failed ${error.body.message}`, 'error')
		})
	}

	toastEvent(title, message, variant)
	{
		const event = new ShowToastEvent({
			title,
			message,
			variant: variant || 'success'
		})
		this.dispatchEvent(event)
	}

}