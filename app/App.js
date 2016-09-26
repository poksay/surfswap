import React from 'react';
import ReactDOM from 'react-dom';
import ListingBox from './components/Listings';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
// import { Router, hashHistory } from 'react-router';
// import Routes from './config/Routes';
import injectTapEventPlugin from 'react-tap-event-plugin';

// Needed for onTouchTap
// http://stackoverflow.com/a/34015469/988941
injectTapEventPlugin();

const App = () => (
  <MuiThemeProvider>
    <ListingBox url="http://localhost:3000/api/listings"/>
  </MuiThemeProvider>
);

ReactDOM.render(
  <App />,
  document.getElementById('app')
);
