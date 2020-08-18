import React, { useRef, useEffect } from "react";
import { Grid, makeStyles, Typography, Paper } from "@material-ui/core";
import SoccerIcon from "@material-ui/icons/SportsSoccer";
import ColorButton from "../ColorButton/ColorButton";
import { scrollToRef } from "../../functions/scrollToRef";
import About from "./About";
import barmkaImg from "../../images/Bramka.PNG";
import Footer from "./Footer";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    color: "white",
  },
  blazepodImg: {
    maxHeight: "200px",
    maxWidth: "100vw",
  },
  paperWho: {
    margin: "20px",
    padding: "20px",
  },
  footer: {
    backgroundColor: "#F0E008",
    color: "black",
    textAlign: "left",
  },
}));

function MainContent2(props) {
  const classes = useStyles();
  useEffect(() => {
    props.setPositions(
      about.current.offsetTop,
      who.current.offsetTop,
      contact.current.offsetTop
    );
  }, []);

  const who = useRef(null);
  const contact = useRef(null);

  const about = useRef(null);
  const executeScroll = () => scrollToRef(about);

  return (
    <Grid container className={classes.root} spacing={0}>
      <Grid className={classes.section1} item xs={12}>
        <Typography style={{ padding: "20px" }} variant='h4'>
          Indywidualny trening
          <br /> piłki nożnej
        </Typography>
        <SoccerIcon></SoccerIcon>
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
      <Grid item ref={about} xs={12}>
        <About />
      </Grid>
      <Grid item xs={12} container spacing={0}>
        <Grid item xs={12}>
          <Typography style={{ padding: "20px 10px" }} variant='h4'>
            Nowy wymiar treningu
          </Typography>
        </Grid>
        <Grid item xs={12}>
          <img src={barmkaImg} alt='blazepod' className={classes.blazepodImg} />
        </Grid>
        <Grid item xs={12}>
          <img
            src='https://blazepod.com.pl/wp-content/uploads/elementor/thumbs/Logo-Horizontal-1-e1591012792232-oqdjtdbz7axi5q5umnqlsz9aanvf5l32iu4jxdaa9g.png'
            title='Logo Horizontal (1)'
            alt='Logo Horizontal (1)'
            onClick={() => window.open("https://blazepod.com.pl/")}
          />
        </Grid>
        <Grid item xs={12}>
          <Typography style={{ padding: "0 20px 40px" }} variant='subtitle1'>
            Wykorzystywany w treningu
            <span style={{ fontWeight: 600 }}>
              {" "}
              nowoczesny system dysków świetlnych
            </span>{" "}
            połączonych z panelem sterującym, umożliwia efektywną pracę nad
            szybkością reakcji, percepcją, decyzyjnością, koordynacją,
            antycypacją, rozumieniem gry, zaangażowaniem mentalnym. Połączenie
            pracy układu nerwowego z układem ruchu, kształtuje świadomość aktów
            ruchowych.
          </Typography>
        </Grid>
      </Grid>
      <Grid ref={who} item xs={12}>
        <Paper className={classes.paperWho} elevation={3}>
          <Typography style={{ padding: "20px" }} variant='h4'>
            Dla kogo?
          </Typography>
          Zajęcia przeznaczone dla dzieci, młodzieży, profesjonalnych
          zawodników, amatorów, zawodników wracających do gry po kontuzjach –
          wszystkich miłośników piłki nożnej. Spersonalizowany program zajęć
          pozwala na doskonalenie konkretnych umiejętności i jest świetnym
          uzupełnieniem treningu klubowego. Bezpośrednia praca z trenerem lub
          zajęcia w maksymalnie czteroosobowych grupach pozwalają trenerowi na
          pełną kontrolę zawodnika oraz umożliwiają rozwijanie jego umiejętności
          technicznych, motorycznych i taktyki indywidualnej.
        </Paper>
      </Grid>
      <Grid
        ref={contact}
        item
        xs={12}
        className={classes.footer}
        container
        spacing={0}>
        <Footer></Footer>
      </Grid>
    </Grid>
  );
}

export default MainContent2;
