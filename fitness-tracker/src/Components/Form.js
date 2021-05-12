import React, { useState } from 'react'
import TextField from '@material-ui/core/TextField';
import { makeStyles } from '@material-ui/core/styles';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormHelperText from '@material-ui/core/FormHelperText';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';

const Form = ({ addTask }) => {


  const [ userInput, setUserInput ] = useState('');

  const handleChange = (e) => {
      setUserInput(e.currentTarget.value)
  }

  const handleSubmit = (e) => {
      e.preventDefault();
      addTask(userInput);
      setUserInput("");
  }

  const style ={
    backgroundImage: 'linear-gradient(120deg, #F6D365 0%, #FD85C7 100%)',
    padding: '7.5px'
}
  const useStyles = makeStyles((theme) => ({
    root: {
      '& > *': {
        margin: theme.spacing(1),
        width: '25ch',
      },
      formControl: {
        margin: theme.spacing(1),
        minWidth: 120,
      },
      selectEmpty: {
        marginTop: theme.spacing(2),
      }
    }
  }));
  const classes = useStyles();

    return (
        <div>
            <form className={classes.root} noValidate autoComplete="off" onSubmit={handleSubmit}>
            <input value={userInput} type="text" onChange={handleChange} placeholder="Enter task..."/>
    <button>Submit</button>
      {/* <input  
	  type="text" className="todo-input" />
      <button className="todo-button" type="submit" onClick={submitTodohandler}>
        <i className="fas fa-plus-square">Add Goal</i>
      </button> */}
      <FormControl style={style} className={classes.formControl}>
        <Select
          value="all"
          className={classes.selectEmpty}
          inputProps={{ 'aria-label': 'Without label' }}
        >
          <MenuItem style={style} value="All">
            All
          </MenuItem>
          <MenuItem value="completed">Completed</MenuItem>
          <MenuItem value="uncompleted">Uncompleted</MenuItem>
        </Select>
      </FormControl>
        </form>
        </div>
    )
}

export default Form
