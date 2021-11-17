import { Link } from "react-router-dom"
import { Tabs, Tab } from "@material-ui/core"
import { ROUTES, AUTHORS } from "../Constants/constants"
import { Switch, Route} from "react-router-dom"
import Chats from "../Pages/Chats"
import { Profile } from "../Pages/Profile"
import { Main } from "../Pages/Main"
import { NoChat } from "./NoChat"
import { useState } from "react"
import "./navigation.css"
import { useSelector } from "react-redux"
import Gistslist from "../Pages/Gists"

// const initialChats = {
//     1: {
//         id: 1,
//         name: "Chat 1",
//         messages: [{ text: "FirstMessage", author: AUTHORS.ME, key: uuidv4() }],
//     },
//     2: {
//         id: 2,
//         name: "Chat 2",
//         messages: [
//             { text: "FirstMessageHereToo!", author: AUTHORS.BOT, key: uuidv4() },
//         ],
//     },
// }



export const Header = () => {
          const chats= useSelector((state) => state.chats.chatList);

    return (
        <div className="navigation">
            <Tabs variant="fullWidth">
                <Tab
                    label="Главная"
                    value={ROUTES.MAIN}
                    component={Link}
                    to={ROUTES.MAIN}
                />
                <Tab
                    label="Профиль"
                    value={ROUTES.PROFILE}
                    component={Link}
                    to={ROUTES.PROFILE}
                />
                <Tab
                    value={ROUTES.CHATS}
                    label="Сhats"
                    component={Link}
                    to={ROUTES.CHATS}
                />
                <Tab
                    value={ROUTES.GISTS}
                    label="Gists"
                    component={Link}
                    to={ROUTES.GISTS}
                />

            </Tabs>
            <Switch>
                <Route path={ROUTES.PROFILE}>
                    <Profile />
                </Route>
                <Route
                    exact
                    path={ROUTES.CHAT}>
                    <Chats />
                </Route>

                <Route
                    exact
                    path={ROUTES.CHATS}>
                    <Chats />
                </Route>
                <Route
                    exact
                    path={ROUTES.NO_CHAT}>
                    <NoChat chats={ chats}/>
                </Route>

                <Route exact path={ROUTES.MAIN}>
                    <Main />
                </Route>

                <Route exact path={ROUTES.GISTS}>
                    <Gistslist/>
                </Route>
            </Switch>
        </div>
    )
}
