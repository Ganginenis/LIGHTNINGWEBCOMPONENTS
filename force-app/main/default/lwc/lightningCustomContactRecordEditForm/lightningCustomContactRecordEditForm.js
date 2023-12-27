import { LightningElement } from 'lwc';
import CONTACT_OBJECT from '@salesforce/schema/Contact'
import { ShowToastEvent } from 'lightning/platformShowToastEvent'
export default class LightningCustomContactRecordEditForm extends LightningElement 
{
	objectName = CONTACT_OBJECT
	inputValue = ''
	inputHandler(event)
	{
		this.inputValue = event.target.value
	}

	submitHandler(event)
	{
		event.preventDefault();
		const inputComp = this.template.querySelector('lightning-input')
		const value = inputComp.value
		if(!value.includes('Sandeep'))
		{
			inputComp.setCustomValidity("Name Should not contain 'Sandeep'")
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
			title: "Contact Created Successful",
			message: "Record ID: "+ event.detail.id,
			variant: "success"
		})
		this.dispatchEvent(toastEvent)
	}
}