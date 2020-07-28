import React, { useState, useEffect }  from 'react';
import Typography from '@material-ui/core/Typography';
import Link from '../Link';
import MUIRichTextEditor from 'mui-rte'

const useStyles = makeStyles(theme => ({
    root: {
        boxShadow: 'none',
    },
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
        <MUIRichTextEditor label="Start typing..." />
    );
}

export default BetterEditor;