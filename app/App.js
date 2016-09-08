import React from 'react';
import ReactDOM from 'react-dom';
import ListingBox from './components/Listings';
// import { Router, hashHistory } from 'react-router';
// import Routes from './config/Routes';

ReactDOM.render(
  <ListingBox url="http://localhost:3000/api/listings"/>,
  document.getElementById('app')
);
