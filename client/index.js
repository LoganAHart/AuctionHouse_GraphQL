import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, hashHistory, IndexRoute } from 'react-router';
import ApolloClient from 'apollo-client';
import { ApolloProvider } from 'react-apollo';
import './style/style.css'

import App from './components/App';
import AuctionList from './components/AuctionList';
import AuctionCreate from './components/AuctionCreate';
import AuctionDetail from './components/AuctionDetail';

const client = new ApolloClient({
  dataIdFromObject: obj => obj.id
});

const Root = () => {
  return (
    <ApolloProvider client={client}>
      <Router history={hashHistory}>
        <Route path="/" component={App}>
          <IndexRoute component={AuctionList} />
          <Route path="auctions/new" component={AuctionCreate} />
          <Route path="auctions/:id" component={AuctionDetail} />
        </Route>
      </Router>
    </ApolloProvider>
  );
};

ReactDOM.render(
  <Root />,
  document.querySelector('#root')
);
