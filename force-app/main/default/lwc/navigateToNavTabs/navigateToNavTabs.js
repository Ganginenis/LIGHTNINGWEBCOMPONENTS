import { LightningElement } from 'lwc';
import {NavigationMixin} from 'lightning/navigation'
export default class NavigateToNavTabs extends NavigationMixin(LightningElement) 
{
	navigateToNavBarTab()
	{
		this[NavigationMixin.Navigate]({
			type: 'standard__navItemPage',
			attributes:
			{
				apiName: 'Aura_LWC'
			}
		})
	}
}