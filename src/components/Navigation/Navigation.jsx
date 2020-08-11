import React from "react";
import PropTypes from "prop-types";
import {
  AppBar,
  makeStyles,
  Toolbar,
  IconButton,
  Typography,
  SwipeableDrawer,
  List,
  ListItem,
} from "@material-ui/core";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import MenuIcon from "@material-ui/icons/Menu";
import InboxIcon from "@material-ui/icons/MoveToInbox";
import MailIcon from "@material-ui/icons/Mail";

Navigation.propTypes = {};

const useStyles = makeStyles((theme) => ({
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
  list: {
    width: 250,
  },
}));

function Navigation(props) {
  const classes = useStyles();

  const [state, setState] = React.useState({
    open: false,
  });

  const toggleDrawer = (toggle) => (event) => {
    setState({ ...state, open: toggle });
  };

  return (
    <AppBar position='fixed' color='primary'>
      <Toolbar>
        <IconButton
          edge='start'
          className={classes.menuButton}
          color='inherit'
          aria-label='menu'
          onClick={toggleDrawer(true)}>
          <MenuIcon></MenuIcon>
        </IconButton>
        <Typography variant='h6' className={classes.title}>
          NEW FIT
        </Typography>
      </Toolbar>
      <SwipeableDrawer
        anchor='left'
        open={state.open}
        onOpen={toggleDrawer(true)}
        onClose={toggleDrawer(false)}>
        <div
          className={classes.list}
          onClick={toggleDrawer(false)}
          onKeyDown={toggleDrawer(false)}>
          <List>
            {["Inbox", "Starred", "Send email", "Drafts"].map((text, index) => (
              <ListItem button key={text}>
                <ListItemIcon>
                  {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
                </ListItemIcon>
                <ListItemText primary={text} />
              </ListItem>
            ))}
          </List>
        </div>
      </SwipeableDrawer>
    </AppBar>
  );
}

export default Navigation;
