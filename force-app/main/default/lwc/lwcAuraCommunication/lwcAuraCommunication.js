import { LightningElement, api } from 'lwc';

export default class LwcAuraCommunication extends LightningElement 
{
	@api title

	callAura()
	{
		const event = new CustomEvent("sendmsg",{
			detail: {
				"msg": "Hello from LWC"
			}
		})
		this.dispatchEvent(event)
	}
}