import React from 'react'
import Content from './Content'
import Goals from './Goals'

const Body = (props) => {
    return (
        <div className='rowC'>
            <Content dataContent={props.dataContent}/>
            <Goals/>
        </div>
    )
}

export default Body
