import React, { Component } from 'react';
import { graphql } from 'react-apollo';
import { Link } from 'react-router';
import fetchAuction from '../queries/fetchAuctionByID';

class AuctionDetail extends Component {
  render() {
    const { auction } = this.props.data;
    if (!auction) { return <div></div>; }

    return (
      <div>
        <Link to="/">Back</Link>
        <h3>{ auction.title }</h3>
      </div>
    );
  }
}

export default graphql(fetchAuction, {
  options: (props) => {
    return { variables: { id: props.params.id } }
  }
})(AuctionDetail);
