import { LightningElement } from 'lwc';
import pubsub from 'c/pubsub';

export default class PubsubCompB extends LightningElement 
{
	message
	connectedCallback()
	{
		this.callSubscriber()
	}

	callSubscriber()
	{
		pubsub.subscribe('componentA', (message)=>{
			this.message = message
		})
	}


	// Communication from B to A
	text
	changeHandler(event)
	{
		this.text = event.target.value
	}

	fetchHandler()
	{
		pubsub.publish('componentB', this.text)
	}
}