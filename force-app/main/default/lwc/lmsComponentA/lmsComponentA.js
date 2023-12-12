import { LightningElement, wire } from 'lwc';
import SampleMC from "@salesforce/messageChannel/SampleMessageChannel__c"
import { APPLICATION_SCOPE, publish, MessageContext } from 'lightning/messageService';
export default class LmsComponentA extends LightningElement 
{
	inputVal
	@wire(MessageContext)
	context

	textHandler(event)
	{
		this.inputVal = event.target.value
	}

	publishHandler()
	{
		const message = {
			lmsData:{
				value:this.inputVal
			}
		}
		// Publish Context - publish(MessageContext, messageChannel, message)
		publish(this.context, SampleMC, message)
	}
	
}