import React from 'react';
import {Card, CardHeader, CardMedia, CardTitle, CardText} from 'material-ui/Card';
// import Axios from 'axios';

var Listing = React.createClass({
  render: function() {
    return(
      <Card className='listing-card'>
        <CardHeader
          title={this.props.name}
          subtitle={this.props.price}
          // avatar="images/jsa-128.jpg"
        />
        <CardMedia>
          <img src={this.props.picture}/>
        </CardMedia>
        <CardTitle title={this.props.name} subtitle={this.props.price} />
        <CardText>
          My favorite board of all time, I hate to sell it but need the cash or taxes
        </CardText>
      </Card>
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
      <div className="listingBox">
        <h1>SurfSwap!</h1>
        <ListingList data={this.state.data} />
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
