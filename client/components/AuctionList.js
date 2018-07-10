import React, { Component } from 'react';
import gql from 'graphql-tag';
import { graphql } from 'react-apollo';
import { Link } from 'react-router';
import queryAuctions from '../queries/fetchAuctions';

class AuctionList extends Component {

  onAuctionDelete(id) {
    this.props.mutate({ variables: { id } })
      .then(() => this.props.data.refetch());
  }

  renderAuctions() {
    return this.props.data.auctions.map(({ id, title }) => {
      return (
        <li key={ id } className="collection-item">
          { title }
          <i
            className="material-icons"
            onClick={ () => this.onAuctionDelete(id) }
          >
            delete
          </i>
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

const mutation = gql`
  mutation DeleteAuction($id: ID) {
    deleteAuction(id: $id) {
      id
    }
  }
`;

export default graphql(mutation)(
  graphql(queryAuctions)(AuctionList)
);
