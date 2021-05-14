import React from 'react'
import { makeStyles } from '@material-ui/core/styles';
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
import YouTube from 'react-youtube';




const Data = (props) => {
  // https://www.youtube.com/watch?v=_nBlN9yp9R8
  // https://youtu.be/_nBlN9yp9R8
  // https://youtu.be/UItWltVZZmE

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
  const [expanded, setExpanded] = React.useState(false);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  const opts = {
    height: '390',
    width: '640',
    playerVars: {
      // https://developers.google.com/youtube/player_parameters
      autoplay: 1,
    },
  };
  const videoOnReady = (event) => {
    // access to player in all event handlers via event.target
    event.target.pauseVideo();
  }

  const {videoId} = props
  return (

    <Card className={classes.root} style={{margin: "20px", backgroundColor: "gray"}}>
      <CardHeader
        title="Today's Workout Plan"
        subheader= {props.data.day}
      />
      <CardMedia/>
      <YouTube videoId="UItWltVZZmE" opts={opts} onReady={videoOnReady} />
      <CardContent>
        <Typography variant="body2" color="textSecondary" component="p">
        <ul className="date" style={{textAlign: 'left'}}>
			{props.data.task.map(task => <li>{task}</li>)}
			</ul>
        </Typography>
      </CardContent>
      <CardActions disableSpacing>
        <IconButton aria-label="add to favorites">
        </IconButton>
        <IconButton aria-label="share">
        </IconButton>
        {props.data.isCompleted === true?  <button className="ui">Task Completed</button> : <button className="ul" onClick ={() => props.onCompleted(props.data.id)}>Complete task</button>}
        </CardActions>
        </Card>
  );



    // return (
    //   <div className="card">
    //     <div className="content">
    //       <h3 className="header">
    //       {this.props.data.day}
    //       </h3>
    //       <div>
    //        
    //       </div>
    //       <div className="video content">
    //         <p>Daily Video: {this.props.data.video}</p>
    //       </div>
    //     </div>
    //     <div className="extra content">
    //     {this.props.data.isCompleted === 'true'?  <button className="ui disabled button">Task Completed</button> : <button className="ui primary button">Complete Task</button> }
    //     </div>
    //   </div>
    // )
  }

export default Data
