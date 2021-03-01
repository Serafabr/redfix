import './App.scss';
import { BaseInput } from './components/Inputs/BaseInput/BaseInput';
import { Input } from './components/Inputs/Input/Input';
import { SearchInput } from './components/Inputs/SearchInput/SearchInput';


function App() {
  return (
    <div className="App">
      <div style={{ margin: '20px', width: '350px' }}>
        <Input type="text" placeholder="Nome"/>
      </div>
      <div style={{ margin: '20px', width: '350px' }}>
        <SearchInput />
      </div>
      <div style={{ margin: '20px', width: '350px' }}>
        <Input placeholder="Nome" label="Nome Completo" />
      </div>
      <div style={{ margin: '20px', width: '350px' }}>
        <Input placeholder="Nome" label="Cidade" error />
      </div>
    </div>
  );
}

export default App;
