import * as React from 'react';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import { Link, Route } from 'react-router-dom';
import { Chats } from '../Pages/Chats';
import { v4 as uuidv4 } from 'uuid'


export const Chatslist = ({ chatsArray }) => {
    console.log(chatsArray)
    return (
        <div>
            <List
                sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}
                aria-label="contacts">
                {
                    chatsArray.map((chat) => (<div className="chat" key={uuidv4()} >
                        <ListItem disablePadding>
                            <ListItemButton>
                                <Link to={`/chats/${chat.id}`}></Link>
                                <Route path={`/chats/${chat.id}`}></Route>
                                <ListItemText primary={chat.author} />
                            </ListItemButton>
                        </ListItem>
                    </div>))


                }
            </List>


        </div >
    );
}

    ;
