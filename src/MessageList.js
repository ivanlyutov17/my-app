import './MessageList.css'
function MessageList({ messageList }) {

    return (<div>
        {messageList.map((message) => (<div>
            <p className='author'>{message.author}</p>
            <p className='message'>{message.text}</p>
        </div>))}
    </div>)
};

export default MessageList;