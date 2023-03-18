import logo from './logo.svg';
import Card from './Components/Tarjeta';
import './App.css';

function App() {
  return (
    <div className="App">
      <Card 
        firstResult={56}
        secondResult={63}
        thirdResult={93}
        fourthResult={84}
      />
    </div>
  );
}

export default App;
