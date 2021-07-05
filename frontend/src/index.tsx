import ReactDOM from 'react-dom';
import { 
  ApolloClient, 
  InMemoryCache,
  ApolloProvider,
  gql,
} from '@apollo/client';
import './index.css';
import './style/style.scss';
import App from './App';
import reportWebVitals from './reportWebVitals';

const client = new ApolloClient({
  uri: (process.env['REACT_APP_SERVER_URL'] as string) + (process.env['REACT_APP_DB_PATH'] as string),
  cache: new InMemoryCache()
});

ReactDOM.render(
  <ApolloProvider client={client}>
    <App />
  </ApolloProvider>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

export {};