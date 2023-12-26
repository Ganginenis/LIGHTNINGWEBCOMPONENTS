import { LightningElement } from 'lwc';
import {NavigationMixin} from 'lightning/navigation'
export default class NavigateToRelationshipRelatedPages extends NavigationMixin(LightningElement) 
{
	navigateToRelationshipRelPage()
	{
		this[NavigationMixin.Navigate]({
			type:'standard__recordRelationshipPage',
			attributes:
			{
				recordId: '0011m00000p3R9iAAE',
				objectApiName: 'Account',
				relationshipApiName: 'Contacts',
				actionName: 'view'
			}
		})
	}
}