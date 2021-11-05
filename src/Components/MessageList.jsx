import './MessageList.css'

function MessageList({ messages }) {
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