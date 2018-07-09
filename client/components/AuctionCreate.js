import React, { Component } from 'react';
import gql from 'graphql-tag';

class AuctionCreate extends Component {
  constructor(props) {
    super(props);

    this.state = { title: '' };
  }

  onSubmit(event) {
    event.preventDefault();


  }

  render() {
    return (
      <div>
        <h3>Create a New Auction</h3>
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

// const mutation = gql`
//   mutation {
//     addAuction(title: ) {
//       id
//       title
//     }
//   }
// `;

export default AuctionCreate;
