import React, { useState, useEffect, useRef }  from 'react';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import ExpandLessIcon from '@material-ui/icons/ExpandLess';
import Link from '../Link';
import MUIRichTextEditor from 'mui-rte';
import { MuiThemeProvider } from '@material-ui/core/styles'
import theme from '../../src/theme'
import palette from '../../src/palette'

import GenericEditor from "../Editor/EditorArea/GenericEditor";
import { useFormik } from "formik";
import { EditorState, convertToRaw } from "draft-js";
import { responseEditorValidations } from "../../utils/form";

import { makeStyles } from '@material-ui/core/styles';

const updateTheme = { ...theme,
    overrides: {
        ...theme.overrides,
        MUIRichTextEditor: {
            ...theme.overrides.MUIRichTextEditor,
            editor: {
                ...theme.overrides.MUIRichTextEditor.editor,
                minHeight:150
              },
            editorContainer: {
                ...theme.overrides.MUIRichTextEditor.editorContainer,
            }
        }
    }
}

const useStyles = makeStyles(theme => ({
    root: {
        boxShadow: 'none',
    },
    MUIRichTextEditor: {
      root: {
        color: 'red',
      },
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
        width: '100%'
    },
    nameLanguage:{
        marginTop:10
    },
    leftColumnContainer: {
        maxWidth:120,
    },
    questionText: {
        marginTop:5,
        fontSize: 18,
        lineHeight: 1.5,
        //minWidth: 800
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
    responseEditorContainer:{
        marginTop:20
    },
    postButtonGrid: {
        marginTop: 20,
    },
    postButton: {
        //background: theme.palette.secondary.main, //'linear-gradient(45deg, var(--background-start) 30%, var(--background-end) 90%)',
        borderRadius: 3,
        boxShadow: "none",
        border: 0,
        fontSize: 20,
        fontWeight: 600,
        color: "white",
        height: 24,
        padding: 20,
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
    const { data, id, userId, userName, onMutate } = props

    const onEditorSubmit = (values) => {
        const handled = handlePostResponse(values) 
    };

    async function handlePostResponse(values) {
        // Data format for Question 
        // {q:doc.data(), a:answers, id: req.query.id}
        if (userId) {   
            // ADD CLIENT VALIDATIONS HERE WITH YUP
            const rData = {
              body: convertToRaw(values.body.getCurrentContent()),
              postId: id,
              userId: userId,
              userName: userName
            };
            // update the local data immediately
            // NOTE: key is not required when using useSWR's mutate as it's pre-bound   
            onMutate(rData)
        } 
      }

    const editorRef = useRef(null);
    const formik = useFormik({
        initialValues: {
          body: new EditorState.createEmpty(),
        },
        validate: responseEditorValidations,
        onSubmit: onEditorSubmit,
    });

    return (
        <Grid container alignItems="stretch" direction="row" spacing={1} className={classes.questionContainer}>
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
                <Grid container  direction="column" justify="space-between" >
                    <Grid item >
                        { data.body.blocks ? 
                            <MuiThemeProvider theme={updateTheme}>
                                <MUIRichTextEditor readOnly={true} toolbar={false} defaultValue={JSON.stringify(data.body)} />
                            </MuiThemeProvider>
                            :
                            <Typography variant="body1" component="body" className={classes.questionText}>
                               {data.body.charAt(0).toUpperCase() + data.body.slice(1)}
                            </Typography>
                        }
                    </Grid>
                    <Grid item className={classes.nameLanguage}>
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
                    <form onSubmit={formik.handleSubmit}>
                        <Grid item className={classes.responseEditorContainer}>
                            <GenericEditor
                                forwardRef={editorRef}
                                label={"Buraya cevabınızı yazın..."}
                                handleChange={formik.setFieldValue}
                            />
                        </Grid>
                        <Grid item align="right" className={classes.postButtonGrid}>
                            <Button
                              type="submit"
                              variant="contained"
                              size="large"
                              color="secondary"
                              className={classes.postButton}
                            >
                              Paylaş
                            </Button>
                        </Grid>
                    </form>
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
