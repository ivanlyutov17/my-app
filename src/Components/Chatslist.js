import * as React from 'react';
import { Route, Link } from "react-router-dom";
import Chats from '../Pages/Chats';


export const Chatslist = ({ chats, chatId }) => {
    console.log(chats)
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