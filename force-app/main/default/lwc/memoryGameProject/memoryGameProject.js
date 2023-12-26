import { LightningElement } from 'lwc';
import {loadStyle} from 'lightning/platformResourceLoader'
import font_awesome from '@salesforce/resourceUrl/fontAwesome'
export default class MemoryGameProject extends LightningElement 
{
	//initialization
	isLibLoaded = false
	cardsOpened = []
	cardsMatched = []
	moves = 0

	cards = 
	[
		{id:1, listClass:"card", type:'diamond', icon: 'fa fa-diamond'},
		{id:2, listClass:"card", type:'plane', icon: 'fa fa-paper-plane-o'},
		{id:3, listClass:"card", type:'anchor', icon: 'fa fa-anchor'},
		{id:4, listClass:"card", type:'bolt', icon: 'fa fa-bolt'},
		{id:5, listClass:"card", type:'cube', icon: 'fa fa-cube'},
		{id:6, listClass:"card", type:'anchor', icon: 'fa fa-anchor'},
		{id:7, listClass:"card", type:'leaf', icon: 'fa fa-leaf'},
		{id:8, listClass:"card", type:'bicycle', icon: 'fa fa-bicycle'},
		{id:9, listClass:"card", type:'diamond', icon: 'fa fa-diamond'},
		{id:10, listClass:"card", type:'bomb', icon: 'fa fa-bomb'},
		{id:11, listClass:"card", type:'leaf', icon: 'fa fa-leaf'},
		{id:12, listClass:"card", type:'bomb', icon: 'fa fa-bomb'},
		{id:13, listClass:"card", type:'bolt', icon: 'fa fa-bolt'},
		{id:14, listClass:"card", type:'bicycle', icon: 'fa fa-bicycle'},
		{id:15, listClass:"card", type:'plane', icon: 'fa fa-paper-plane-o'},
		{id:16, listClass:"card", type:'cube', icon: 'fa fa-cube'}
	]

	// to display card
	displayCard(event)
	{
		let currentCard = event.target
		currentCard.classList.add("open", "show", "disabled")
		this.cardsOpened = this.cardsOpened.concat(event.target)
		const len = this.cardsOpened.length
		if(len === 2)
		{
			this.moves = this.moves + 1
			if(this.cardsOpened[0].type === this.cardsOpened[1].type)
			{
				this.cardsMatched = this.cardsMatched.concat(this.cardsOpened[0], this.cardsOpened[1])
				this.matched()
			}
			else
			{
				this.unmatched()
			}
		}
	}

	matched()
	{
		this.cardsOpened[0].classList.add("match", "disabled")
		this.cardsOpened[1].classList.add("match", "disabled")
		this.cardsOpened[0].classList.remove("show", "open")
		this.cardsOpened[1].classList.remove("show", "open")
		this.cardsOpened = []
	}

	unmatched()
	{
		this.cardsOpened[0].classList.add("unmatched")
		this.cardsOpened[1].classList.add("unmatched")
		this.action('DISABLE')

		setTimeout(()=>{
			this.cardsMatched[0].classList.remove("show","open","unmatched")
			this.cardsMatched[1].classList.remove("show","open","unmatched")
			this.action('ENABLE')
			this.cardsOpened = []
		}, 1100)
	}

	action(action)
	{
		let cards = this.template.querySelectorAll('.card')
		Array.from(cards).forEach(item=>{
			if(action === 'ENABLE')
			{
				let isMatch = item.classList.contains('match')
				if(!isMatch)
				{
					item.classList.remove('disabled')
				}
			}
			if(action === 'DISABLE')
			{
				item.classList.add('disabled')
			}
		})
	}




	renderedCallback()
	{
		if(this.isLibLoaded)
		{
			return
		}
		else
		{
			loadStyle(this, font_awesome+'/fontawesome/css/font-awesome.min.css').then(()=>{
				console.log("loaded Successfully")
			}).catch(error=>{
				console.error(error);
			})
			this.isLibLoaded = true
		}
		
	}
}