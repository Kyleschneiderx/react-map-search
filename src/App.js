import React from 'react';
import logo from './logo.svg';
import './App.css';
import Grid from '@material-ui/core/Grid';
import Card from '@material-ui/core/Card'
import CardContent from '@material-ui/core/CardContent';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button'
import CardMedia from '@material-ui/core/CardMedia';
import hat from './image/imageonline-co-whitebackgroundremoved.png'
import BClip from './image/video_BC.mov'

const useStyles = makeStyles({
  root: {
    width: 400,
  },
  media: {
    height: 400,
  },
});

function App() { 
  const classes = useStyles();
  return (
  <div className='App'>
    <div>
      <video autoPlay loop muted
      style={{
        position:'absolute',
        width:'100%',
        left:'50%',
        top:'50%',
        height:'100%',
        ObjectFit: 'cover',
        transform: 'translate(-50%, -50%)',
        zIndex:'-1'

      }}>
        <source src={BClip} type='video/mp4'/>
      </video>
    </div>

  <Grid
  container
  spacing={0}
  direction="column"
  alignItems="center"
  justify="center"
  style={{ minHeight: '100vh' }}
>

  <Grid item xs={3}>
    <Card className={classes.root} style={{ background: 'transparent', boxShadow: 'none'}}>
      {/* <CardContent>
        Castello One
      </CardContent> */}
      <CardMedia
          className={classes.media}
          image={hat}
          title="Contemplative Reptile"
      />
      <Button variant="contained" color="primary">Buy Now</Button>
    </Card>
  </Grid>   

</Grid> 
</div>

  );
}

export default App;
