import React from "react";
import PropTypes from "prop-types";
import { Container, Typography, Fab, makeStyles } from "@material-ui/core";
import { KeyboardArrowUp } from "@material-ui/icons";

MainContent.propTypes = {};

const useStyles = makeStyles((theme) => ({
  fab: {
    position: "absolute",
    bottom: theme.spacing(2),
    right: theme.spacing(2),
  },
}));

function MainContent(props) {
  const classes = useStyles();
  return (
    <Container maxWidth='lg'>
      <Typography
        component='div'
        style={{ backgroundColor: "#cfe8fc", height: "100vh" }}
      />
      <Fab className={classes.fab} color='inherit'>
        <KeyboardArrowUp></KeyboardArrowUp>
      </Fab>
    </Container>
  );
}

export default MainContent;
