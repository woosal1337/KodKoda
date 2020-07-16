import React, { useState, useEffect }  from 'react';
import { useRouter } from 'next/router';
import Container from '@material-ui/core/Container';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import Divider from '@material-ui/core/Divider';
import Button from '@material-ui/core/Button';
import {Card, CardContent} from '@material-ui/core';
import Link from './Link';
import Question from './Question';

import { makeStyles } from '@material-ui/core/styles';
import { questions, answers } from '../utils/fakeData'; 

//import fetch from 'isomorphic-unfetch';

const useStyles = makeStyles(theme => ({
  root: {
    boxShadow: 'none',
  },
  flexGrow: {
    flexGrow: 1
  },
  title: {
    fontFamily: 'Hind',
    fontWeight: 700,
    fontSize: 28,
  },
  rightTitle:{
    lineHeight: '29px'
  },
  divider:{
    marginBottom:20,
  },
  mainContainer: {
    maxWidth:900
  },
  mainGridContainer:{
    marginTop:20
  },
  questionsContainer: {
  }
}))


const Main = props => {
    const classes = useStyles();
    const [loading, setLoading] = useState(false);

    /*
    useEffect(() => {
      setLoading(true)
      fetch('/questions')
        .then( res => res.json() )
        .then( questions => console.log(questions) )
    }, []);

    */

  return (
    <Container maxWidth="md" className={classes.mainContainer}>
      <Grid container spacing={4} className={classes.mainGridContainer} >
        <Grid item xs={12} md={12} >
          <Typography variant="h2" component="h2" className={classes.title} gutterBottom>
              Güncel Sorular
          </Typography>
          <Divider className={classes.divider} />
          <Grid container direction="column"  wrap="nowrap" spacing={1} className={classes.questionsContainer} >
            {questions.map((q, i) => {
              return (
                <Grid key={i}  item>
                  <Question q={q}/>
                </Grid>
              )
            })}
          </Grid>
        </Grid>
      </Grid>
    </Container>
  );
}


export default Main;
