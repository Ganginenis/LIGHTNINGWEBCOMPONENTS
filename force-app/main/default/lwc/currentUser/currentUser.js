import { LightningElement } from 'lwc';
import userId from '@salesforce/user/Id'
import isGuest from '@salesforce/user/isGuest'
export default class CurrentUser extends LightningElement 
{
	userID = userId;
	isCurrentUserGuest = isGuest;
}