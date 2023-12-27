import { LightningElement } from 'lwc';
import ACCOUNT_OBJECT from '@salesforce/schema/Account';
import { ShowToastEvent } from 'lightning/platformShowToastEvent';
export default class LightningCustomRecordEditForm extends LightningElement 
{
	objectName = ACCOUNT_OBJECT
	inputValue = ''
	changeHandler(event)
	{
		this.inputValue = event.target.value;
	}

	submitHandler(event)
	{
		event.preventDefault();
		const inputComp = this.template.querySelector('lightning-input')
		const value = inputComp.value
		if(!value.includes('Australia'))
		{
			inputComp.setCustomValidity("The Account name must include 'Australia'")
		}
		else
		{
			inputComp.setCustomValidity("")
			const fields = event.detail.fields
			fields.Name = value
			this.template.querySelector('lightning-record-edit-form').submit(fields)
		}
		inputComp.reportValidity()
	}

	successHandler(event)
	{
		const toastEvent = new ShowToastEvent({
			title:"Account Created",
			message:"Record ID: "+ event.detail.id,
			variant: "success"
		})
		this.dispatchEvent(toastEvent)
	}

	errorHandler(event)
	{
		const toastEvent = new ShowToastEvent({
			title:"Account Creation Failed",
			message:event.detail.message,
			variant: "error"
		})
		this.dispatchEvent(toastEvent)
	}
}