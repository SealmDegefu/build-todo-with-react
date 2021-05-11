import React from 'react'

const Header = ({onChangeType, fetch}) => {
    return (
        <div>
            <h1>Fitness-Tracker</h1>
            <div className="ui form">
        <h3>Pick a Day</h3>
        <div className="field">
        <select name='todos' className='filter-todo' onChange={onChangeType}>
        <option value="all">----None----</option>
            <option value="monday">Monday</option>
            <option value="tuesday">Tuesday</option>
            <option value="wednesday">Wednesday</option>
            <option value="thursday">Thursday</option>
            <option value="friday">Friday</option>
          </select>
          <button className="ui secondary button" onClick={fetch}>daily workout</button>

        </div>
</div>

        </div>

    )
}

export default Header
