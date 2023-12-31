import { LightningElement } from 'lwc';
import getAccountsList from '@salesforce/apex/getAccounts.getAccountsList'
export default class WireApexCallImperatively extends LightningElement {
	accounts
	methodHandler()
	{
		getAccountsList().then(result=>{
			this.accounts = result
			console.log(this.accounts)
		}).catch(error=>{
			console.error(error)
		})
	}
}