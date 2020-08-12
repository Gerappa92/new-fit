import React from "react";
import { makeStyles, SwipeableDrawer, List, ListItem } from "@material-ui/core";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import InboxIcon from "@material-ui/icons/MoveToInbox";
import MailIcon from "@material-ui/icons/Mail";

MenuDrawer.propTypes = {
  toggleDrawer: null,
  open: false,
};

const useStyles = makeStyles(() => ({
  list: {
    width: 250,
  },
}));

function MenuDrawer(props) {
  const classes = useStyles();
  return (
    <SwipeableDrawer
      anchor='left'
      open={props.open}
      onOpen={props.toggleDrawer(true)}
      onClose={props.toggleDrawer(false)}>
      <div
        className={classes.list}
        onClick={props.toggleDrawer(false)}
        onKeyDown={props.toggleDrawer(false)}>
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
  );
}

export default MenuDrawer;
