import { LightningElement, wire } from 'lwc';
import { getObjectInfo, getPicklistValuesByRecordType } from 'lightning/uiObjectInfoApi';
import ACCOUNT_OBJECT from '@salesforce/schema/Account'
export default class WireRecordTypePicklistValues extends LightningElement {

	selectedIndustry = ''
	selectedRating = ''
	selectedType = ''
	ratingOptions = []
	industryOptions = []
	typeOptions = []

	@wire(getObjectInfo, {objectApiName: ACCOUNT_OBJECT})
	objectInfo

	@wire(getPicklistValuesByRecordType, {recordTypeId: '$objectInfo.data.defaultRecordTypeId', objectApiName: ACCOUNT_OBJECT})
	picklistRecordTypeHandler({data, error})
	{
		if(data)
		{
			console.log(data)
			this.ratingOptions = this.picklistGenerator(data.picklistFieldValues.Rating)
			this.industryOptions = this.picklistGenerator(data.picklistFieldValues.Industry)
			this.typeOptions = this.picklistGenerator(data.picklistFieldValues.Type)
		}
		if(error){
			console.error(error)
		}
	}

	picklistGenerator(data)
	{
		return data.values.map(item=>({label : item.label, value : item.value}))
	}

	changeHandler(event)
	{
		console.log(event.target.name + ' ==> '+event.target.value)
		const {name, value} = event.target
		if(name === 'Industry')
		{
			this.selectedIndustry = value
		}
		if(name === 'Rating')
		{
			this.selectedRating = value
		}
		if(name === 'Type')
		{
			this.selectedType = value
		}
	}
}