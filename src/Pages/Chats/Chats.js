import { useEffect } from 'react';
import { useState } from 'react/cjs/react.development';
import { TextField } from "@material-ui/core";
import { Button } from "@material-ui/core";
import MessageList from '../../Components/MessageList';
import { Chatslist } from '../../Components/Chatslist'
import { v4 as uuidv4 } from "uuid"

export const Chats = () => {

    const chatsArray = [
        {
            id: 'odin',
            author: 'Dima',
            messages: ['asdada'],
        },
        {
            id: 'dwa',
            author: 'Lexa',
            messages: ['221231414'],
        },

    ]
    const author = 'Ваня'
    const [text, setText] = useState('');
    const [messageList, setMessageList] = useState([])
    const getText = (e) => setText(e.target.value);
    const btnClick = () => {
        setMessageList([...messageList, {
            author: author, text: text, key: uuidv4(),
        }]);
    }
    // useEffect(() => {
    //     const timer = setTimeout(() => {
    //         if ((messageList.length !== 0) && (messageList[messageList.length - 1].author !== 'Bot')) {
    //             setMessageList([...messageList, { author: 'Bot', text: 'Бот ответил', key: getId(), }]);
    //         }
    //     }, 1500);

    //     return () => clearTimeout(timer);

    // }, [messageList])

    return (<div className="flexed">
        <Chatslist chatsArray={chatsArray} />
        <div className="buttons">
            <MessageList messageList={messageList} />
            <TextField className="inputMessage" autoFocus id="outlined-basic" label="Введите сообщение" variant="outlined" value={text} onChange={getText} />
            {<Button className="sendButton" variant="outlined" onClick={btnClick}>Отправить</Button>}
        </div>
    </div>)
};

