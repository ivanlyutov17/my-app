import './Message.css';
const Message = (props) => {

    const text = props.text;
    return (
        <h1 className='message'>{text}</h1>
    );
};


export default Message;