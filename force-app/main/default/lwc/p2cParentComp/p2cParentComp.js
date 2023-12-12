import { LightningElement} from 'lwc';

export default class P2cParentComp extends LightningElement 
{
	carouselData = 
	[
		{
			src:"https://www.lightningdesignsystem.com/assets/images/carousel/carousel-01.jpg",
			header:"First Card",
			description:"First card description."
		},
		{
			src:"https://www.lightningdesignsystem.com/assets/images/carousel/carousel-01.jpg",
			header:"Second Card",
			description:"Second card description."
		},
		{
			src:"https://www.lightningdesignsystem.com/assets/images/carousel/carousel-01.jpg",
			header:"Third Card",
			description:"Third card description."
		}
	]

	percentage = 10

	changeHandler(event)
	{
		this.percentage = event.target.value
	}

	handleClick()
	{
		this.template.querySelector('c-p2c-slider-comp').resetSlider()
	}
}