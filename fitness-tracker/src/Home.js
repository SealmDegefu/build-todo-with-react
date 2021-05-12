import React from 'react'
import Header from './Components/Header'
import Quotes from './Components/Quotes'
import Body from './Components/Body'
import Footer from './Components/Footer'

class Home extends React.Component {

	constructor() {
		super()
	
		this.state = {
		  weeklyGoal: [],
		  quotes:[],
		  filters: {
			day: "all"
		  }
		}
	  }
	
	componentDidMount(){
		// if (Todolist.length === 0){  
			fetch('https://type.fit/api/quotes')
			.then(res => res.json())
			.then(quotes => this.setState({ quotes: quotes}))
		// }
	}
	  
	  fetch=()=>{
		fetch('http://localhost:3001/weeklyGoal')
		.then(res=>res.json())
		.then(data =>this.setState({weeklyGoal:data}))
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
      <Body dataContent={this.state.weeklyGoal}/>
      <Quotes quotes={this.state.quotes}/>
      <Footer />
		</div>
	)
}
}
export default Home
