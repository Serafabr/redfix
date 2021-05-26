// import "react-app-polyfill/ie9"; // For IE 9, 10, 11 support
import "babel-polyfill";
import "react-app-polyfill/ie11";
import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import * as serviceWorker from "./serviceWorker";
import { Provider } from "react-redux";
import configureStore from "./redux/store";
import { preloadedState } from "./redux/preloadedState";
import { ApolloClient } from 'apollo-client';
import { HttpLink } from 'apollo-link-http';
import { InMemoryCache } from 'apollo-cache-inmemory';
import { ApolloProvider } from 'react-apollo';
import { onError } from 'apollo-link-error';
import { ApolloLink } from 'apollo-link';
import { createUploadLink } from 'apollo-upload-client';

import { ApolloProvider as ApolloProviderHooks } from '@apollo/react-hooks';

const store = configureStore(preloadedState);

const httpLink = new HttpLink({
  uri: process.env.REACT_APP_SERVER_URL + process.env.REACT_APP_DB_PATH,
  credentials: 'include',
});

const errorLink = onError(({ graphQLErrors, networkError }) => {
  if (graphQLErrors) {
    console.log("Erro de busca no banco de dados.");
  }
  if (networkError) {
    console.log("Erro de conexão.");
    console.log("Error: ", networkError.message);
  }
});
const cache = new InMemoryCache();
const link = ApolloLink.from([errorLink, httpLink]);

const client = new ApolloClient({
  link: createUploadLink({
    uri: process.env.REACT_APP_SERVER_URL + process.env.REACT_APP_DB_PATH,
    credentials: 'include',
  }),
  cache: cache,
  defaultOptions: {
    watchQuery: {
      fetchPolicy: 'network-only',
    },
  }
});

const renderApp = () =>
  ReactDOM.render(
    <ApolloProvider client={client}>
      <ApolloProviderHooks client={client}>
        <Provider store={store}>
          <App />
        </Provider>
      </ApolloProviderHooks>
    </ApolloProvider>,
    document.getElementById("root")
  );

// Enabling hot reload for React components inside App:
if (process.env.NODE_ENV !== "production" && module.hot) {
  module.hot.accept("./App", renderApp);
}

renderApp();

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();