import './App.scss';
import { Avatar } from './components/Avatars';
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
        <Input placeholder="Nome" label="Nome Completo" error errorMessage="Inserir seu nome completo"/>
      </div>
      <div style={{ margin: '20px', width: '350px' }}>
        <Avatar />
      </div>
    </div>
  );
}

export default App;
