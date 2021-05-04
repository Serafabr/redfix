import './App.scss';
import { MainPage } from './features/MainPage/MainPage';
import { HashRouter, Route, Switch } from "react-router-dom";


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
