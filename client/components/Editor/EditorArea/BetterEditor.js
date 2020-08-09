import React, { useState, useEffect }  from 'react';
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

const BetterEditor = props => {
    const classes = useStyles();
    const [loading, setLoading] = useState(false);
    const { forwardRef, handleSave } = props;
    
    if ( loading ) {
        return (
            <CircularProgress />
        )
    }

    return (
        <MUIRichTextEditor label="Start typing..." ref={forwardRef} onSave={handleSave} className={classes.root} controls={["title", "bold", "undo", "redo", "link", "bulletList", "quote", "code", "clear"]} />
    );
}

export default BetterEditor;