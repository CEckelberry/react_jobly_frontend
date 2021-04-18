import './App.css';
import NavBar from './NavBar';
import Routes from "./Routes"


function App() {
  document.body.style = 'background: #F0f3f5';
  return (
    <div className="App">
      <NavBar />
      <Routes />
    </div>
  );
}

export default App;
