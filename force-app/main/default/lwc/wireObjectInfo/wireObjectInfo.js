import { LightningElement, wire } from 'lwc';
import ACCOUNT_OBJECT from '@salesforce/schema/Account'
import CONTACT_OBJECT from '@salesforce/schema/Contact'
import { getObjectInfo, getObjectInfos } from 'lightning/uiObjectInfoApi';
export default class WireObjectInfo extends LightningElement 
{
	defaultRecordTypeId
	apiName

	@wire(getObjectInfo, {objectApiName: ACCOUNT_OBJECT})
	objectInfo({data, error})
	{
		if(data)
		{
			console.log(data)
			this.defaultRecordTypeId = data.defaultRecordTypeId
			this.apiName = data.apiName
		}
		if(error)
		{
			console.error(error)
		}
	}

	//Using property
	@wire(getObjectInfo, {objectApiName: ACCOUNT_OBJECT})
	objectInfoProperty

	objectInfos
	objectApiNames = [ACCOUNT_OBJECT, CONTACT_OBJECT]
	@wire(getObjectInfos,{objectApiNames: '$objectApiNames'})
	mulObjInfoHandler({data})
	{
		if(data)
		{
			console.log(data)
			this.objectInfos = data
		}
		
	}
}