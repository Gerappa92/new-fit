import React from "react";
import { makeStyles, withTheme } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import blazepod from "../../images/Bramka.PNG";

const useStyles = makeStyles({
  root: {
    maxWidth: 345,
    marginRight: "auto",
    marginLeft: "auto",
    backgroundColor: "#424b54",
    fontFamily: [
      "-apple-system",
      "BlinkMacSystemFont",
      '"Segoe UI"',
      "Baloo Tamma 2",
      "Roboto",
      '"Helvetica Neue"',
      "Arial",
      "sans-serif",
      '"Apple Color Emoji"',
      '"Segoe UI Emoji"',
      '"Segoe UI Symbol"',
    ].join(","),
  },
  media: {
    height: 140,
  },
});

function BlazepodCard(props) {
  const classes = useStyles();

  return (
    <Card className={classes.root}>
      <CardActionArea>
        <CardMedia
          className={classes.media}
          image={blazepod}
          title='Contemplative Reptile'
        />
        <CardContent className={classes.content}>
          <Typography gutterBottom variant='h5' component='h2'>
            <img
              src='https://blazepod.com.pl/wp-content/uploads/elementor/thumbs/Logo-Horizontal-1-e1591012792232-oqdjtdbz7axi5q5umnqlsz9aanvf5l32iu4jxdaa9g.png'
              title='Logo Horizontal (1)'
              alt='Logo Horizontal (1)'
              onClick={() => window.open("https://blazepod.com.pl/")}
            />
          </Typography>
          <Typography variant='body2' component='p'>
            Ćwicz z wykorzystaniem BLAZEPOD które pozytywnie wpłyną na rozwój
            Twojego refleksu, Twojej percepcji, szybkości reakcji czy
            koordynacji nerwowo-mięśniowej.
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions></CardActions>
    </Card>
  );
}

export default BlazepodCard;
