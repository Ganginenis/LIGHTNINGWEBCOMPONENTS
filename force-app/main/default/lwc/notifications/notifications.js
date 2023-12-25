import { LightningElement } from 'lwc';
import {ShowToastEvent} from 'lightning/platformShowToastEvent'
export default class Notifications extends LightningElement 
{

	showToast(title,message, variant)
	{
		const event = new ShowToastEvent({
			title,
			message,
			variant,
			mode: 'pester',
			messageData:[
				'salesforce',{
					url: 'https://www.salesforce.com/',
					label: 'Click Here'
				}
			]
		})
		this.dispatchEvent(event);
	}

	toastHandlerSuccess()
	{
		this.showToast('Success',' {0} Account Created Successfully {1}', 'success');
	}

	toastHandlerError()
	{
		this.showToast('Oops...!!!','Account Creation Failed', 'error');
	}

	toastHandlerInfo()
	{
		this.showToast('Info','This is a very large method', 'info');
	}

	toastHandlerWarning()
	{
		this.showToast('Warning...!!!','Account Name is Mandatory', 'warning');
	}

}