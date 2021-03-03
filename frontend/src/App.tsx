import './App.scss';
import { AvatarDropdown } from './components/Avatars';
import { Input } from './components/Inputs/Input/Input';
import { SearchInput } from './components/Inputs/SearchInput/SearchInput';
import Notification from './components/Buttons/Notification/Notification';
import Support from './components/Buttons/Support/Support';
import { QuickSearch } from './components/Inputs/QuickSearch/QuickSearch';
import { Dropdown } from './components/Buttons/Dropdown/Dropdown';


function App() {
  return (
    <div className="App">
      <div style={{ margin: '20px', width: '350px' }}>
        <SearchInput />
      </div>
      <div style={{ margin: '20px', width: '350px' }}>
        <Input placeholder="Nome" label="Título" />
      </div>
      <div style={{ margin: '20px', width: '350px' }}>
        <Input placeholder="Nome" label="Nome Completo" error errorMessage="Inserir seu nome completo"/>
      </div>
      <div style={{ margin: '20px', width: '350px' }}>
        <AvatarDropdown />
      </div>
      <div style={{ margin: '20px', width: '350px' }}>
        <Notification />
      </div>
      <div style={{ margin: '20px', width: '350px' }}>
        <Support />
      </div>
      <div style={{ margin: '20px', width: '350px' }}>
        <Dropdown />
      </div>
    </div>
  );
}

export default App;
