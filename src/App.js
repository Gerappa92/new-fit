import React from "react";
import "./App.css";
import Navigation from "./components/Navigation/Navigation";
import { ThemeProvider, createMuiTheme } from "@material-ui/core";
import MainContent2 from "./components/MainContent2/MainContent2";

const theme = createMuiTheme({
  typography: {
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
});

function App() {
  const [state, setState] = React.useState({
    aboutPos: 100,
    whoPos: 100,
    contactPos: 100,
  });

  const setPositions = (about, who, contact) => {
    setState({
      aboutPos: about,
      whoPos: who,
      contactPos: contact,
    });
  };

  return (
    <div className='App'>
      <ThemeProvider theme={theme}>
        {state.aboutPos}
        <Navigation {...state}></Navigation>
        <MainContent2
          positions={state}
          setPositions={setPositions}></MainContent2>
      </ThemeProvider>
    </div>
  );
}

export default App;
