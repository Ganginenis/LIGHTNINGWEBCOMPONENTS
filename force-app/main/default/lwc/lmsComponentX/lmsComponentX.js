import { LightningElement, wire } from 'lwc';
import sampleMC from '@salesforce/messageChannel/SampleMessageChannel__c'
import { APPLICATION_SCOPE, subscribe, unsubscribe, MessageContext } from 'lightning/messageService';
export default class LmsComponentX extends LightningElement 
{
	receivedMessage
	subscription

	@wire(MessageContext)
	context

	connectedCallback()
	{
		this.subscribeMessage()
	}

	subscribeMessage()
	{
		this.subscription = subscribe(this.context, sampleMC, (message)=>{this.handleMessage(message)}, {scope:APPLICATION_SCOPE})
	}

	handleMessage(message)
	{
		this.receivedMessage = message.lmsData.value ? message.lmsData.value : 'No message Published'
	}

	unsubscribeMessage()
	{
		unsubscribe(this.subscription)
		this.subscription = null
	}

}