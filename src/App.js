import React from 'react';
import { ThemeProvider } from '@material-ui/styles';
import Header from './components/Ui/Header';
import theme from './components/Ui/Theme';

const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <Header />
      App
    </ThemeProvider>
  );
};

export default App;
