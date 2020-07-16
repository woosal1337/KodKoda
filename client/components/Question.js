import React, { useState, useEffect }  from 'react';
import { useRouter } from 'next/router';
import Container from '@material-ui/core/Container';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import Divider from '@material-ui/core/Divider';
import Button from '@material-ui/core/Button';
import {Card, CardContent} from '@material-ui/core';
import Link from './Link';
import IconButton from '@material-ui/core/IconButton';
import ExpandLessIcon from '@material-ui/icons/ExpandLess';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';

import { makeStyles } from '@material-ui/core/styles';
import  palette  from '../src/palette'

const useStyles = makeStyles(theme => ({
  root: {
    boxShadow: 'none',
    background: '#212A4F'
  },
  flexGrow: {
    flexGrow: 1
  },
  questionContainer:{
  },
  questionTextContainer: {
    marginTop:5
  },
  questionTitle:{
      fontSize:18,
      fontWeight:600,
      marginBottom:10,
      '&:hover': {
        textDecoration: 'underline'
      }
  },
  question:{},
  questionPoster: {},
  questionPostedIn: {},
  questionResponders: {},
  languageButton: {
    background: 'linear-gradient(45deg, var(--background-start) 30%, var(--background-end) 90%)',
    borderRadius: 3,
    boxShadow: 'none',
    border: 0,
    fontSize:14,
    fontWeight: 600,
    color: 'white',
    height: 24,
    padding: '0 10px',
  },
  buttons: {
      marginTop:-6
  },
  voteButton: {
    color: theme.palette.text.secondary,
  },
  voteMore: {
    fontSize: 40,
    margin:-12
  },
  voteLess: {
    fontSize: 40,
    margin:-12,
    marginTop: -18
  },
  divider: {
    marginTop:20,
    marginBottom: 30,
  }
}))


const Question = props => {
    const classes = useStyles();
    const { q } = props
    const goToLanguage = () => {
    }
    return (
        <Grid container direction="row" spacing={1} className={classes.questionContainer}>
            <Divider className={classes.divider}/>
            <Grid container item direction="column" alignItems="left" justify="center" xs={1} className={classes.buttons}>
                <Grid item xs>
                    <IconButton edge="start" className={classes.voteButton}  aria-label="menu">
                        <ExpandLessIcon className={classes.voteMore} />
                    </IconButton>
                </Grid>
                <Grid item xs>
                    <IconButton edge="start" className={classes.voteButton} aria-label="menu">
                        <ExpandMoreIcon className={classes.voteLess}  />
                    </IconButton>
                </Grid>
            </Grid>
            <Grid item xs={8} className={classes.questionTextContainer}>
                <Grid container direction="column" >
                    <Grid item >
                        <Link href="/soru/[id]/" as={`/soru/${q.id}`} style={{ textDecoration: 'none' }}>
                            <Typography variant="h5" component="h5" className={classes.questionTitle}>
                                {q.title.charAt(0).toUpperCase() + q.title.slice(1)}
                            </Typography>
                        </Link>
                    </Grid>
                    <Grid item>
                        <Grid container direction="row" alignItems="center" spacing={2}>
                            <Grid item>
                                <Typography className={classes.questionPoster}>
                                    {q.name}
                                </Typography>
                            </Grid>
                            <Grid item>
                                <Button
                                    variant="contained"
                                    onClick={props.goToLanguage}
                                    size="small"
                                    className={classes.languageButton}
                                    style= {{ 'background': palette.languages[q.language] }}
                                >
                                    {q.language}
                                </Button>
                            </Grid>
                            <Grid item>
                                <Typography className={classes.questionResponders}>
                                    {q.responses}
                                </Typography>
                            </Grid>
                        </Grid>
                    </Grid>
                </Grid>
            </Grid>
        </Grid>
    );
}

{/* 
<Grid item>
    <Typography className={classes.question}>
        {q.question.charAt(0).toUpperCase() + q.question.slice(1)}
    </Typography>
</Grid>
*/ }

/*
'--background-start': '#FE6B8B',
'--background-end': '#FF8E53',
'--box-shadow': 'rgba(255, 105, 135, .3)',
*/

//Main.getInitialProps = context => ({ response: context.query.response, token: context.query.token});


export default Question;

