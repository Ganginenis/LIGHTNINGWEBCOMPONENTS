import { LightningElement, wire } from 'lwc';
import {getNavItems} from 'lightning/uiAppsApi'
export default class WireUiAppsApi extends LightningElement 
{
	result
	@wire(getNavItems, 
		{
			navItemNames: ['standard-Account'],
			pageSize: 30 
		})
	navItemsHandler({data, error})
	{
		if(data)
		{
			console.log(data)
			this.result = data.navItems[0]
		}
		if(error)
		{
			console.error(error)
		}
	}
}