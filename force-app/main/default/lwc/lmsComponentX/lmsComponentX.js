import { LightningElement, wire } from 'lwc';
import SampleMC from "@salesforce/messageChannel/SampleMessageChannel__c"
import { APPLICATION_SCOPE, subscribe, unsubscribe, MessageContext } from 'lightning/messageService';
export default class LmsComponentX extends LightningElement 
{
	subscription
	receivedMsg
	@wire(MessageContext)
	context

	connectedCallback()
	{
		this.subscribeMessage()
	}

	subscribeMessage()
	{
		this.subscription = subscribe(this.context, SampleMC, (message)=>{this.handleMessage(message)}, {scope : APPLICATION_SCOPE})
	}

	handleMessage(message)
	{
		this.receivedMsg = message.lmsData.value ? message.lmsData.value : 'No Message Received'
	}

	unsubscribeMessage()
	{
		unsubscribe(this.subscription)
		this.subscription = null
	}
}