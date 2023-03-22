import './App.css';
import Cards from './Components/Cards';
import NavigationBar from './Components/NavigationBar';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <div className="App">
      <NavigationBar/>
      <Cards/>
    </div>
  );
}

export default App;
