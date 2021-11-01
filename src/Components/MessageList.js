import './MessageList.css'
function MessageList({ messages }) {
    // key = { message.key }
    return (
        <div className="messagesArea">
            {

                messages.map((message) => (
                    < div className="message" >
                        <p className='author'>{message.author}</p>
                        <p className='messageText'>{message.text}</p>
                    </div>
                ))
            }
        </div >)
};

export default MessageList;