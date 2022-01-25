
import './App.css';
import NavigationBar from './components/NavigationBar';
import Recipes from './components/Recipes';

function App() {
  return (
    <div className="App">
      <NavigationBar></NavigationBar>
      <Recipes/>
    </div>
  );
}

export default App;
