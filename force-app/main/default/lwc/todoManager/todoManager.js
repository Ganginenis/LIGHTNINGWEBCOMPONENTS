import { LightningElement, track } from 'lwc';

export default class TodoManager extends LightningElement {

	@track time = "9:26 PM";
	@track greeting = "Good Morning";
	@track todos = []

	connectedCallback(){
		this.getTime();
		setInterval(()=>{
			this.getTime();
		}, 1000)
	}

	getTime(){
		const date = new Date();
		const hour = date.getHours();
		const min = date.getMinutes();

		this.time = `${this.getHour(hour)}:${this.getDoubleDigit(min)} ${this.getMidDay(hour)}`;

		this.setGreeting(hour);
	}

	getHour(hour){
		return hour === 0 ? 12 : hour > 12 ? (hour - 12) : hour;
	}

	getMidDay(hour){
		return hour > 12 ? "PM":"AM";
	}

	getDoubleDigit(digit){
		return digit < 10 ? "0"+digit : digit;
	}

	setGreeting(hour){
		if(hour < 12){
			this.greeting = "Good Morning";
		}else if(hour >=12 && hour <16){
			this.greeting = "Good Afternoon";
		}else{
			this.greeting = "Good Evening";
		}
	}

	todoHandler(){
		const inputBox = this.template.querySelector("lightning-input");
		console.log('Current Value', inputBox.value);

		const todo = {
			todoId: this.todos.length,
			todoName: inputBox.value,
			done: false,
			todoDate: new Date()
		};
		this.todos.push(inputBox.value)
		inputBox.value = ""
	}
}