import gql from 'graphql-tag';

export default gql`
  query AuctionQuery($id: ID!) {
    auction(id: $id) {
      id
      title
      items {
        id
        content
      }
    }
  }
`;
