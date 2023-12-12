import { LightningElement,api } from 'lwc';

export default class P2cSliderComp extends LightningElement 
{
	val = 20

	changeHandler(event)
	{
		this.val = event.target.value
	}

	@api resetSlider()
	{
		this.val = 50
	}

	
}