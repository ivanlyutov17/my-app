import logo from './logo.svg';
import './App.css';
import Message from './Message.js';


function App(props) {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Hello {props.name}</h1>
      </header>
      <Message text={'Hello world!'} />

    </div>
  );
}

export default App;
