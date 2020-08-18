import React from "react";
import {
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Typography,
  makeStyles,
  Grid,
  Divider,
} from "@material-ui/core";
import PhoneIcon from "@material-ui/icons/Phone";
import MailIcon from "@material-ui/icons/Mail";
import InstagramIcon from "@material-ui/icons/Instagram";
import FacebookIcon from "@material-ui/icons/Facebook";

const useStyles = makeStyles((theme) => ({
  root: {
    width: "100%",
    color: "black",
  },
}));

function Footer(props) {
  const classes = useStyles();

  const goToFacebook = (event) =>
    window.open("https://www.facebook.com/NewFootballIndividualTraining/");

  const goToInstagram = (event) =>
    window.open("https://www.instagram.com/new_f.i.t_/");

  return (
    <>
      <Grid item xs={12}>
        <Typography style={{ margin: "20px 20px 0" }} variant='h4'>
          Kontakt
        </Typography>
      </Grid>

      <Grid item xs={9}>
        <List className={classes.root}>
          <Divider></Divider>
          <ListItem alignItems='flex-start'>
            <ListItemIcon>
              <PhoneIcon />
            </ListItemIcon>
            <ListItemText primary='791-734-121' />
          </ListItem>

          <ListItem alignItems='flex-start'>
            <ListItemIcon>
              <MailIcon />
            </ListItemIcon>
            <ListItemText primary='newfootball.i.t@gmail.com' />
          </ListItem>
        </List>
      </Grid>
      <Grid item xs={3}>
        <List>
          <Divider></Divider>
          <ListItem alignItems='flex-start' onClick={goToInstagram}>
            <ListItemIcon>
              <InstagramIcon />
            </ListItemIcon>
          </ListItem>

          <ListItem alignItems='flex-start' onClick={goToFacebook}>
            <ListItemIcon>
              <FacebookIcon />
            </ListItemIcon>
          </ListItem>
        </List>
      </Grid>
    </>
  );
}

export default Footer;
