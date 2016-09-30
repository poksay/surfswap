import React from 'react';
import Dialog from 'material-ui/Dialog';
import FloatingActionButton from 'material-ui/FloatingActionButton';
import FlatButton from 'material-ui/FlatButton';
import ContentAdd from 'material-ui/svg-icons/content/add';
import TextField from 'material-ui/TextField';

var ListingForm = React.createClass({
  getInitialState: function(){
    return{ name: '', price: '', picture: ''};
  },

  handleNameChange: function(e) {
    this.setState({name: e.target.value});
  },

  handlePriceChange: function(e) {
    this.setState({price: e.target.value});
  },

  handlePictureChange: function(e) {
    this.setState({picture: e.target.value});
  },

  handleSubmit: function(e) {
    e.preventDefault();
    this.props.onListingSubmit({name:this.name, price:this.price, picture:this.picture});
    this.setState({ name: '', price: '', picture: ''});
  },

  render: function() {
    return(
      <form className="listingForm" onSubmit={this.handleSubmit}>
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
        <input type="submit" value="Post" />
      </form>
    )
  }
})

var CreateListingModal = React.createClass({
  getInitialState: function(){
    return{
      open: false
    };
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
        onTouchTap={this.handleClose}
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
          <ListingForm onListingSubmit={this.props.onListingSubmit}/>
        </Dialog>
      </div>
    );
  }
})

export default CreateListingModal;
