import React, { useState, useEffect }  from 'react';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import CircularProgress from '@material-ui/core/CircularProgress';
import IconButton from '@material-ui/core/IconButton';
import palette  from '../../src/palette'
import Link from '../Link';
import BetterEditor from './BetterEditor'

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
        marginTop:20,
        marginBottom:20,
    },
    postContainer: {
    },
    postGridContainer:{
        marginTop:20
    },
    editorContainer: {
        minHeight: 200,
    },
    leftColumnContainer: {
        maxWidth:120,
    },
    editorText: {
        marginTop:5,
        fontSize: 18,
        lineHeight: 1.5
    },
    buttons: {
        marginTop:-6,
        marginLeft:4
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


const EditorArea = ()=> {
    const classes = useStyles();

    return (
        <Grid container direction="row" spacing={1} >
            <Grid item direction="column" alignItems="left" xs={12} md={1} className={classes.buttons}>
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
                <Grid container direction="column" justify={"space-between"} className={classes.editorContainer}>
                    <Grid item >
                        <BetterEditor />
                    </Grid>
                </Grid>
            </Grid>
            <Grid item xs={12} md={2} className={classes.leftColumnContainer}>
                <Grid container direction="column" >
                    <Grid item>
                        <Typography className={classes.questionResponders}>Öneriler</Typography>
                    </Grid>
                </Grid>
            </Grid>
        </Grid>

    );
}


export default EditorArea;
