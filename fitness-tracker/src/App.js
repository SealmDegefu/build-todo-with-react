import logo from './logo.svg';
import './App.css';
import Header from './components.js/Header'
import Quotes from './components.js/Quotes'
import Body from './components.js/Body'
import Footer from './components.js/Footer'
import React from 'react';


class App extends React.Component {
  
  
  
    state = {
      weeklyGoal: [],
      filters: {
        day: "all"
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
  .then(dateArr => console.log(dateArr))
    }
    onChangeType =({target: {value} }) =>{
      this.setState( {filters: { type: value}})
    }
    
render(){
  return (
    <div className="App">
      <Header dataFilter={this.dataFilter} onChangeType={this.onChangeType} fetch={this.fetch}/>
      <Body dataContent={this.state.weeklyGoal}/>
      <Quotes/>
      <Footer/>
    </div>
  );
}
}


export default App;
