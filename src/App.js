import logo from './logo.svg';
import './App.css';
import Header from './component/Header/Header';
import Doctors from './component/Doctors/Doctors';

function App() {
  return (
    <div className="bg-app">
      <Header></Header>
      <Doctors></Doctors>

    </div>
  );
}

export default App;
