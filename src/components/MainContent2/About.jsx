import React from "react";
import {
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Divider,
  makeStyles,
} from "@material-ui/core";
import FitnessCenterIcon from "@material-ui/icons/FitnessCenter";
import DirectionsRunIcon from "@material-ui/icons/DirectionsRun";
import TimelineIcon from "@material-ui/icons/Timeline";
import AssignmentIcon from "@material-ui/icons/Assignment";
import AccountCircleIcon from "@material-ui/icons/AccountCircle";

const useStyles = makeStyles((theme) => ({
  root: {
    width: "100%",
    backgroundColor: theme.palette.background.paper,
    color: "black",
  },
  inline: {
    display: "inline",
  },
  item: {
    color: "black",
  },
}));

function About(props) {
  const classes = useStyles();

  return (
    <List className={classes.root}>
      <ListItem alignItems='flex-start'>
        <ListItemIcon>
          <FitnessCenterIcon />
        </ListItemIcon>
        <ListItemText
          primary='Trening techniki specjalnej'
          secondary={
            <React.Fragment>
              {" — Kilka dodatkowych słów o tym temacie..."}
            </React.Fragment>
          }
        />
      </ListItem>
      <Divider variant='inset' component='li' />

      <ListItem alignItems='flex-start'>
        <ListItemIcon>
          <DirectionsRunIcon />
        </ListItemIcon>
        <ListItemText
          primary='Kształtowanie cech motorycznych'
          secondary={
            <React.Fragment>
              {" — Kilka dodatkowych słów o tym temacie..."}
            </React.Fragment>
          }
        />
      </ListItem>
      <Divider variant='inset' component='li' />

      <ListItem alignItems='flex-start'>
        <ListItemIcon>
          <TimelineIcon />
        </ListItemIcon>
        <ListItemText
          // className={classes.item}
          primary='Trening pozycyjny'
          secondary={
            <React.Fragment>
              {" — Kilka dodatkowych słów o tym temacie..."}
            </React.Fragment>
          }
        />
      </ListItem>
      <Divider variant='inset' component='li' />

      <ListItem alignItems='flex-start'>
        <ListItemIcon>
          <AssignmentIcon />
        </ListItemIcon>
        <ListItemText
          // className={classes.item}
          primary='Ocena i analiza zawodnika'
          secondary={
            <React.Fragment>
              {" — Kilka dodatkowych słów o tym temacie..."}
            </React.Fragment>
          }
        />
      </ListItem>
      <Divider variant='inset' component='li' />

      <ListItem alignItems='flex-start'>
        <ListItemIcon>
          <AccountCircleIcon />
        </ListItemIcon>
        <ListItemText
          // className={classes.item}
          primary='Taktyka indywidualna'
          secondary={
            <React.Fragment>
              {" — Kilka dodatkowych słów o tym temacie..."}
            </React.Fragment>
          }
        />
      </ListItem>
    </List>
  );
}

export default About;
