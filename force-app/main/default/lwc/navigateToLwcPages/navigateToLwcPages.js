import { LightningElement } from 'lwc';
import {NavigationMixin} from 'lightning/navigation'
export default class NavigateToLwcPages extends NavigationMixin(LightningElement) 
{
	navigateToLwcPage()
	{
		var definition={
			componentDef: 'c:navigationLwcTarget',
			attributes: 
			{
				recordId: '23156421312321'
			}
		}
		this[NavigationMixin.Navigate]({
			type:'standard__webPage',
			attributes:
			{
				url: '/one/one.app#'+btoa(JSON.stringify(definition))
			}
		})
	}
}