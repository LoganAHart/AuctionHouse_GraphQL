import React, { Component } from 'react';
import gql from 'graphql-tag';
import { graphql } from 'react-apollo';
import { Link } from 'react-router';
import queryAuctions from '../queries/fetchAuctions';

class AuctionList extends Component {

  renderAuctions() {
    return this.props.data.auctions.map(auction => {
      return (
        <li key={auction.id} className="collection-item">
          {auction.title}
        </li>
      );
    });
  }

  render() {
    if (this.props.data.loading) { return <div>Loading... </div>; }
    return (
      <div>
        <ul className="collection">
          {this.renderAuctions()}
        </ul>
        <Link
          to="/auctions/new"
          className="btn-floating btn-large red right"
        >
          <i className="material-icons">add</i>
        </Link>
      </div>
    );
  }
}

export default graphql(queryAuctions)(AuctionList);
