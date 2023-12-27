import { LightningElement } from 'lwc';
import {NavigationMixin} from 'lightning/navigation'
export default class NavigateToRecordPages extends NavigationMixin(LightningElement) 
{
	navigateToVfPage()
	{
		this[NavigationMixin.Navigate]({
			type: 'standard__webPage',
			attributes:
			{
				url: '/apex/navigatedVfPageTarget'
			}
		}).then(navigatedUrl=>{
			window.open(navigatedUrl, "_blank")
		})
	}
}