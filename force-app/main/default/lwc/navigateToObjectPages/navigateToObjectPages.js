import { LightningElement } from 'lwc';
import {NavigationMixin} from 'lightning/navigation';
import {encodeDefaultFieldValues} from 'lightning/pageReferenceUtils';
export default class NavigateToObjectPages extends NavigationMixin(LightningElement) 
{
	// Create Account record
	navigateToAccountRecord()
	{
		this[NavigationMixin.Navigate]({
			type:'standard__objectPage',
			attributes:
			{
				objectApiName: 'Account',
				actionName: 'new'
			}
		})
	}

	// Create Contact record
	navigateToContactRecord()
	{
		this[NavigationMixin.Navigate]({
			type:'standard__objectPage',
			attributes:
			{
				objectApiName: 'Contact',
				actionName: 'new'
			}
		})
	}
	
	// Create Opportunity record with Default field values
	navigateToOpportunityRecord()
	{
		const defaultValues = encodeDefaultFieldValues({
			Name:'Real Estate',
			LeadSource:'web',
			StageName: 'prospecting'
		})
		this[NavigationMixin.Navigate]({
			type:'standard__objectPage',
			attributes:
			{
				objectApiName:'Opportunity',
				actionName: 'new'
			},
			state:
			{
				defaultFieldValues : defaultValues
			}
		})	
	}

	navigateToListView()
	{
		this[NavigationMixin.Navigate]({
			type:'standard__objectPage',
			attributes:
			{
				objectApiName: 'Contact',
				actionName: 'list'
			},
			state:
			{
				filterName: 'Recent'
			}
		})
	}

	navigateToFiles()
	{
		this[NavigationMixin.Navigate]({
			type: 'standard__objectPage',
			attributes:
			{
				objectApiName: 'ContentDocument',
				actionName: 'home'
			}
		})
	}
}