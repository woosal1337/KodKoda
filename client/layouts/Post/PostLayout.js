import React, { useState, useEffect }  from 'react';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';

import { makeStyles } from '@material-ui/core/styles';

//import fetch from 'isomorphic-unfetch';

const useStyles = makeStyles(theme => ({
  root: {
    boxShadow: 'none',
  },
  flexGrow: {
    flexGrow: 1
  },
  title: {
    fontWeight: 700,
    letterSpacing: 1
  },
  rightTitle:{
    lineHeight: '29px'
  },
  divider:{
    marginBottom:20,
  },
  postContainer: {
    maxWidth:900
  },
  postGridContainer:{
    marginTop:20
  },
  questionsContainer: {
  }
}))


const PostLayout = props => {
    const classes = useStyles();
    const { children } = props;
    const [loading, setLoading] = useState(false);

    return (
      <Container maxWidth="sm" className={classes.postContainer}>
        <Grid container spacing={4} className={classes.postGridContainer} >
          {children}
        </Grid>
      </Container>
    );
}


export default PostLayout;
