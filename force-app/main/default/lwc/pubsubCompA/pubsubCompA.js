import { LightningElement } from 'lwc';
import pubsub from 'c/pubsub';

export default class PubsubCompA extends LightningElement 
{
	message
	inputHandler(event)
	{
		this.message = event.target.value
	}

	clickHandler()
	{
		pubsub.publish('componentA', this.message)
	}


	// Communication from B to A

	text
	connectedCallback()
	{
		this.callSubscribers()
	}

	callSubscribers()
	{
		pubsub.subscribe('componentB', (text)=>{
			this.text = text
		})
	}
}