import { v4 as uuidv4 } from 'uuid';
import { useState, useParams } from 'react'
import { Chatslist } from './Chatslist'
import MessageList from './MessageList'
const getId = () => {
    let myuuid = uuidv4();
    return myuuid;

};

export const ChatsArray = () => {

    return (<>
        <header>Header</header>
        <div className="wrapper">
            <div>

            </div>
            <div>

            </div>
        </div>
    </>
    )
}

export default getId;