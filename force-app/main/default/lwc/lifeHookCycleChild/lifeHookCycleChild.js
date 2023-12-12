import { LightningElement } from 'lwc';

export default class LifeHookCycleChild extends LightningElement 
{
	constructor()
	{
		super()
		console.log("Child constructor called")
	}

	connectedCallback()
	{
		console.log("child connectedCallback called")
		throw new Error('Loading of child component failed...')
	}

	renderedCallback()
	{
		console.log("child renderedCallback called")
	}

	disconnectedCallback()
	{
		alert("Child disconnectedCallback called")
	}
}