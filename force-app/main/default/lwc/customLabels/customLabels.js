import { LightningElement } from 'lwc';
import LABEL_ONE from '@salesforce/label/c.labelOne';
import LABEL_TWO from '@salesforce/label/c.labelTwo';
// Example :- import greeting from '@salesforce/label/c.greeting';'
export default class CustomLabels extends LightningElement 
{
	customLabels = 
	{
		labelOne : LABEL_ONE,
		labelTwo : LABEL_TWO
	}
}