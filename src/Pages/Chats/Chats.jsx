import { useState } from 'react/cjs/react.development';
import { TextField } from "@material-ui/core";
import { Button } from "@material-ui/core";
import { useParams } from 'react-router';
import { Chatslist } from '../../Components/Chatslist';
import MessageList from '../../Components/MessageList'
import { v4 as uuidv4 } from 'uuid';
import { Redirect } from 'react-router';
import { useSelector } from 'react-redux';
import { addMessageWithThunk } from '../../Store/Message/actions';
import { AUTHORS } from '../../Constants/constants';
import { useDispatch } from 'react-redux';
import { store } from '../../Store';


export default function Chats() {
    const { chatId } = useParams();
    const chats= useSelector((state) => state.chats.chatList);
    const messages = useSelector((state) => state.messages.messageList);
    const author = 'Ваня'
    const [text, setText] = useState('');
    const getText = (e) => setText(e.target.value);
    const handleSubmit = () => {
        // messages[chatId].messages.push({ text: text, author: author, key: uuidv4() });
        store.dispatch(addMessageWithThunk(chatId,{text:text,author:AUTHORS.ME,key:uuidv4()}))
                setText('');

    }


    if (!chats[chatId]) {
        return <Redirect to="/no-chat" />;
    }
    return (
        <div className='flexed'>
            {chats && <Chatslist
                chats={chats}
                chatId={chatId}
            />}
            <div className='buttons'>
                {chats && chatId && (<MessageList messages={messages[chatId].messages} />)}
                <TextField className="inputMessage" autoFocus id="outlined-basic" label="Введите сообщение" variant="outlined" value={text} onChange={getText} />
                <Button className="sendButton" variant="outlined" onClick={handleSubmit}>Отправить</Button>
            </div>
        </div>
    );
}
