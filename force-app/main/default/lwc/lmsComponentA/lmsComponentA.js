import { LightningElement, wire } from 'lwc';
import sampleMC from '@salesforce/messageChannel/SampleMessageChannel__c'
import { APPLICATION_SCOPE, MessageContext, publish } from 'lightning/messageService';
export default class LmsComponentA extends LightningElement 
{
	inputValue

	@wire(MessageContext)
	context

	inputHandler(event)
	{
		this.inputValue = event.target.value
	}

	publishMessage()
	{
		const message=
		{
			lmsData : 
			{
				value: this.inputValue 
			}
		}

		publish(this.context, sampleMC, message)
	}
}