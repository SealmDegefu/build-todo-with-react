import React from 'react'

const Header = ({onChangeType, dataFilter}) => {

    const style ={
        background: 'grey',
        padding: '7.5px',
        color: 'white'
    }
    return (
        <div className ="content" style={{opacity: 1}}>
        <h3 style={{opacity: 1}}>Pick a Day</h3>
        <div className="field">
        <select name='todos' className='filter-todo' style={{ background: 'white', color: 'black',
        padding: '10px'}} onChange={onChangeType} >
        <option value="all">----All----</option>
            <option value="Monday">Monday</option>
            <option value="Tuesday">Tuesday</option>
            <option value="Wednesday">Wednesday</option>
            <option value="Thursday">Thursday</option>
            <option value="Friday">Friday</option>
          </select>
            <button style={style} onClick={dataFilter} >Pick Today's Workout</button>
        </div>


        </div>

    )
}

export default Header
