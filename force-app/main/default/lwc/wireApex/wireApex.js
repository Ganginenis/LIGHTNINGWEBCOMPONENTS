import { LightningElement, wire } from 'lwc';
import getAccountsList from '@salesforce/apex/getAccounts.getAccountsList'
export default class WireApex extends LightningElement 
{
	//Wire an apex method to a property
	@wire(getAccountsList)
	accounts
	
	accountsList
	//Wire an apex method to a function
	@wire(getAccountsList)
	accountsHandler({data, error})
	{
		if(data)
		{
			this.accountsList = data.map(item=>{
				let newType = item.Type === 'Customer - Channel'? 'Channel' : item.Type === 'Customer - Direct' ? 'Direct': item.Type
				return {...item, newType}
			})
		}
		if(error)
		{
			console.error(error)
		}
	}
	
}