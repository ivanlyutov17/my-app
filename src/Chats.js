import * as React from 'react';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';


const Chats = () => {
    return (
        <List
            sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}
            aria-label="contacts"
        >
            <ListItem disablePadding>
                <ListItemButton>
                    <ListItemText primary="Чат 1" />
                </ListItemButton>
            </ListItem>
            <ListItem disablePadding>
                <ListItemButton>
                    <ListItemText primary="Чат 2" />
                </ListItemButton>
            </ListItem>
        </List>
    );
}

export default Chats;
