import './App.scss';
import { BaseInput } from './components/Inputs/BaseInput/BaseInput';
import { SearchInput } from './components/Inputs/SearchInput/SearchInput';


function App() {
  return (
    <div className="App">
      <div style={{ margin: '20px', width: '350px' }}>
        <BaseInput type="text" placeholder="Nome"/>
      </div>
      <div style={{ margin: '20px', width: '350px' }}>
        <SearchInput />
      </div>
    </div>
  );
}

export default App;
