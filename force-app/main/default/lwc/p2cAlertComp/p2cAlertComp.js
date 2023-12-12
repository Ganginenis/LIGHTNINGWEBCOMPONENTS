import { LightningElement, api } from 'lwc';

export default class P2cAlertComp extends LightningElement 
{
	@api message
	@api cardHeading
}