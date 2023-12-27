import { LightningElement } from 'lwc';
import {NavigationMixin} from 'lightning/navigation'
export default class NavigateToRecordPages extends NavigationMixin(LightningElement) 
{
	navigateToWebPage()
	{
		this[NavigationMixin.Navigate]({
			type:'standard__webPage',
			attributes:
			{
				url:'https://www.salesforce.com'
			}
		})
	}
}