import { 
  ApolloClient, 
  InMemoryCache,
  ApolloProvider,
} from '@apollo/client';
// Components
import { MainPage } from './features/MainPage/MainPage';
import { HashRouter, Route, Switch } from "react-router-dom";
// Style
import './App.scss';

function App() {
  return (
    <div className="App">
      <HashRouter>
        <MainPage />
      </HashRouter>
    </div>
  );
}

export default App;
