import { Link } from "react-router-dom"
import { Fragment } from 'react'
import { Tabs, Tab } from "@material-ui/core"
import { ROUTES } from "../Constants/constants"
import { Switch, Route, Redirect } from "react-router-dom";
import { Chats } from '../Pages/Chats'
import { Profile } from '../Pages/Profile'
import { Main } from "../Pages/Main";
import "./navigation.css"



export const Header = () => {
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
                            <Route exact path={ROUTES.CHATS}><Chats /></Route>
                            <Route path={ROUTES.CHAT}><Chats /></Route>
                            <Route path={ROUTES.NOT_FOUND}>Page not found</Route>
                            <Route path='*'><Redirect to={ROUTES.NOT_FOUND} /></Route>
                        </Switch>
                    </Fragment>
                )
                }
            />


        </div >)
}