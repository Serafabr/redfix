import './App.scss';
import { Button, ButtonStyle } from './components/Buttons/Button';

function App() {
  return (
    <div className="App">
      <Button text="Nova Tarefa" />
      <div style={{marginTop: '10px'}}>
        <Button text="Nova Tarefa" disabled />
      </div>
      <div style={{marginTop: '10px'}}>
        <Button text="Nova Tarefa" buttonStyle={ButtonStyle.Secondary} />
      </div>
      <div style={{marginTop: '10px'}}>
        <Button text="Nova Tarefa" buttonStyle={ButtonStyle.Secondary} disabled />
      </div>
    </div>
  );
}

export default App;
