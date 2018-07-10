import React, { Component } from 'react';
import { graphql } from 'react-apollo';
import gql from 'graphql-tag';

class ItemCreate extends Component {
  constructor(props) {
    super(props);
    this.state = { content: '' };
  }

  onSubmit(event) {
    event.preventDefault();

    this.props.mutate({
      variables: {
        content: this.state.content,
        auctionId: this.props.auctionId
      }
    }).then(() => {
      this.setState({ content: '' });
    });
  }

  render() {
    return (
      <form onSubmit={ this.onSubmit.bind(this) }>
        <label>Add Item</label>
        <input 
          value={ this.state.content }
          onChange={ event => this.setState({ content: event.target.value }) }
        />
      </form>
    );
  }
}

const mutation = gql`
  mutation AddItemToAuction($content: String, $auctionId: ID) {
    addItemToAuction(content: $content, auctionId: $auctionId) {
      id
      items {
        id
        content
      }
    }
  }
`;

export default graphql(mutation)(ItemCreate);
