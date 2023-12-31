import { LightningElement} from 'lwc';
import getAccountsBySearch from '@salesforce/apex/getAccounts.getAccountsBySearch'
export default class WireApexMethodImperativelyWithParams extends LightningElement {
	
	searchKey = ''
	accounts
	timer
	searchHandler(event){
		window.clearTimeout(this.timer)
		this.searchKey = event.target.value
		this.timer = setTimeout(()=>{
			this.callApex()
		}, 1000)
	}

	callApex(){
		getAccountsBySearch({searchkey: this.searchKey}).then(result=>{
			this.accounts = result
		}).catch(error=>{
			console.error(error)
		})
	}
}