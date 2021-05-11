import React from 'react'

const Header = ({onChangeType, dataFilter}) => {

    const style ={
        backgroundImage: 'linear-gradient(120deg, #F6D365 0%, #FD85C7 100%)',
        padding: '7.5px'
    }
    return (
        <div>
            <h1 style={{marginTop: "30px", fontSize: "60px"}}>Fitness-Tracker</h1>
            <div className="ui form">
        <p style={{marginBottom: "30px", fontSize: "20px"}}><em>World's Best Accountable Partner</em></p>
        <h3>Pick a Day</h3>
        <div className="field">
        <select name='todos' className='filter-todo' style={{ backgroundImage: 'linear-gradient(120deg, #F6D365 0%, #FD85C7 100%)',
        padding: '10px'}} onChange={onChangeType} >
        <option value="all">----None----</option>
            <option value="Monday">Monday</option>
            <option value="Tuesday">Tuesday</option>
            <option value="Wednesday">Wednesday</option>
            <option value="Thursday">Thursday</option>
            <option value="Friday">Friday</option>
          </select>
            <button style={style}onClick={dataFilter} >Pick Today's Workout</button>
        </div>
</div>

        </div>

    )
}

export default Header
