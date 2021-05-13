import React from 'react'
import Data from './Data'

const Goals = ({dataContent, onCompleted}) => {
    return (
        <div>
        {dataContent.map(data => <Data data ={data} key={data.id} onCompleted={onCompleted}/> )}
        </div>
    )
}

export default Goals


//body>goals>data