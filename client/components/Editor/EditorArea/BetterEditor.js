import React, { useState, useEffect }  from 'react';
import Typography from '@material-ui/core/Typography';
import Link from '../../Link';
import MUIRichTextEditor from 'mui-rte'

import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(theme => ({
    root: {
        boxShadow: 'none',
        borderBottom: "1px solid gray" 
    },
    editor: {
        borderBottom: "1px solid gray" 
    }
}))

const BetterEditor = () => {
    const classes = useStyles();
    const [loading, setLoading] = useState(false);
    
    if ( loading ) {
        return (
            <CircularProgress />
        )
    }
    return (
        <MUIRichTextEditor label="Start typing..." className={classes.root}  />
    );
}

export default BetterEditor;