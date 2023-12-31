import { LightningElement, wire } from 'lwc';
import getAccountsByType from '@salesforce/apex/getAccounts.getAccountsByType'
export default class WireApexGetAccountsByType extends LightningElement {
	selectedType = ''
	@wire(getAccountsByType, {type: '$selectedType'})
	accountsType

	get typeOptions(){
		return[
			{label: "Customer - Channel", value: "Customer - Channel"},
			{label: "Customer - Direct", value: "Customer - Direct"}
		]
	}

	typeHandler(event){
		this.selectedType = event.target.value
	}

}