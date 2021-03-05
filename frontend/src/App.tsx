import './App.scss';
import { AvatarDropdown } from './components/Avatars';
import { Input } from './components/Inputs/Input/Input';
import { SearchInput } from './components/Inputs/SearchInput/SearchInput';
import Notification from './components/Buttons/Notification/Notification';
import Support from './components/Buttons/Support/Support';
import { QuickSearch } from './components/Inputs/QuickSearch/QuickSearch';
import { Dropdown } from './components/Buttons/Dropdown/Dropdown';
import { MainPage } from './features/MainPage/MainPage';


function App() {
  return (
    <div className="App">
      <MainPage />
    </div>
  );
}

export default App;
