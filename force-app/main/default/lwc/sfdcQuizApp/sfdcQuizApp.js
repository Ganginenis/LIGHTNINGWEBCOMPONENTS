import { LightningElement } from 'lwc';

export default class SfdcQuizApp extends LightningElement 
{
	//Object to store answers
	selected={}

	//Correct Answers to show the results
	correctAnswers = 0;

	//use to show the result
	isSubmitted = false;

	hideSubmit = false;

	//Questionnaire
	myQuest = 
	[
		{
			id: 1,
			quest: "Which of the following is not a template loop?",
			options: 
			{
				a:"for:each",
				b:"iterator",
				c:"map"
			},
			answer:"c"
		},
		{
			id: 2,
			quest: "Which of the file is invalid in LWC component folder?",
			options: 
			{
				a:".svg",
				b:".apex",
				c:".js"
			},
			answer:"b"
		},
		{
			id: 3,
			quest: "Which of the following is not a directive?",
			options: 
			{
				a:"for:each",
				b:"if:true",
				c:"@track"
			},
			answer:"c"
		}
	]

	//display the question & options in the component
	changeHandler(event)
	{
		console.log(event.target.name);
		console.log(event.target.value);
		//shorthand notation
		const {name,value} = event.target
		this.selected = {...this.selected,[name]:value}
	}

	//Checking whether all options were selected or not
	get allNotSelected()
	{
		return !(Object.keys(this.selected).length === this.myQuest.length)
	}

	//to change the text
	get isScoredFull()
	{
		return `slds-text-heading_large ${this.myQuest.length === this.correctAnswers ? 'slds-text-color_success':'slds-text-color_error'}`
	}

	//Works when click on Submit
	submitHandler(event)
	{
		// to prevent reloading a page
		event.preventDefault();

		//Filter always return array
		let correct = this.myQuest.filter(item=>this.selected[item.id] === item.answer)

		this.correctAnswers = correct.length
		this.isSubmitted = true;
		console.log("this.correctAnswers",this.correctAnswers);
		this.hideSubmit = true;

	}

	//works when click on reset
	resetHandler(event)
	{
		this.selected = {};
		this.correctAnswers = 0;
		this.isSubmitted = false;
		this.hideSubmit = false;
	}
}