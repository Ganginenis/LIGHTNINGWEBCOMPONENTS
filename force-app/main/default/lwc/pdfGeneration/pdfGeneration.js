import { LightningElement } from 'lwc';

export default class PdfGeneration extends LightningElement {

	imageUrl = 'https://www.sparksuite.com/image/logo.png'

	invoiceData = {
		invoiceNo: '00010701',
		invoiceCreated: 'January 1, 2023',
		invoiceDue: 'January 10, 2024',
		companyName: 'Gangineni Groups Inc.',
		address1: '8103 E Southern Ave Suite 235',
		address2: 'Mesa, AZ 85209'
	}

	clientData = {
		client: 'Apple Inc.',
		userName: 'Tim Cook',
		email: 'tim@apple.com'
	}

	services = [
		{name: 'Consultant Fee', amount: 74545.00},
		{name: 'Website Design', amount: 7962474.00},
		{name: 'Hosting (3 months)', amount: 1000.00}
	]

	get totalAmount(){
		return this.services.reduce((total, service)=>{
			return total = total + service.amount
		}, 0)
	}
}