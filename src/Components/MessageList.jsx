import './MessageList.css'
import { useSelector } from 'react-redux';

function MessageList({ messages }) {
      const chats = useSelector((state) => state.chats.chatList);
  const messages1 = useSelector(state => state.messages.messageList);
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
        </div >)
};

export default MessageList;