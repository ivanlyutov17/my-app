
import './App.css';
import { BrowserRouter, Link, Switch, Route } from "react-router-dom";
import { Chats } from './Pages/Chats'
import Chatslist from "./Chatslist";
import { Profile } from './Pages/Profile'
import { Main } from "./Pages/Main"


function App() {

  return (

    <div className="App">
      <BrowserRouter>
        <ul>
          <li><Link to="Main">Домой</Link ></li>
          <li><Link to="Profile">Профиль</Link ></li>
          <li><Link to="Chats">Чаты</Link ></li>

        </ul>
        <Switch>
          <Route path='Profile'>
            <Profile /></Route>
          <Route path='Chats'>
            <Chats /></Route>
          <Route path='Main'>
            <Main /></Route>
        </Switch>
      </BrowserRouter>
    </div >)

}

export default App;
