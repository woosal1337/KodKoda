import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import Link from './Link';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  appBar: {
    backgroundColor: theme.palette.background.default
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
    fontWeight: 700,
    color: theme.palette.secondary.main,
    //background: `-webkit-linear-gradient(135deg, #ff921e, #ff921e 85%, #2B9AEA)`,
    //'-webkit-background-clip': 'text',
    //'-webkit-text-fill-color': 'transparent',
  },
  login: {
    fontWeight:600
  }
}));

export default function Bar() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <AppBar position="static" className={classes.appBar}>
        <Toolbar>
          <Typography variant="h2" component="h2" className={classes.title}>
            418 | Kodluyoruz
          </Typography>
          <Button color="inherit"><Typography variant="h4" className={classes.login}> Giriş Yap </Typography></Button>
          <Button color="inherit"><Typography variant="h4" className={classes.login}> Üye Ol </Typography> </Button>
        </Toolbar>
      </AppBar>
    </div>
  );
}