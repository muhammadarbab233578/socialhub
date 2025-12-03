import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import MainRouter from './components/MainRouter';

const theme = createTheme();

function App() {
  return (
    <BrowserRouter>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <MainRouter />
      </ThemeProvider>
    </BrowserRouter>
  );
}

export default App;