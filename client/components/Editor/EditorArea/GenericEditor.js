import React, { useState, useEffect }  from 'react';
import MUIRichTextEditor from 'mui-rte'
import { MuiThemeProvider } from '@material-ui/core/styles'
import { convertToRaw } from "draft-js";
import { useRouter } from 'next/router'

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
    const { forwardRef, label, handleChange, handleBlur, userId, postId } = props;
    const router = useRouter()

    const onChange = editorState => {
        handleChange('bodyText', convertToRaw(editorState.getCurrentContent()))
    }

    const onBlur = () => {
        handleBlur('bodyText')
    }

    const onFocus = () => {
        if (userId) {
            if (!toolbar) {
                setToolbar(true)
            }
        } else {
            router.push(`/auth/soru/${postId}`)
        } 
    }
    return (
        <MuiThemeProvider theme={updateTheme}>
            <MUIRichTextEditor label={label} ref={forwardRef} onFocus={onFocus} onBlur={onBlur} toolbar={toolbar} onChange={onChange} controls={["title", "bold", "undo", "redo", "link", "bulletList", "quote", "code", "clear"]} />
        </MuiThemeProvider>
    );
}

export default GenericEditor;