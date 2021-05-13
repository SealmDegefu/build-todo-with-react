import React from 'react'
import Header from './Components/Header'
import Quotes from './Components/Quotes'
import Body from './Components/Body'
import Footer from './Components/Footer'

class Home extends React.Component {

	constructor() {
		super()
	
		this.state = {
		  quotes:[]
		}
	  }
	
	componentDidMount(){
		// if (Todolist.length === 0){  
			fetch('https://type.fit/api/quotes')
			.then(res => res.json())
			.then(quotes => this.setState({ quotes: quotes}))
		// }
	}
	  
		render () {
	return (
		<div className="home">
      <Body />
      <Quotes quotes={this.state.quotes}/>
	  <Footer />
		</div>
	)
}
}
export default Home
