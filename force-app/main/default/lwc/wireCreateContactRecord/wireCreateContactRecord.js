import { LightningElement, wire, api } from 'lwc';
import { createRecord } from 'lightning/uiRecordApi'
import ACCOUNT_OBJECT from '@salesforce/schema/Account'
import RATING_FIELD from '@salesforce/schema/Account.Rating'
import { getObjectInfo, getPicklistValues } from 'lightning/uiObjectInfoApi';
import {ShowToastEvent} from 'lightning/platformShowToastEvent'
export default class WireCreateContactRecord extends LightningElement 
{

	formFields= {}
	selectedRating = '';
	ratingOptions = []

	changeHandler(event)
	{
		const {name, value} = event.target
		this.formFields[name] = value
	}

	createAccount()
	{
		const recordInput = {apiName: ACCOUNT_OBJECT.objectApiName, fields: this.formFields}
		createRecord(recordInput).then(item=>{
			this.toastEvent('Successful...',`Account Creation Succcess with ID: ${item.id}`)
			this.template.querySelector('form.createForm').reset()
			this.formFields = {}
			this.selectedRating = ''
			
		}).catch(error=>{
			this.toastEvent('Failed..!!!', `Account Creation Failed${error.body.message}`,'error')
		})
		
	}

	/* to get the picklist values*/

	@wire(getObjectInfo, {objectApiName: ACCOUNT_OBJECT})
	objectInfo

	@wire(getPicklistValues, {recordTypeId: '$objectInfo.data.defaultRecordTypeId', fieldApiName: RATING_FIELD})
	typePicklistHandler({data, error})
	{
		if(data)
		{
			console.log(data)
			this.ratingOptions = [...this.generatePicklist(data)]
		}
		if(error)
		{
			console.error(error)
		}
	}

	generatePicklist(data)
	{
		return data.values.map(item=>({label: item.label, value: item.value}))
	}

	changeRatingHandler(event)
	{
		this.selectedRating = event.detail.value
	}


	toastEvent(title, message, variant)
	{
		this.dispatchEvent(new ShowToastEvent({
			title,
			message,
			variant: variant || 'success'
		}))
	}
}