import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App.jsx';
import { MuiThemeProvider, lightBaseTheme } from 'material-ui/styles';

require('./main.scss');

ReactDOM.render(
  <MuiThemeProvider theme={lightBaseTheme}>
    <App />
  </MuiThemeProvider>,
  document.getElementById('container')
);
