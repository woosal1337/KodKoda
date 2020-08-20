import React, { useState, useEffect }  from 'react';
import MUIRichTextEditor from 'mui-rte'
import { convertToRaw } from "draft-js";
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(theme => ({
    root: {
        boxShadow: 'none',
    },
}))

const BetterEditor = props => {
    const classes = useStyles();
    const [loading, setLoading] = useState(false);
    const { forwardRef, label } = props;

    const onChange = editorState => {
        props.handleChange('bodyText', convertToRaw(editorState.getCurrentContent()))
    }

    const onBlur = () => {
        props.handleBlur('bodyText')
    }
    
    if ( loading ) {
        return (
            <CircularProgress />
        )
    }

    return (
        <MUIRichTextEditor label={label} ref={forwardRef} onChange={onChange} onBlur={onBlur}  className={classes.root} controls={["title", "bold", "undo", "redo", "link", "bulletList", "quote", "code", "clear"]} />
    );
}

export default BetterEditor;