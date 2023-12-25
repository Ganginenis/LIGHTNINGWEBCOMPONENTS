import { LightningElement } from 'lwc';
import MOMENT from '@salesforce/resourceUrl/moment';
import ANIMATE from '@salesforce/resourceUrl/animate';
import {loadScript, loadStyle} from 'lightning/platformResourceLoader';
export default class ThirdPartyFiles extends LightningElement 
{
	currentDate 
	isLibLoaded = false
	renderedCallback()
	{
		if(this.isLibLoaded)
		{
			return
		}
		else
		{
			Promise.all([
				loadScript(this, MOMENT+'/moment/moment.min.js'),
				loadStyle(this, ANIMATE+'/animate/animate.min.css')

			]).then(()=> {
				//Success
				this.setDateOnScreen()
			}).catch(error=>{
				console.error(error);
			})
			this.isLibLoaded = true
		}
		
	}
	setDateOnScreen()
	{
		this.currentDate = moment().format('LLLL')
	}

}