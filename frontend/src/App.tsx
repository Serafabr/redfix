import './App.scss';
import { Button } from './components/Buttons/Button';

function App() {
  return (
    <div className="App">
      <Button text="Nova Tarefa" />
      <div style={{marginTop: '10px'}}>
        <Button text="Nova Tarefa" disabled />
      </div>
    </div>
  );
}

export default App;
