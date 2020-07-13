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
    fontWeight: 700,
    letterSpacing: 1
  },
  rightTitle:{
    lineHeight: '29px'
  },
  divider:{
    marginBottom:20,
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
      fetch(`${process.env.NEXT_API_URL}/submit`, {
          method: 'POST',
          headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
          },
          body: JSON.stringify({values:values, token:token})
      })
    }, []);

    */

  return (
    <Container maxWidth="md">
      <Grid container spacing={4} className={classes.mainGridContainer} >
        <Grid item xs={12} md={8}>
          <Typography variant="h3" component="h3" className={classes.title} gutterBottom>
              Güncel Sorular
          </Typography>
          <Divider className={classes.divider} />
          <Grid container direction="column"  wrap="nowrap" spacing={2} className={classes.questionsContainer} >
            {questions.map((q, i) => {
              return (
                <Grid key={i}  item>
                  <Question q={q}/>
                </Grid>
              )
            })}
          </Grid>
        </Grid>
        <Grid item xs={12} md={4}>
          <Typography variant="h4" component="h4" className={classes.rightTitle} gutterBottom>
              En Aktif Diller
          </Typography>
          <Divider className={classes.divider} />
        </Grid>
      </Grid>
    </Container>
  );
}

//Main.getInitialProps = context => ({ response: context.query.response, token: context.query.token});


export default Main;
