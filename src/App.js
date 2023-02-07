import logo from './logo.svg';
import './App.css';
// import Greetingf from './components/pure/greetingF';
// import TaskList from './components/container/task_list.jsx';
// import Ejemplo1 from './hooks/Ejemplo1';
import Ejemplo2 from './hooks/Ejemplo2';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        {/* <Greetings name="martin"></Greetings> */}
        {/* <Greetingf name="Cidar"></Greetingf> */}
        {/* <TaskList></TaskList> */}
        {/* Ejemplo de uso de hooks */}
        {/* <Ejemplo1></Ejemplo1> */}
        <Ejemplo2></Ejemplo2>
      </header>
    </div>
  );
}

export default App;
