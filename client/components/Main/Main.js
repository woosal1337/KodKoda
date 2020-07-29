import React, { useState } from "react";
import { Typography, Grid, Divider, makeStyles , Container} from "@material-ui/core";
import Question from "../Question";
import { questions } from "../../utils/fakeData";

const useStyles = makeStyles((theme) => ({
  root: {
    boxShadow: "none",
  },
  flexGrow: {
    flexGrow: 1,
  },
  title: {
    fontFamily: "Hind",
    fontWeight: 700,
    fontSize: 36,
  },
  rightTitle: {
    lineHeight: "29px",
  },
  divider: {
    marginBottom: 20,
  },
  mainContainer: {
    maxWidth: 900,
  },
  mainGridContainer: {
    marginTop: 20,
  },
  questionsContainer: {},
}));

const Main = (props) => {
  const classes = useStyles();
  const [loading, setLoading] = useState(false);
  const { data, auth } = props
  console.log(props)
  /*
    useEffect(() => {
      setLoading(true)
      fetch('/questions')
        .then( res => res.json() )
        .then( questions => console.log(questions) )
    }, []);

    */

  return (
    <Container maxWidth="md" className={classes.mainContainer}>
      <Grid container spacing={4} className={classes.mainGridContainer}>
        <Grid item xs={12} md={12}>
          <Typography
            variant="h2"
            component="h2"
            className={classes.title}
            gutterBottom
          >
            Güncel Sorular
          </Typography>
          <Divider className={classes.divider} />
          <Grid
            container
            direction="column"
            wrap="nowrap"
            spacing={1}
            className={classes.questionsContainer}
          >
            {data.map((q, i) => {
              return (
                <Grid key={i} item>
                  <Question q={q} auth={props.auth} />
                </Grid>
              );
            })}
          </Grid>
        </Grid>
      </Grid>
    </Container>
  );
};

export default Main;
