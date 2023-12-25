import { LightningElement } from 'lwc';
import ASSET_FILE from '@salesforce/contentAssetUrl/typescripthandbookbetapdf'
export default class AssetLibrary extends LightningElement 
{
	file = ASSET_FILE;
}