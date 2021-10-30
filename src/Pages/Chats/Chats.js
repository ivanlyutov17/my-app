import { useEffect } from 'react';
import { useState } from 'react/cjs/react.development';
import getId from '../../ChatsArray';
import Chatslist from "../../Chatslist";
import { TextField } from "@material-ui/core";
import { Button } from "@material-ui/core";
import MessageList from '../../MessageList';

export const Chats = () => {
    const author = 'Ваня'
    const [text, setText] = useState('');
    const [messageList, setMessageList] = useState([])
    const getText = (e) => setText(e.target.value);
    const btnClick = () => {
        setMessageList([...messageList, {
            author: author, text: text, key: getId(),
        }]);
        console.log(messageList.key);
    }
    useEffect(() => {
        const timer = setTimeout(() => {
            if ((messageList.length !== 0) && (messageList[messageList.length - 1].author !== 'Bot')) {
                setMessageList([...messageList, { author: 'Bot', text: 'Бот ответил', key: getId(), }]);
                console.log(messageList)
            }
        }, 1500);

        return () => clearTimeout(timer);

    }, [messageList])

    return (<div className="flexed">
        <div className="chats">
            <h3>Ваши чаты</h3>
            <Chatslist />
        </div>
        <div className="buttons">
            <MessageList messageList={messageList} />
            <TextField className="inputMessage" autoFocus id="outlined-basic" label="Введите сообщение" variant="outlined" value={text} onChange={getText} />
            <Button className="sendButton" variant="outlined" onClick={btnClick}>Отправить</Button>
        </div>
    </div>)
};

