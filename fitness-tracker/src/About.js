import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
const useStyles = makeStyles({
  root: {
    maxWidth: 555,
  marginTop: '40px',
  },
  media: {
    height: 120,
  },
});
const About = () => {
  const classes = useStyles();
  return (
  <div class="float-container" style ={{
    padding: '20px'}}>
  <div class="float-child" style={{ width: '50%',
    float: 'left',
    padding: '20px'}}>
  <Card className={classes.root}>
      <CardActionArea>
        <CardMedia
    style={{height: 440}}
          className={classes.media}
          image="https://media-exp1.licdn.com/dms/image/C4E03AQH3neb_TD2utw/profile-displayphoto-shrink_200_200/0/1554138262986?e=1626307200&v=beta&t=zB6B5Fk9l1GLnOfu7HqSxjjANGO4ODNoNbjxngRiwZk"
          title="Contemplative Reptile"
        />
        <CardContent >
          <Typography gutterBottom variant="h5" component="h2">
            Allen, Founder and CEO (Chief Entertainment Officer)
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            Born in Los Angeles, Calafornia, Allen is a software Engineer at spaceX and a founding member of Fitness Tracker. Also a part time Chippendales dancer. A dedicate dancer who's passions of dance and technology has motivated him in helping create Fitness Tracker. Being able to share his love of fitness to others. 
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button size="small" color="primary" target="_blank" href='https://apalacios1994.medium.com/'>
          Blog Posts
        </Button>
        <Button size="small" color="primary" target="_blank" href='https://www.linkedin.com/in/allen-palacios-73b677151/'>
          LinkedIn
        </Button>
      </CardActions>
    </Card>
  </div>
  <div class="float-child"style={{ width: '50%',
    float: 'left',
    padding: '20px'}}>
  <Card className={classes.root}>
      <CardActionArea>
        <CardMedia
    style={{height: 440}}
          className={classes.media}
          image="data:image/jpeg;base64,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"
          title="Contemplative Reptile"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            Selam, Co-Founder and CFO (Chief Fun Officer)
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            Born and Raised in Addis Ababa, Ethiopia, Selam is a software engineer at Google and the founding member of Fitness tracker. Her love for fitness and creating innovative technology led her to come up with an app that easily motivates people to be the best version of themselves.
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button size="small" color="primary" target="_blank" href='https://selam-tadd-degefu.medium.com/'>
          Blog Posts
        </Button>
        <Button size="small" color="primary" target="_blank" href='https://www.linkedin.com/in/selamdegefu/'>
          LinkedIn
        </Button>
      </CardActions>
    </Card>
  </div>
</div>
  );
}
export default About