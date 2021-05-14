import React from 'react'


class Quotes extends React.Component {
    render () {

        // mathRandom = () =>{
        //     return Math.floor(Math.random() * 1000)
        // }
    return (
        <div className ="quote">
        {this.props.quotes.length > 1 ? this.props.quotes[Math.floor(Math.random() * 1000)].text : null}
        <br/>
        - {this.props.quotes.length > 1 ? this.props.quotes[Math.floor(Math.random() * 1000)].author : null}
        </div>
    )
    }
}

export default Quotes
