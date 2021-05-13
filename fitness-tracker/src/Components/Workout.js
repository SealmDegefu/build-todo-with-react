import React from 'react'
import Header from './Header'
import Goals from './Goals'

 class Workout extends React.Component {
	constructor() {
		super()
	
		this.state = {
		  weeklyGoal: [],
		  filters: {
			day: "all"
		  }
		}
	  }
	  fetch=()=>{
		fetch('http://localhost:3000/weeklyGoal')
		.then(res=>res.json())
		.then(data =>this.setState({weeklyGoal:data}))
	  }
	  
	  dataFilter = () => {
		
		let url = 'http://localhost:3000/weeklyGoal'
		if(this.state.filters.day !== 'all'){
		  url += `?day=${this.state.filters.day}`
		}
	  fetch(url)
	  .then(res => res.json())
	  .then(dateArr => this.setState({weeklyGoal: dateArr}))
		}
		onChangeType =({target: {value} }) =>{
		  this.setState( {filters: { day: value}})
		}

		onCompleted =(id) => {
			const completedTask = this.state.weeklyGoal.map(goal => (goal.id == id) ? { ...goal, isCompleted: true} : goal )
		   this.setState({weeklyGoal: completedTask})
		   }

		render () {

	return (
		<div>
			<Header dataFilter={this.dataFilter} onChangeType={this.onChangeType} />
			<Goals 
			dataContent={this.state.weeklyGoal}
			onCompleted={this.onCompleted} />
		</div>
	)
		}
}
export default Workout