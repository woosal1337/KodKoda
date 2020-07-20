import React, { useState, useEffect }  from 'react';
import Grid from '@material-ui/core/Grid';

import { makeStyles } from '@material-ui/core/styles';

//import fetch from 'isomorphic-unfetch';

const useStyles = makeStyles(theme => ({
    answersContainer: {
        //minHeight: 200,
    },
}))

const PostAnswers = props => {
    const classes = useStyles();
    const { data } = props;
    return (
      <Grid container direction="column" wrap="nowrap" spacing={1} className={classes.answersContainer}>
        {data.map((e, i) => {
            return (
                <Grid key={i} item>
                  <PostAnswer data={e}/>
                </Grid>
              )
        })
        }
      </Grid>
    );
}


export default PostAnswers;
