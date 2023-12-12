import { LightningElement, api } from 'lwc';

export default class SetterCompChild extends LightningElement 
{
	userDetail
	@api 
	get detail()
	{
		return this.userDetail
	}

	set detail(data)
	{
		let newYear = data.year + 5;
		this.userDetail = {...data, year: newYear, "Ceo":"Sandeep Gangineni"}
	}
}