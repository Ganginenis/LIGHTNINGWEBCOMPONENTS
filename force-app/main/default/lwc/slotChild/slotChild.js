import { LightningElement } from 'lwc';

export default class SlotChild extends LightningElement 
{
	handleFooterChange()
	{
		const elem = this.template.querySelector('.slds-card__footer') 
		if(elem)
		{
			elem.classList.remove('slds-hide')
		}
	}
}