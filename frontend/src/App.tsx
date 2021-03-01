import './App.scss';
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
<<<<<<< HEAD
        <Input placeholder="Ex: São Paulo" label="Cidade" error />
||||||| 12775ed
        <Input placeholder="Nome" error />
=======
        <Input placeholder="Nome" label="Cidade" error />
>>>>>>> 0d9e32d5a36e7a2b279bf8c88971ab39b0ac0e9f
      </div>
    </div>
  );
}

export default App;
