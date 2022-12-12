import './App.css';
import { Counter } from './components/Counter';
import { Multiplier } from './components/Multiplier';
import Users from './components/Users';

function App() {
  return (
    <div className="App">
      <Counter />
      <Multiplier />
      <Users />
    </div>
  );
}

export default App;
