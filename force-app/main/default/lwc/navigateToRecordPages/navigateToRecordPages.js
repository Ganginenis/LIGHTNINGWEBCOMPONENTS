import { LightningElement } from 'lwc';
import {NavigationMixin} from 'lightning/navigation'
export default class NavigateToRecordPages extends NavigationMixin(LightningElement) 
{
	navigateToRecordViewMode()
	{
		this[NavigationMixin.Navigate]({
			type: 'standard__recordPage',
			attributes:
			{
				recordId : '0031m00000ZCIqVAAX',
				objectApiName : 'Contact',
				actionName : 'view'
			}
		})
	}

	navigateToRecordEditMode()
	{
		this[NavigationMixin.Navigate]({
			type:'standard__recordPage',
			attributes:
			{
				recordId: '0011m00000p31DPAAY',
				objectApiName: 'Account',
				actionName: 'edit'
			}
		})
	}
}