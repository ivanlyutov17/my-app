import * as React from 'react';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import { Link, Route } from 'react-router-dom';
import { Chats } from '../Pages/Chats';


export const Chatslist = (props) => {
    return (
        <div>
            <List
                sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}
                aria-label="contacts">
                {
                    props.chats.map((chat) => (<div className="chat" key={chat.chatId} >
                        <ListItem disablePadding>
                            <ListItemButton>
                                <Link to={`/chats/${chat.chatId}`}>{chat.name}</Link>
                                <Route path={`/chats/${chat.chatId}`}><Chats /></Route>
                                {/* <ListItemText primary={chat.name} /> */}
                            </ListItemButton>
                        </ListItem>
                    </div>))


                }
            </List>


        </div >
    );
}

    ;
