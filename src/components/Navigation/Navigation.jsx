import React from "react";
import {
  AppBar,
  makeStyles,
  Toolbar,
  IconButton,
  Typography,
} from "@material-ui/core";
import MenuIcon from "@material-ui/icons/Menu";
import MenuDrawer from "./MenuDrawer";

const useStyles = makeStyles((theme) => ({
  appBar: {
    backgroundColor: "rgba(0,0,0,0)",
    boxShadow: "none",
    color: "#000000",
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
    textAlign: "left",
    marginLeft: theme.spacing(5),
    fontFamily: "'Gochi Hand', cursive",
  },
}));

function Navigation() {
  const classes = useStyles();

  const [state, setState] = React.useState({
    open: false,
  });

  const toggleDrawer = (toggle) => () => {
    setState({ ...state, open: toggle });
  };

  return (
    <AppBar position='static' className={classes.appBar}>
      <Toolbar>
        <Typography variant='h6' className={classes.title}>
          NEW FIT
        </Typography>
        <IconButton
          edge='start'
          className={classes.menuButton}
          color='inherit'
          aria-label='menu'
          onClick={toggleDrawer(true)}>
          <MenuIcon></MenuIcon>
        </IconButton>
      </Toolbar>
      <MenuDrawer toggleDrawer={toggleDrawer} open={state.open}></MenuDrawer>
    </AppBar>
  );
}

export default Navigation;
