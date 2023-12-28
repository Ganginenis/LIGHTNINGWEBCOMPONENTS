import { LightningElement, wire, api } from 'lwc';
import { getRecord, getFieldDisplayValue, getFieldValue } from 'lightning/uiRecordApi';
import NAME_FIELD from '@salesforce/schema/Account.Name'
import OWNER_FIELD from '@salesforce/schema/Account.OwnerId'
import ANNUAL_REVENUE_FIELD from '@salesforce/schema/Account.AnnualRevenue'

export default class WireRecordInfo extends LightningElement 
{
	@api recordId
	name
	ownerId
	annualRevenue

	//using Fields
	@wire(getRecord, {recordId: '$recordId', fields:[NAME_FIELD, OWNER_FIELD, ANNUAL_REVENUE_FIELD]})
	//using layout & mode
	// @wire(getRecord, {recordId: '$recordId', layoutTypes:['Full'], modes:['View']})
	accountHandler({data})
	{
		if(data)
		{
			console.log(data)
			this.name = getFieldValue(data, NAME_FIELD)
			// data.fields.Name.displayValue ? data.fields.Name.displayValue : data.fields.Name.value
			this.ownerId = getFieldValue(data, OWNER_FIELD)
			// data.fields.OwnerId.displayValue ? data.fields.OwnerId.displayValue : data.fields.OwnerId.value
			this.annualRevenue = getFieldDisplayValue(data, ANNUAL_REVENUE_FIELD)
			// data.fields.AnnualRevenue.displayValue ? data.fields.AnnualRevenue.displayValue : data.fields.AnnualRevenue.value

		}
	}
}