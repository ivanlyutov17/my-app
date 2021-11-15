import * as React from 'react';
import { Link } from "react-router-dom";
import { useDispatch } from 'react-redux';
import { addChat, AddChatWithThunk } from '../Store/Chats/actions';
import { initalMessages } from '../Store/Message/actions';



export const Chatslist = ({ chats, chatId }) => {
        const dispatch = useDispatch()

    const handleAddChat = () => {
        const name = prompt()
        dispatch(AddChatWithThunk(name));
   }
    return (
        <div>
            {Object.keys(chats).map((id) => (
                <div key={chats[id].key}>
                    <Link to={`/chats/${id}`}>

                        {chats[id].name}

                    </Link>
                </div>
            ))}
            <button onClick={handleAddChat}>Добавить чат</button>
        </div>
    )
}