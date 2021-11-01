import { Link } from "react-router-dom"
import { Fragment } from 'react'
import { Tabs, Tab } from "@material-ui/core"
import { ROUTES } from "../Constants/constants"
import { Switch, Route, Redirect } from "react-router-dom";
import Chats from '../Pages/Chats'
import { Profile } from '../Pages/Profile'
import { Main } from "../Pages/Main";
import { NoChat } from "./NoChat";
import { v4 as uuidv4 } from 'uuid';
import { useState } from "react";
import "./navigation.css"


export const Header = () => {
    const initialChats = {
        id1: {
            name: "Chat1",
            messages: [{ text: "FirstMessage", author: 'me', key: uuidv4() }],
        },
        id2: {
            name: "Chat2",
            messages: [{ text: "FirstMessageHereToo!", author: 'bot', key: uuidv4() }],
        },
    };
    const [chats, setChats] = useState(initialChats);
    return (
        <div className="navigation">
            <Route
                path="/"
                render={({ location }) => (
                    <Fragment>
                        <Tabs variant="fullWidth">
                            <Tab label="Главная" value="/" component={Link} to={ROUTES.MAIN} />
                            <Tab label="Профиль" value="/profile" component={Link} to={ROUTES.PROFILE} />
                            <Tab value="/chats"
                                label="Чаты"
                                component={Link}
                                to={ROUTES.CHATS}
                            />
                        </Tabs>
                        <Switch>
                            <Route exact path={ROUTES.MAIN}><Main /></Route>
                            <Route path={ROUTES.PROFILE}><Profile /></Route>
                            <Route exact path={ROUTES.CHATS} render={(props) => <Chats chats={chats} {...props} />} />
                            <Route exact path={ROUTES.CHAT} render={(props) => <Chats chats={chats} {...props} />} />
                            <Route path={ROUTES.NOT_FOUND}>Page not found</Route>
                            {/* <Route path='*'><Redirect to={ROUTES.NOT_FOUND} /></Route> */}
                            <Route path="/no-chat" render={(props) => <NoChat chats={chats} {...props} />} />

                        </Switch>
                    </Fragment>
                )
                }
            />

            < Chats />
        </div >)
}