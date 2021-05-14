import React from 'react'
import clsx from 'clsx';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import Collapse from '@material-ui/core/Collapse';
import Avatar from '@material-ui/core/Avatar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import { red } from '@material-ui/core/colors';
import { makeStyles } from '@material-ui/core/styles';
  
const Todo = ({ text, todo, todos, setTodos }) => {
	const useStyles = makeStyles((theme) => ({
		root: {
		  maxWidth: 660,
		  textAlign: 'center',
		  marginLeft: 'auto',
		  marginRight: 'auto'
		},
		media: {
		  height: 0,
		  paddingTop: '56.25%', // 16:9
		},
		expand: {
		  transform: 'rotate(0deg)',
		  marginLeft: 'auto',
		  transition: theme.transitions.create('transform', {
			duration: theme.transitions.duration.shortest,
		  }),
		},
		expandOpen: {
		  transform: 'rotate(180deg)',
		},
		avatar: {
		  backgroundColor: red[500],
		},
	  }));
	  const classes = useStyles();

	//Events

	const deleteHandler =() =>{
			setTodos(todos.filter((element) => element.id !== todo.id))
		};
	
		   
		const deleteTodo = (id) =>{
			let options = {
			  method: "DELETE",
			  headers: {
				"Content-Type": "application/json",
				Accept: "application/json"
			  }
			};
			fetch( 'http://localhost:3001/tasks/'+ id, options)
			.then(response => response.json())
			.then(emptyObject => deleteHandler())
		  }
	
	
		const completeHandler = () => {
			setTodos(
				todos.map((item) => {
			if (item.id === todo.id) {
				return {
					...item, 
					completed: !item.completed,
				};
			}
				return item;
		})
			);
		}
	

	return (

	<Card className={classes.root} style={{margin: "20px", backgroundColor: "gray"}}>
      <CardHeader
        title="Go Ahead, Add Those Tasks"
        subheader= 'remember abs require work'
      />
      <CardContent>
        <Typography variant="body2" color="textSecondary" component="p">
		<div className="todo">
	<li className={`todo-item ${todo.completed ? "completed": ''}`}>
	{text}
	</li>
	<button onClick={completeHandler} className="complete-btn">
	<i className="fas fa-check"></i></button>
	<button onClick={() => deleteTodo(todo.id)} className="trash-btn"><i className="fas fa-trash"></i></button>
    </div>
        </Typography>
      </CardContent>
    </Card>
  );
  }

export default Todo