import React from 'react';
import { ThemeProvider } from 'styled-components';
import theme from './theme';	
import { Reset } from 'styled-reset';
import Home from './pages/Home/index.jsx';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Reset />
   <Home/>
   </ThemeProvider>
  );
}

export default App;
