import { LightningElement } from 'lwc';
import bgImage from '@salesforce/resourceUrl/BgImage_Big'
import lionImage from '@salesforce/resourceUrl/lionImg'
export default class StaticResource extends LightningElement 
{
	bImage = bgImage
	svgImage = lionImage
}