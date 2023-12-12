import { LightningElement } from 'lwc';

export default class C2pModalComp extends LightningElement 
{
	closeHandler()
	{
		const myEvent = new CustomEvent('close', {
			// bubbles: true,
			detail: {
				name:"Modal Closed...!!!"
			}
		})
		this.dispatchEvent(myEvent)
	}
}