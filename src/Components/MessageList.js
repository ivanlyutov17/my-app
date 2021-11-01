import './MessageList.css'
function MessageList({ messageList }) {
    // key = `${message.key}`
    return (<div className="messagesArea">
        {
            messageList.map((message) => (<div className="message" key={message.key} >
                <p className='author'>{message.author}</p>
                <p className='messageText'>{message.text}</p>
            </div>))
        }
    </div >)
};

export default MessageList;