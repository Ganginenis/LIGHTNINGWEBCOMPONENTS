import { LightningElement } from 'lwc';
import {NavigationMixin} from 'lightning/navigation'
export default class NavigateToAuraComponent extends NavigationMixin(LightningElement) 
{
	navigateToAuraComp()
	{
		this[NavigationMixin.Navigate]({
			type: 'standard__component',
			attributes:
			{
				componentName: 'c__AuraNavigationTarget'
			},
			state:
			{
				'c__id': '845123149478445'
			}
		})
	}
}