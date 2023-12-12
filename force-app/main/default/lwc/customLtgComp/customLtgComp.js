import { LightningElement } from 'lwc';

export default class CustomLtgComp extends LightningElement 
{
	footerchangeHandler()
	{
		const footerElem = this.template.querySelector('footer');
		if(footerElem)
		{
			footerElem.classList.remove('slds-hide')
		}
	}
}