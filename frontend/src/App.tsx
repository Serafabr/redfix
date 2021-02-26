import './App.scss';
import { Button, ButtonStyle } from './components/Buttons/Button';
import { Plus } from './components/Icons';

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
      <div style={{marginTop: '10px'}}>
        <Button text="Nova Tarefa" iconComponent={Plus} />
      </div>
      <div style={{marginTop: '10px'}}>
        <Button text="Nova Tarefa" iconComponent={Plus} disabled />
      </div>
      <div style={{marginTop: '10px'}}>
        <Button text="Nova Tarefa" iconComponent={Plus} buttonStyle={ButtonStyle.Secondary} />
      </div>
      <div style={{marginTop: '10px'}}>
        <Button text="Nova Tarefa" iconComponent={Plus} buttonStyle={ButtonStyle.Secondary} disabled />
      </div>
    </div>
  );
}

export default App;
