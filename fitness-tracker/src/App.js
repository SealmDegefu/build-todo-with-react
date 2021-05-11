import logo from './logo.svg';
import './App.css';
import Header from './Components/Header'
import Quotes from './Components/Quotes'
import Body from './Components/Body'
import Footer from './Components/Footer'
import React from 'react';


class App extends React.Component {
  
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
    
render(){
  return (
    <div className="App">
      <Header dataFilter={this.dataFilter} onChangeType={this.onChangeType} />
      <Body dataContent={this.state.weeklyGoal}/>
      <Quotes/>
      <Footer/>
    </div>
  );
}
}


export default App;
