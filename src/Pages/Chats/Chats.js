import { useEffect } from 'react';
import { useState } from 'react/cjs/react.development';
import getId from '../../Components/ChatsArray';
import { TextField } from "@material-ui/core";
import { Button } from "@material-ui/core";
import MessageList from '../../Components/MessageList';
import { useParams } from 'react-router';
import { Chatslist } from '../../Components/Chatslist'

const initialChats = {
    id1: {
        name: "Chat1",
        messages: [{ text: "FirstMessage", author: 'Me' }],
    },
    id2: {
        name: "Chat2",
        messages: [{ text: "FirstMessageHereToo!", author: "Bot" }],
    },
};
export const Chats = () => {
    const { chatId } = useParams();
    const [chats, setChats] = useState(initialChats);
    console.log(chats)
    console.log(chatId)
    const author = 'Ваня'
    const [text, setText] = useState('');
    const [messageList, setMessageList] = useState([])
    const getText = (e) => setText(e.target.value);
    const btnClick = () => {
        setMessageList([...messageList, {
            author: author, text: text, key: getId(),
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
        <Chatslist
            chats={chats}
            chatId={chatId}
        />
        <div className="buttons">
            <MessageList messageList={chats[chatId].messages} />
            <TextField className="inputMessage" autoFocus id="outlined-basic" label="Введите сообщение" variant="outlined" value={text} onChange={getText} />
            <Button className="sendButton" variant="outlined" onClick={btnClick}>Отправить</Button>
        </div>
    </div>)
};

