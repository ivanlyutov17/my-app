import { useEffect } from 'react';
import { useState } from 'react/cjs/react.development';
import './App.css';
import MessageList from './MessageList';


function App(props) {
  const author = 'Ваня'
  const [text, setText] = useState('');
  const [messageList, setMessageList] = useState([])
  const getText = (e) => setText(e.target.value);
  const btnClick = () => {
    setMessageList([...messageList, {
      author: author, text: text,
    }]);
    console.log(messageList.key);
  }
  useEffect(() => {
    const timer = setTimeout(() => {
      if ((messageList.length !== 0) && (messageList[messageList.length - 1].author !== 'Bot')) {
        setMessageList([...messageList, { author: 'Bot', text: 'Бот ответил' }]);
        console.log(messageList)
      }
    }, 5000);

    return () => clearTimeout(timer);

  }, [messageList])
  return (
    <div className="App">
      <MessageList messageList={messageList} />

      <input value={text} onChange={getText} />
      <button onClick={btnClick}>Check</button>

    </div>)

}

export default App;
