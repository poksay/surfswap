import React from 'react';
// import Axios from 'axios';

var Listing = React.createClass({
  render: function() {
    return(
      <div className="listing-container">
        <div className="listing-header">
          <h2 id="listing-name">{this.props.name}</h2>
          <h2 id="listing-price">{this.props.price}</h2>
        </div>
        <img id="listing-image" src={this.props.picture}></img>
      </div>
    );
  }
});

var ListingBox = React.createClass({
  loadListingsFromServer: function() {
    $.ajax({
      url: this.props.url,
      dataType: 'json',
      cache: false,
      success: function(data) {
        this.setState({data: data});
      }.bind(this),
      error: function(xhr, status, err) {
        console.error(this.props.url, status, err.toString());
      }.bind(this)
    });
  },

  getInitialState: function() {
    return {data: []};
  },
  componentDidMount: function() {
    this.loadListingsFromServer();
  },
  // Set state of component to pass to ListingList component
  // function to get Listing data
  // render the Lisitng List with a title
  render: function() {
    return (
      <div className="container">
        <nav> SurfSwap </nav>
        <Listing />
      </div>
    )}
});

var ListingList = React.createClass({
  render: function() {
    var listingNodes = this.props.data.map(function(listing) {
      return (
        <Listing name={listing.name} price={listing.price} picture={listing.picture}>
        </Listing>
      );
    });
    return (
      <div className="listingList">
        {listingNodes}
      </div>
    );
  }
});

export default ListingBox;
