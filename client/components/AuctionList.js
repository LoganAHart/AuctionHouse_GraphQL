import React, { Component } from 'react';
import gql from 'graphql-tag';
import { graphql } from 'react-apollo';

class AuctionList extends Component {

  renderAuctions() {
    return this.props.data.auctions.map(auction => {
      return (
        <li key={auction.id} className="collection-item">
          {auction.title}
        </li>
      );
    })
  }

  render() {
    if (this.props.data.loading) { return <div>Loading... </div>; }
    return (
      <ul className="collection">
        {this.renderAuctions()}
      </ul>
    );
  }
}

const query = gql`
  {
    auctions {
      id
      title
    }
  }
`;

export default graphql(query)(AuctionList);
