import React, { useEffect } from "react";
import {
  AppBar,
  makeStyles,
  Toolbar,
  IconButton,
  Box,
} from "@material-ui/core";
import MenuIcon from "@material-ui/icons/Menu";
import MenuDrawer from "./MenuDrawer";
import newFitLogo from "../../images/NEW_FIT_NASZYWKA_7x57cm.svg";
import { useState } from "react";

const useStyles = makeStyles((theme) => ({
  appBar: {
    backgroundColor: "#FDFDFB",
    color: "#050608",
  },

  title: {
    flexGrow: 1,
    textAlign: "left",
  },
  logo: {
    height: "175px",
    zIndex: "10",
    marginTop: "3px",
    position: "relative",
  },
}));

function Navigation(props) {
  const [positions, setPositions] = useState(props);

  useEffect(() => {
    setPositions(props);
  }, [props]);

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
        <Box className={classes.title}>
          <img src={newFitLogo} alt='logo' className={classes.logo} />
        </Box>
        <IconButton
          edge='start'
          className={classes.menuButton}
          color='inherit'
          aria-label='menu'
          onClick={toggleDrawer(true)}>
          <MenuIcon></MenuIcon>
        </IconButton>
      </Toolbar>
      <MenuDrawer
        {...positions}
        toggleDrawer={toggleDrawer}
        open={state.open}></MenuDrawer>
    </AppBar>
  );
}

export default Navigation;
