import React from "react";
import { makeStyles, SwipeableDrawer, List, ListItem } from "@material-ui/core";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import PhoneIcon from "@material-ui/icons/Phone";
import InfoIcon from "@material-ui/icons/Info";
import AssignmentIndIcon from "@material-ui/icons/AssignmentInd";
import InstagramIcon from "@material-ui/icons/Instagram";
import FacebookIcon from "@material-ui/icons/Facebook";

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
  console.log(props);

  const swipe = (top) => {
    console.log("swipe", top);
    props.toggleDrawer(false);
    window.scrollTo({
      top: top,
      left: 0,
      behavior: "smooth",
    });
  };

  return (
    <SwipeableDrawer
      anchor='right'
      open={props.open}
      onOpen={props.toggleDrawer(true)}
      onClose={props.toggleDrawer(false)}>
      <div
        className={classes.list}
        onClick={props.toggleDrawer(false)}
        onKeyDown={props.toggleDrawer(false)}>
        <List>
          <ListItem button onClick={() => swipe(props.aboutPos)}>
            <ListItemIcon>
              <InfoIcon />
            </ListItemIcon>
            <ListItemText primary={"Szczegóły"} />
          </ListItem>
          <ListItem button onClick={() => swipe(props.whoPos)}>
            <ListItemIcon>
              <AssignmentIndIcon />
            </ListItemIcon>
            <ListItemText primary={"Dla kogo?"} />
          </ListItem>
          <ListItem button onClick={() => swipe(props.contactPos)}>
            <ListItemIcon>
              <PhoneIcon />
            </ListItemIcon>
            <ListItemText primary={"Kontakt"} />
          </ListItem>
          <ListItem button>
            <ListItemIcon>
              <InstagramIcon />
            </ListItemIcon>
            <ListItemText primary={"Instagram"} />
          </ListItem>
          <ListItem button>
            <ListItemIcon>
              <FacebookIcon />
            </ListItemIcon>
            <ListItemText primary={"Facebook"} />
          </ListItem>
        </List>
      </div>
    </SwipeableDrawer>
  );
}

export default MenuDrawer;
