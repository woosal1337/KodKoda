import React, { useState, useEffect }  from 'react';
import { useRouter } from 'next/router';
import Container from '@material-ui/core/Container';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import Divider from '@material-ui/core/Divider';
import Button from '@material-ui/core/Button';
import {Card, CardContent} from '@material-ui/core';
import CircularProgress from '@material-ui/core/CircularProgress';
import IconButton from '@material-ui/core/IconButton';
import ExpandLessIcon from '@material-ui/icons/ExpandLess';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import Link from './Link';
import Question from './Question';
import  palette  from '../src/palette'

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
    fontSize: 40,
    fontWeight: 700,
    letterSpacing: 1
  },
  rightTitle:{
    lineHeight: '29px'
  },
  divider:{
    marginTop:20,
    marginBottom:20,
  },
  postContainer: {
  },
  postGridContainer:{
    marginTop:20
  },
  questionContainer: {
    minHeight: 200,
  },
  questionText: {
    marginTop:5,
    fontSize: 18,
    lineHeight: 1.5
  },
  buttons: {
    marginTop:-6,
    marginLeft:4
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
}))


const PostBody = props => {
    const classes = useStyles();
    const [loading, setLoading] = useState(false);
    const [post, setPost] = useState({});

    useEffect(() => {
        setLoading(true)
        setPost(questions.filter(obj => { return obj.id === props.id })[0])
        setLoading(false)
    }, []);
    
    console.log(post);
    if (!Object.keys(post).length) {
        return (
            <CircularProgress />
        )
    }
    return (
        <Grid item xs={12} md={12} >
            <Typography variant="h3" component="h3" className={classes.title} gutterBottom>
              {post.title.charAt(0).toUpperCase() + post.title.slice(1)}
            </Typography>
            <Divider className={classes.divider} />
            <Grid container direction="column"  wrap="nowrap" className={classes.questionsContainer} >
                <Grid container direction="row" spacing={1} className={classes.questionContainer}>
                    <Divider className={classes.divider}/>
                    <Grid container item direction="column" alignItems="left"  xs={1} className={classes.buttons}>
                        <Grid item >
                            <IconButton edge="start" className={classes.voteButton}  aria-label="menu">
                                <ExpandLessIcon className={classes.voteMore} />
                            </IconButton>
                        </Grid>
                        <Grid item >
                            <IconButton edge="start" className={classes.voteButton} aria-label="menu">
                                <ExpandMoreIcon className={classes.voteLess}  />
                            </IconButton>
                        </Grid>
                    </Grid>
                    <Grid item xs={10} >
                        <Grid container direction="column" justify={"space-between"} className={classes.questionContainer}>
                            <Grid item >
                                <Typography variant="body1" component="body1" className={classes.questionText}>
                                    {post.text.charAt(0).toUpperCase() + post.text.slice(1)}
                                </Typography>
                            </Grid>
                            <Grid item >
                                <Grid container direction="row" alignItems="center" spacing={2}>
                                    <Grid item>
                                        <Typography className={classes.questionPoster}>
                                            {post.name}
                                        </Typography>
                                    </Grid>
                                    <Grid item>
                                        <Button
                                            variant="contained"
                                            onClick={props.goToLanguage}
                                            size="small"
                                            className={classes.languageButton}
                                            style= {{ 'background': palette.languages[post.language] }}
                                        >
                                            {post.language}
                                        </Button>
                                    </Grid>
                                    <Grid item>
                                        <Typography className={classes.questionResponders}>
                                            {post.responses}
                                        </Typography>
                                    </Grid>
                                </Grid>
                            </Grid>
                        </Grid>
                    </Grid>
                </Grid>
            </Grid>
        </Grid>
    );
}


export default PostBody;
