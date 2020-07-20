import React, { useState, useEffect }  from 'react';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import Divider from '@material-ui/core/Divider';
import Button from '@material-ui/core/Button';
import CircularProgress from '@material-ui/core/CircularProgress';
import IconButton from '@material-ui/core/IconButton';
import ExpandLessIcon from '@material-ui/icons/ExpandLess';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import  palette  from '../../src/palette'
import Link from '../Link';
import PostQuestion from './PostQuestion';
import PostAnswers from './PostAnswer';

import { makeStyles } from '@material-ui/core/styles';
import { questions, answers } from '../../utils/fakeData';

const useStyles = makeStyles(theme => ({
    root: {
        boxShadow: 'none',
    },
    flexGrow: {
        flexGrow: 1
    },
    title: {
        fontSize: 36,
        fontFamily: 'Hind, sans-serif',
        fontWeight: 700,
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
    leftColumnContainer: {
        maxWidth:120,
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
    voteCount:{
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
        console.log(props.id)
        setPost({
            qs: questions.filter(obj => { return obj.id === props.id })[0],
            as: answers.filter(obj => { return obj.id === props.id })[0]
        })
        setLoading(false)
    }, [props]);
    
    if ( !post.qs || !Object.keys(post.qs).length) {
        return (
            <CircularProgress />
        )
    }
    console.log(post)
    return (
        <Grid>
            <Typography variant="h3" component="h3" className={classes.title} gutterBottom>
              {post.qs.title.charAt(0).toUpperCase() + post.qs.title.slice(1)}
            </Typography>
            <Divider className={classes.divider} />
            <Grid container direction="column" wrap="nowrap" >
                <PostQuestion data={post.qs} />
                <PostAnswers data={post.as} />
            </Grid>
        </Grid>
    );
}


export default PostBody;
