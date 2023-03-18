import logo from './logo.svg';
import Card from './Components/Tarjeta';
import './App.css';

function App() {
  return (
    <div className="App">
      <Card 
        firstResult={50}
        secondResult={51}
        thirdResult={53}
        fourthResult={54}
      />
    </div>
  );
}

export default App;
