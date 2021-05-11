import React from 'react'
import Content from './Content'
import Goals from './Goals'

const Body = (props) => {
    return (
        <div className='rowC'>
            <Content />
            <Goals dataContent={props.dataContent} />
        </div>
    )
}

export default Body
