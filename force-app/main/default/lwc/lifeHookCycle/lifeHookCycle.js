import { LightningElement } from 'lwc';

export default class LifeHookCycle extends LightningElement 
{
	childVisible = false
	constructor()
	{
		super()
		console.log("Parent Constructor Called")
	}

	connectedCallback()
	{
		console.log("Parent connectedCallback Called")
	}
	renderedCallback()
	{
		console.log("Parent renderedCallback Called")
	}
	// name
	// changeHandler(event)
	// {
	// 	this.name = event.target.value;
	// }

	handleClick(event)
	{
		this.childVisible = !this.childVisible
	}

	errorCallback(error, stack)
	{
		console.log(error.message)
		console.log(stack)
	}
}