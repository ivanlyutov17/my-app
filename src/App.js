
import './App.css';
import { BrowserRouter, } from "react-router-dom";
import { Header } from './Components/Header';
import { store } from './Store/index';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import { persistor } from './Store/index';
import { CircularProgress } from '@material-ui/core';
function App() {

  return (

    <div className="App">
      <Provider store={store}>
        <PersistGate persistor={persistor} loading={<CircularProgress />}> 
      <BrowserRouter>
        <Header />
      </BrowserRouter >
      </PersistGate>
      </Provider>
    </div >)

}

export default App;
