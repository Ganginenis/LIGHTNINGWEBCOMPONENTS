import { LightningElement, api} from 'lwc';
import { ShowToastEvent } from 'lightning/platformShowToastEvent';
import ACCOUNT_OBJECT from '@salesforce/schema/Account'
import NAME_FIELD from '@salesforce/schema/Account.Name'
import ANNUAL_REVENUE_FIELD from '@salesforce/schema/Account.AnnualRevenue'
import RATING_FIELD from '@salesforce/schema/Account.Rating'
import INDUSTRY_FIELD from '@salesforce/schema/Account.Industry'

export default class LightningRecordForm extends LightningElement 
{
	@api recordId
	@api objectApiName
	objectName = ACCOUNT_OBJECT
	fieldName = [NAME_FIELD, ANNUAL_REVENUE_FIELD, RATING_FIELD, INDUSTRY_FIELD]

	successHandler(event)
	{
		console.log(event.detail.id)
		const newToast = new ShowToastEvent({
			title: "Account Creation Successfull",
			message: "Record ID: "+ event.detail.id,
			variant: "success"
		});
		this.dispatchEvent(newToast)
	}
}