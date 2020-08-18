import { Button, withStyles } from "@material-ui/core";

const green = "#636F29";
const ColorButton = withStyles(() => ({
  root: {
    color: "white",
    backgroundColor: green,
    "&:hover": {
      backgroundColor: "#A0B94C",
    },
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
}))(Button);

export default ColorButton;
