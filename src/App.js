import React from 'react';
import './App.css';
import BioCard from "./components/BioCard";
import {
  Container,
  createMuiTheme,
  MuiThemeProvider
} from "@material-ui/core";
import { ThemeProvider } from '@material-ui/styles';
import blue from '@material-ui/core/colors/blue';


const Theme = createMuiTheme({
  palette: {
    primary: {
      main: '#3667c6'
    },
    secondary: {
      main: '#7b9ee2'
    }
  }
})

function App() {
  return (
    <ThemeProvider theme={Theme}>
      <div className="App">
        <Container p={2}>
          <BioCard />
        </Container>
      </div>
    </ThemeProvider>
  );
}

export default App;
