import { LightningElement } from 'lwc';
import hasViewDataPerm from '@salesforce/userPermission/ViewAllData';
import hasCustPermission from '@salesforce/customPermission/show_Details'
export default class PermissionCheck extends LightningElement 
{
	get hasViewDataPermAvailable()
	{
		return hasViewDataPerm;
	}

	get hascustomPermission()
	{
		return hasCustPermission;
	}
}