import { LightningElement } from 'lwc';

export default class HelloQuerySelector extends LightningElement 
{
	userNames = ["Joey","Chandler","Ross","Monica","Rachel","Pheobe"]


	fetchDetailHandler()
	{
		const elem = this.template.querySelector('h1')
		elem.style.border = "2px Solid Red"
		console.log(elem.innerText)
		const userElem = this.template.querySelectorAll('.name')
		Array.from(userElem).forEach(item => {
			console.log(item.innerText)
			item.setAttribute("title",item.innerText)
		});

		const childElem = this.template.querySelector('.child')
		childElem.innerHTML = '<p> Hey, I am a Child element </p>'
	}
}