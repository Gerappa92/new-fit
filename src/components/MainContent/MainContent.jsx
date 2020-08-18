import React, { useRef } from "react";
import { Typography, makeStyles, Grid, Box } from "@material-ui/core";
import SoccerIcon from "@material-ui/icons/SportsSoccer";
import barmkaImg from "../../images/Lampa.PNG";
import kipsta from "../../images/Kipsta.PNG";
import ColorButton from "../ColorButton/ColorButton";
import { scrollToRef } from "../../functions/scrollToRef";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    color: "white",
  },
  fab: {
    position: "absolute",
    bottom: theme.spacing(2),
    right: theme.spacing(2),
  },
  section1: {
    textAlign: "center",
    backgroundColor: "#636F29",
  },
  section2: {
    textAlign: "center",
    backgroundColor: mintCream,
    height: "300px",
    backgroundImage: `url(${barmkaImg})`,
    backgroundPosition: "left" /* Center the image */,
    backgroundRepeat: "no-repeat" /* Do not repeat the image */,
    backgroundSize:
      "cover" /* Resize the background image to cover the entire container */,
  },
  section3: {
    backgroundColor: "#636F29",
  },
  section4: {
    textAlign: "center",
    backgroundColor: mintCream,
    minHeight: "47vh",
    backgroundImage: `url(${kipsta})`,
    backgroundPosition: "right" /* Center the image */,
    backgroundRepeat: "no-repeat" /* Do not repeat the image */,
    backgroundSize:
      "cover" /* Resize the background image to cover the entire container */,
  },
}));

const mintCream = "#EFF7ED";
// General scroll to element function

function MainContent() {
  const classes = useStyles();

  const section2 = useRef(null);
  const executeScroll = () => scrollToRef(section2);

  return (
    <Grid container className={classes.root} spacing={2}>
      <Grid className={classes.section1} item xs={12}>
        <Typography style={{ padding: "20px" }} variant='h4'>
          Indywidualny trening
          <br /> piłki nożnej
        </Typography>
        <Typography style={{ padding: "0 20px 40px" }} variant='h6'>
          Spotkania, które poprawią Twoją{" "}
          <span style={{ fontWeight: 600 }}>szybkość, siłę i precyzję</span>{" "}
          dzięki wykorzystaniu nowych technologii, profesjonalnego sprzętu oraz
          praktycznej wiedzy.
        </Typography>
        <ColorButton
          style={{ marginBottom: "40px" }}
          variant='contained'
          disableRipple
          color='primary'
          onClick={executeScroll}>
          Szczegóły
        </ColorButton>
      </Grid>
      <Grid ref={section2} className={classes.section2} item xs={12}>
        <Box>
          <Typography style={{ padding: "20px 10px" }} variant='h4'>
            Nowy wymiar treningu
          </Typography>
          <img
            src='https://blazepod.com.pl/wp-content/uploads/elementor/thumbs/Logo-Horizontal-1-e1591012792232-oqdjtdbz7axi5q5umnqlsz9aanvf5l32iu4jxdaa9g.png'
            title='Logo Horizontal (1)'
            alt='Logo Horizontal (1)'
            onClick={() => window.open("https://blazepod.com.pl/")}
          />
        </Box>
      </Grid>
      <Grid className={classes.section3} item xs={12}>
        <SoccerIcon></SoccerIcon>
        <Typography style={{ padding: "20px" }} variant='h6'>
          Ćwicz z wykorzystaniem{" "}
          <span style={{ fontWeight: 600 }}>BLAZEPOD</span> które pozytywnie
          wpłyną na rozwój Twojego refleksu, Twojej percepcji, szybkości reakcji
          czy koordynacji nerwowo-mięśniowej.
        </Typography>
      </Grid>
      <Grid className={classes.section4} item xs={12}>
        <Typography style={{ padding: "20px 10px" }} variant='h4'></Typography>
      </Grid>
    </Grid>
  );
}

export default MainContent;
