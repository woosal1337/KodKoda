import React, { useState, useEffect }  from 'react';
import MUIRichTextEditor from 'mui-rte'
import { MuiThemeProvider } from '@material-ui/core/styles'

import { makeStyles } from '@material-ui/core/styles';
import theme from '../../../src/theme'
import palette from '../../../src/palette'

const updateTheme = { ...theme,
    overrides: {
        ...theme.overrides,
        
        MUIRichTextEditor: {
            ...theme.overrides.MUIRichTextEditor,
            editor: {
                ...theme.overrides.MUIRichTextEditor.editor,
                backgroundColor: palette.background.paper,
                minHeight:150
              },
        }
    }
}

const GenericEditor = props => {
    const [loading, setLoading] = useState(false);
    const [toolbar, setToolbar] = useState(false);
    const { forwardRef, label, handleChange } = props;

    const onChange = editorState => {
        handleChange('body', editorState)
    }

    const onFocus = () => {
        if (!toolbar) {
            setToolbar(true)
        }
    }

    return (
        <MuiThemeProvider theme={updateTheme}>
            <MUIRichTextEditor label={label} ref={forwardRef} onFocus={onFocus} toolbar={toolbar} onChange={onChange} controls={["title", "bold", "undo", "redo", "link", "bulletList", "quote", "code", "clear"]} />
        </MuiThemeProvider>
    );
}

export default GenericEditor;