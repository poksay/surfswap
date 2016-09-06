import React from 'react';
// import Axios from 'axios';

class Listing extends React.Component{

  render () {
    return(
      <div className="listing-container">
        <div className="listing-header">
          <h2 id="listing-name">{this.props.name}</h2>
          <h2 id="listing-price">{this.props.price}</h2>
        </div>
        <img id="listing-image" src={this.props.picture}></img>
      </div>
    )};
};

class ListingBox extends React.Component{
  // Set state of component to pass to ListingList component
  // function to get Listing data
  // render the Lisitng List with a title
  render() {
    return (
      <div className="container">
        <nav> SurfSwap </nav>
        <Listing name="Al Merrick 6ft 0in" price="$210" picture="http://www.naturalnecessity.com.au/media/catalog/product/cache/1/image/9df78eab33525d08d6e5fb8d27136e95/c/h/chanel-islands-neck-beard-round-tail-surfboard-1_1.jpg"/>
      </div>
    )};
}

// class ListingList extends React.Component{
//   render() {
//     var listingNodes = this.props.data.map(function(listing) {
//       return (
//         <Listing name={listing.name} price={listing.price} picture={listing.picture}>
//         <Listing />
//       );
//     });
//     return (
//       <div className="listingList">
//         {listingNodes}
//       </div>
//     );
//   }
// };

export default ListingBox;
