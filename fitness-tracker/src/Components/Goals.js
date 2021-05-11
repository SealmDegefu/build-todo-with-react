import React from 'react'
import Data from './Data'

const Goals = ({dataContent}) => {
    return (
        <div>
        {dataContent.map(data => <Data data ={data} key={data.id} /> )}
        </div>
    )
}

export default Goals
