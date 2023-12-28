import { LightningElement, wire } from 'lwc';
import id from '@salesforce/user/Id'
import NAME_FIELD from '@salesforce/schema/User.Name'
import EMAIL_FIELD from '@salesforce/schema/User.Email'
import { getRecord } from 'lightning/uiRecordApi'
const fields = [NAME_FIELD, EMAIL_FIELD]
export default class WireUserDetail extends LightningElement 
{
	
	userId = id
	userDetails
	//0051m000006PJmSAAW
	// Syntax:
	//@wire(adapaterId, {adapaterConfig})
	//propertyorfunction

	//Wire Adapater using Function (best approach)
	@wire(getRecord, {recordId: '$userId', fields})
	//userDetailHandler(response)
	// {
	//		console.log(response)
	//		let data = response.data
	//		let error = response.error
	// } or can be write like below

	userDetailHandler({data, error})
	{
		if(data)
		{
			this.userDetails = data.fields
		}
		if(error)
		{
			console.error(error)
		}
	}

	//Wire Adapater using Property
	@wire(getRecord, {recordId: '$userId', fields})
	userDetailProperty



}