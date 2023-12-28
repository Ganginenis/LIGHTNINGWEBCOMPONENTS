import { LightningElement, wire} from 'lwc';
import { getPicklistValues, getObjectInfo } from 'lightning/uiObjectInfoApi';
import ACCOUNT_OBJECT from '@salesforce/schema/Account'
import TYPE_FIELD from '@salesforce/schema/Account.Type'
import RATING_FIELD from '@salesforce/schema/Account.Rating'
import INDUSTRY_FIELD from '@salesforce/schema/Account.Industry'
export default class WirePicklistValues extends LightningElement {
	
	selectedType = '';
	selectedRating = '';
	selectedIndustry = ''
	typeOptions = []
	ratingOptions = []
	industryOptions = []

	// get typeOptions() {
    //     return [
    //         { label: 'New', value: 'new' },
    //         { label: 'In Progress', value: 'inProgress' },
    //         { label: 'Finished', value: 'finished' },
    //     ];
    // }

	@wire(getObjectInfo, {objectApiName: ACCOUNT_OBJECT})
	objectInfo

	@wire(getPicklistValues, {recordTypeId: '$objectInfo.data.defaultRecordTypeId', fieldApiName: TYPE_FIELD})
	typePicklistHandler({data, error}){
		if(data){
			console.log(data)
			this.typeOptions = [...this.generatePicklist(data)]
		}else{
			console.error(error)
		}
	}

	generatePicklist(data){
		return data.values.map(item=>({label: item.label, value: item.value}))
	}

	handleChange(event) {
        this.selectedType = event.detail.value;
    }


	/* Wire Adapater for Rating Field	 */
	@wire(getPicklistValues, {recordTypeId: '$objectInfo.data.defaultRecordTypeId', fieldApiName: RATING_FIELD})
	ratingPicklistHandler({data, error}){
		if(data){
			console.log(data)
			this.ratingOptions = [...this.generatePicklist(data)]
		}else{
			console.error(error)
		}
	}

	handleRatingChange(event) {
        this.selectedRating = event.detail.value;
    }

	/* Wire Adapater for Industry Field	 */
	@wire(getPicklistValues, {recordTypeId: '$objectInfo.data.defaultRecordTypeId', fieldApiName: INDUSTRY_FIELD})
	industryPicklistHandler({data, error}){
		if(data){
			console.log(data)
			this.industryOptions = [...this.generatePicklist(data)]
		}else{
			console.error(error)
		}
	}

	handleIndustryChange(event) {
        this.selectedIndustry = event.detail.value;
    }
}