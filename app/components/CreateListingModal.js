import React from 'react';
import Dialog from 'material-ui/Dialog';
import FloatingActionButton from 'material-ui/FloatingActionButton';
import FlatButton from 'material-ui/FlatButton';
import ContentAdd from 'material-ui/svg-icons/content/add';
import TextField from 'material-ui/TextField';

var ListingForm = React.createClass({

  handleNameChange: function(e) {
    this.props.addToParentstate({name: e.target.value});
  },

  handlePriceChange: function(e) {
    this.props.addToParentstate({price: e.target.value});
  },

  handlePictureChange: function(e) {
    this.props.addToParentstate({picture: e.target.value});
  },

  // handleSubmit: function(e) {
  //   e.preventDefault();
  //   this.handleListingSubmit({name:this.state.name, price:this.state.price, picture:this.state.picture});
  //   this.setState({ name: '', price: '', picture: ''});
  // },
  //
  // handleListingSubmit: function(listing) {
  //   var listings = this.props.data;
  //   var newListings = listings.concat([listing]);
  //   this.setState({data: newListings});
  //   $.ajax({
  //     url: this.props.url,
  //     dataType: 'json',
  //     type: 'POST',
  //     data: {"listing": JSON.stringify(listing)},
  //     success: function(data) {
  //       this.setState({data: data});
  //     }.bind(this),
  //     error: function(xhr, status, err) {
  //       this.setState({data: listings});
  //       console.error(this.props.url, status, err.toString());
  //     }.bind(this)
  //   });
  // },

  render: function() {
    return(
      <form className="listingForm">
        <TextField
          hintText="e.g. 6'0'' Al Merick Flyer II"
          floatingLabelText="Name"
          onChange={this.handleNameChange}
        />
        <br />
        <TextField
          hintText="e.g. $300"
          floatingLabelText="Price"
          onChange={this.handlePriceChange}
        />
        <br />
        <TextField
          hintText="add URL here"
          floatingLabelText="Picture link"
          onChange={this.handlePictureChange}
        />
      </form>
    )
  }
})

var CreateListingModal = React.createClass({
  getInitialState: function(){
    return{ open: false, name: '', price: '', picture: '' };
  },

  addAttributeToState: function(attribute) {
    this.setState(attribute)
  },

  handleSubmit: function(e) {
    e.preventDefault();
    this.handleListingSubmit({name:this.state.name, price:this.state.price, picture:this.state.picture});
    this.setState({ name: '', price: '', picture: ''});
  },

  handleListingSubmit: function(listing) {
    var listings = this.props.data;
    var newListings = listings.concat([listing]);
    this.setState({data: newListings});
    $.ajax({
      url: this.props.url,
      dataType: 'json',
      type: 'POST',
      data: {"listing": JSON.stringify(listing)},
      success: function(data) {
        this.setState({data: data});
      }.bind(this),
      error: function(xhr, status, err) {
        this.setState({data: listings});
        console.error(this.props.url, status, err.toString());
      }.bind(this)
    });
  },

  handleOpen: function() {
    this.setState({open: true});
  },

  handleClose: function() {
    this.setState({open: false});
  },

  render: function() {
    const actions = [
      <FlatButton
        label="Cancel"
        primary={true}
        onTouchTap={this.handleClose}
      />,
      <FlatButton
        label="Submit"
        primary={true}
        // disabled={true}
        onTouchTap={this.handleSubmit}
      />,
    ];

    return (
      <div>
        <FloatingActionButton onTouchTap={this.handleOpen}>
          <ContentAdd />
        </FloatingActionButton>
        <Dialog
          title="Create a listing"
          actions={actions}
          modal={true}
          open={this.state.open}
        >
          <ListingForm addToParentstate={this.addAttributeToState}/>
        </Dialog>
      </div>
    );
  }
})

export default CreateListingModal;
