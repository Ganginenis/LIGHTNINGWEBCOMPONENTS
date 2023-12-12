import { LightningElement } from 'lwc';

export default class C2pParentComp extends LightningElement 
{
	showModel = false
	msg
	modalHandler()
	{
		this.showModel = true
	}

	closeHandler(event)
	{
		this.msg = event.detail.name
		this.showModel = false
	}
}