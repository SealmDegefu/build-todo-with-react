import React from 'react'
import Header from './Header'

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
	dataFilter = () => {
		
		let url = 'http://localhost:3001/weeklyGoal'
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
		render () {
	return (
		<div>
			<Header dataFilter={this.dataFilter} onChangeType={this.onChangeType} />
		</div>
	)
		}
}
export default Workout