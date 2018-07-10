import React, { Component } from 'react';
import { graphql } from 'react-apollo';
import { Link } from 'react-router';
import fetchAuction from '../queries/fetchAuctionByID';
import ItemCreate from './ItemCreate';
import ItemList from './ItemList';

class AuctionDetail extends Component {
  render() {
    const { auction } = this.props.data;
    if (!auction) { return <div></div>; }

    return (
      <div>
        <Link to="/">Back</Link>
        <h3>{ auction.title }</h3>
        <ItemList items={auction.items} />
        <ItemCreate auctionId={ this.props.params.id }/>
      </div>
    );
  }
}

export default graphql(fetchAuction, {
  options: (props) => {
    return { variables: { id: props.params.id } }
  }
})(AuctionDetail);
