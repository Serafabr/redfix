import './App.scss';
import { MainPage } from './features/MainPage/MainPage';
import { HashRouter, Route, Switch } from "react-router-dom";
import { ScrollToTop } from './components/ScrollToTop';


function App() {
  return (
    <div className="App">
      <HashRouter>
        <ScrollToTop />
        <MainPage />
      </HashRouter>
    </div>
  );
}

export default App;
