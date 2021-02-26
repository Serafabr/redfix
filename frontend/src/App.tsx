import './App.scss';
import { BaseInput } from './components/Inputs/BaseInput/BaseInput';


function App() {
  return (
    <div className="App">
      <div style={{ margin: '20px', width: '350px' }}>
        <BaseInput type="text" placeholder="Name" />
      </div>
    </div>
  );
}

export default App;
