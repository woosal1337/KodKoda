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
import Linkify from 'react-linkify';

import { makeStyles } from '@material-ui/core/styles';

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
        marginBottom:20,
        backgroundColor: "#d7d7d7",
    },
    postContainer: {
    },
    postGridContainer:{
        marginTop:20
    },
    answersContainer: {
    },
    answerContainer: {
        minHeight:120,
        //maxWidth:300
    },
    answerPoster: {},
    answerText: {
        marginTop:5,
        fontSize: 16,
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


const PostAnswer = props => {
    const classes = useStyles();
    const [loading, setLoading] = useState(false);
    const { data } = props

    return (
        <>
            <Divider className={classes.divider}/>
            <Grid container direction="row" spacing={1} className={classes.answersContainer}>
                <Grid item direction="column" alignItems="left" xs={1} md={1} className={classes.buttons}>
                    <Grid item >
                        <IconButton edge="start" className={classes.voteButton}  aria-label="menu">
                            <ExpandLessIcon className={classes.voteMore} />
                        </IconButton>
                    </Grid>
                    <Grid item >
                        <Typography className={classes.voteCount}>{data.voteCount}</Typography>
                    </Grid>
                </Grid>
                <Grid item xs={10} md={10} >
                    <Grid container direction="column" justify={"space-between"} className={classes.answerContainer}>
                        <Grid item >
                            <Typography variant="body1" component="body1" className={classes.answerText}>
                                <Linkify properties={{target: '_blank', style: {color: 'white', textDecoration: 'underline', textDecorationColor: 'blue'}}} > 
                                    {data.text.charAt(0).toUpperCase() + data.text.slice(1)}
                                </Linkify> 
                            </Typography>
                        </Grid>
                        <Grid item >
                            <Grid item>
                                <Link href="/user/[id]/" as={`/user/${data.userId}`}>
                                    <Typography className={classes.answerPoster}>
                                        @{data.name}
                                    </Typography>
                                </Link>
                            </Grid>
                        </Grid>
                    </Grid>
                </Grid>
            </Grid>
        </>
    );
}


export default PostAnswer;
