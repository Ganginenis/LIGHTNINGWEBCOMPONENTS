import { LightningElement, wire} from 'lwc';
import { getListUi } from 'lightning/uiListApi';
import CONTACT_OBJECT from '@salesforce/schema/Contact'
export default class WireUpdateRecord extends LightningElement 
{
	contacts=[]


	@wire(getListUi, {objectApiName: CONTACT_OBJECT})
	listViewHandler({data, error})
	{
		if(data)
		{
			console.log(data)
			this.contacts = data.records.records.map(item=>{
				return 
				{
					"Id": this.getValue(item, 'Id'),
					"Name": this.getValue(item, 'Name'),
					"Title": this.getValue(item, 'Title'),
					"Phone": this.getValue(item, 'Phone'),
					"Email": this.getValue(item, 'Email')

				}
			})
		}
		if(error)
		{
			console.error(error)
		}
	}

	getValue(data, field)
	{
		return data.fields[field].value
	}
}