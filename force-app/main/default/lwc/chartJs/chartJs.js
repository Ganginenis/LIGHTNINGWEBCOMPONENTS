import { LightningElement } from 'lwc';
import chartJs from '@salesforce/resourceUrl/chartJs'
import { loadScript } from 'lightning/platformResourceLoader'
export default class ChartJs extends LightningElement {
	isChartJsInitialized

	renderedCallback(){
		if(this.isChartJsInitialized)
		{
			return;
		}
		loadScript(this, chartJs+'/chartJs/Chart.js').then(()=>{
			console.log("Loaded Successfully")
			this.isChartJsInitialized = true
			this.loadCharts()
		}).catch(error=>{
			console.error(error)
		})
	}

	loadCharts(){
		window.Chart.platform.disableCSSInjection = true
		const canvas = document.createElement('canvas')
		this.template.querySelector('div.chart').appendChild(canvas)
		const ctx = canvas.getContext('2d')
		this.chart = new window.Chart(ctx,this.config())
	}

	config(){
		return{
			type: 'bar',
			data: {
				labels: ['Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange'],
				datasets: [{
					label: '# of Votes',
					data: [12, 19, 3, 5, 7, 4],
					backgroundColor: [
						'rgba(255, 129, 132, 0.2)',
						'rgba(54, 162, 235, 0.2)',
						'rgba(255, 206, 86, 0.2)',
						'rgba(75, 192, 192, 0.2)',
						'rgba(153, 102, 255, 0.2)',
						'rgba(255, 159, 64, 0.2)'
					],
					borderColor: [
						'rgba(255, 99, 132, 1)',
						'rgba(54, 162, 235, 1)',
						'rgba(255, 206, 86, 1)',
						'rgba(75, 192, 192, 1)',
						'rgba(153, 102, 255, 1)',
						'rgba(255, 159, 64, 1)'
					],
					borderWidth: 1
				}]
			},
			options: {
				scales: {
					y: {
					beginAtZero: true
					}
				}
			}
		}
	}
}