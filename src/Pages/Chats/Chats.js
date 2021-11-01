import { useState } from 'react/cjs/react.development';
import { TextField } from "@material-ui/core";
import { Button } from "@material-ui/core";
import { useParams } from 'react-router';
import { Chatslist } from '../../Components/Chatslist';
import MessageList from '../../Components/MessageList'
import { v4 as uuidv4 } from 'uuid';
import { Redirect } from 'react-router';



export default function Chats({ chats }) {
    const { chatId } = useParams();
    console.log(chats)
    const author = 'Ваня'
    const [text, setText] = useState('');
    const getText = (e) => setText(e.target.value);
    const handleSubmit = () => {
        chats[chatId].messages.push({ text: text, author: author, key: uuidv4() });
    }


    // if (!chats[chatId]) {
    //     return <Redirect to="/nochat" />;
    // }
    return (
        <div className='flexed'>
            <Chatslist
                chats={chats}
                chatId={chatId}
            />
            <div className='buttons'>
                {/* <MessageList messages={chats[chatId].messages} /> */}
                <TextField className="inputMessage" autoFocus id="outlined-basic" label="Введите сообщение" variant="outlined" value={text} onChange={getText} />
                <Button className="sendButton" variant="outlined" onClick={handleSubmit}>Отправить</Button>
            </div>
        </div>
    );
}
