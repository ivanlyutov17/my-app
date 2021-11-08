
import './App.css';
import { BrowserRouter, } from "react-router-dom";
import { Header } from './Components/Header';
import { store } from './Store/index';
import { Provider } from 'react-redux';
function App() {

  return (

    <div className="App">
      <Provider store={store}> 
      <BrowserRouter>
        <Header />
      </BrowserRouter >
      </Provider>
    </div >)

}

export default App;
