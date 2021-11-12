import * as React from 'react';
import { Link } from "react-router-dom";


export const Chatslist = ({ chats, chatId }) => {
    return (
        <div>
            {Object.keys(chats).map((id) => (
                <div key={chats[id].key}>
                    <Link to={`/chats/${id}`}>

                        {chats[id].name}

                    </Link>
                </div>
            ))}
        </div>
    )
}