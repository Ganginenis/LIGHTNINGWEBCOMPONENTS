import { LightningElement } from 'lwc';
import LOCALE from '@salesforce/i18n/locale';
import CURRENCY from '@salesforce/i18n/currency';
import DIR from '@salesforce/i18n/dir'
export default class Internationalization extends LightningElement 
{
	// dir = DIR;
	// org currency and locale
	number = 724628
	formattedNumber = new Intl.NumberFormat(LOCALE, {
		style: 'currency',
		currency : CURRENCY,
		currencyDisplay: 'symbol'
	}).format(this.number)


	dir = 'rtl';
	//Changing of language & currency type
	forNumber = new Intl.NumberFormat('ar-EG',{
		style: 'currency',
		currency : 'USD',
		currencyDisplay: 'symbol'
	}).format(this.number)
}