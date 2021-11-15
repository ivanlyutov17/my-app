import { useDispatch } from 'react-redux';
import {deleteChatWithThunk } from '../Store/Chats/actions';
import { Redirect, Router } from 'react-router';
import { useParams } from 'react-router';
import { useHistory } from 'react-router';
import './MessageList.css'
import Chats from '../Pages/Chats/Chats'
function MessageList({ messages }) {
    const { chatId } = useParams();
    let history = useHistory();
    const dispatch = useDispatch();
    const handleDeleteChat = () => {
        dispatch(deleteChatWithThunk(chatId));
        history.push('/no-chat');
    }
    return (
        <div className="messagesArea">
            {

                messages.map((message) => (
                    < div className="message" key={message.key}>
                        <p className='author'>{message.author}</p>
                        <p className='messageText'>{message.text}</p>
                    </div>
                ))
            }
            <button onClick={handleDeleteChat}>Удалить этот чат</button>
        </div >)
};

export default MessageList;