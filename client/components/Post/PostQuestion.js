import React, { useState, useEffect }  from 'react';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import CircularProgress from '@material-ui/core/CircularProgress';
import IconButton from '@material-ui/core/IconButton';
import ExpandLessIcon from '@material-ui/icons/ExpandLess';
import  palette  from '../../src/palette'
import Link from '../Link';

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
        lineHeight: 1.5,
        minWidth: 800
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


const PostQuestion = props => {
    const classes = useStyles();
    const [loading, setLoading] = useState(false);
    const { data } = props

    return (
        <Grid container direction="row" spacing={1} className={classes.questionContainer}>
            <Grid item container direction="column" alignItems="left" xs={12} md={1} className={classes.buttons}>
                <Grid item >
                    <IconButton edge="start" className={classes.voteButton}  aria-label="menu">
                        <ExpandLessIcon className={classes.voteMore} />
                    </IconButton>
                </Grid>
                <Grid item >
                    <Typography className={classes.voteCount}>{data.voteCount}</Typography>
                </Grid>
            </Grid>
            <Grid item xs={12} md={9} >
                <Grid container direction="column" justify={"space-between"} className={classes.questionContainer}>
                    <Grid item >
                        <Typography variant="body1" component="body" className={classes.questionText}>
                            {
                                data.body.blocks ? 
                                    "This is a placeholder and should work smoothly."
                                    :
                                    data.body.charAt(0).toUpperCase() + data.body.slice(1)
                            }
                        </Typography>
                    </Grid>
                    <Grid item >
                        <Grid container direction="row" alignItems="center" spacing={2}>
                            <Grid item>
                                <Link href="/user/[id]/" as={`/user/${data.ownerUserId}`}>
                                    <Typography className={classes.questionPoster}>
                                        @{data.ownerName}
                                    </Typography>
                                </Link>
                            </Grid>
                            <Grid item>
                                <Button
                                    variant="contained"
                                    onClick={props.goToLanguage}
                                    size="small"
                                    className={classes.languageButton}
                                    style= {{ 'background': palette.languages[data.language] }}
                                >
                                    {data.language}
                                </Button>
                            </Grid>
                        </Grid>
                    </Grid>
                </Grid>
            </Grid>
            <Grid item xs={12} md={2} className={classes.leftColumnContainer}>
                <Grid container direction="column" >
                    <Grid item>
                        <Typography className={classes.questionResponders}>{data.answerCount} Cevap</Typography>
                    </Grid>
                </Grid>
            </Grid>
        </Grid>

    );
}


export default PostQuestion;
