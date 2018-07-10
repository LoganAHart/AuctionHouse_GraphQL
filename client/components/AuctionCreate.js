import React, { Component } from 'react';
import { graphql } from 'react-apollo';
import gql from 'graphql-tag';
import { Link, hashHistory } from 'react-router';
import queryAuctions from '../queries/fetchAuctions';


class AuctionCreate extends Component {
  constructor(props) {
    super(props);

    this.state = { title: '' };
  }

  onSubmit(event) {
    event.preventDefault();
    this.props.mutate({
      variables: { title: this.state.title },
      refetchQueries: [{ query: queryAuctions }]
    }).then(() => hashHistory.push('/'))
  }

  render() {
    return (
      <div>
        <Link to="/">Back</Link>
        <h3>Create New Auction</h3>
        <form onSubmit={ this.onSubmit.bind(this) }>
          <label>Auction Title:</label>
          <input 
            onChange={event => this.setState({ title: event.target.value }) }
            value={this.state.title}
          />
        </form>
      </div>
    );
  }
}

const mutation = gql`
  mutation AddAuction($title: String) {
    addAuction(title: $title) {
      title
    }
  }
`;

export default graphql(mutation)(AuctionCreate);
