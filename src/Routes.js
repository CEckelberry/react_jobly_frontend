import React from "react";
import { Route, Switch, Redirect } from "react-router-dom";
import Home from "./Home";
import JobsList from "./JobsList";
import CompaniesList from "./CompaniesList";
import CompanyJobList from "./CompanyJobList";
import Profile from "./Profile";
import PrivateRoute from "./PrivateRoute";
import SignupForm from "./SignupForm";
import LoginForm from "./LoginForm";

function Routes({ login, signup }){
    console.debug(
        "Routes",
        `login=${typeof login}`,
        `register=${typeof register}`,
    );

    return(
        <div>
            <Switch>
                <Route exact path="/"> <Home /> </Route>
                <Route exact path="/login"><LoginForm login={login} /></Route>
                <Route exact path="/signup"><SignupForm signup={signup} /></Route>


                <PrivateRoute exact path="/jobs"> <JobsList /> </PrivateRoute>
                <PrivateRoute exact path="/companies"> <CompaniesList /> </PrivateRoute>
                <PrivateRoute exact path="/companies/:handle"> <CompanyJobList /> </PrivateRoute>
                <PrivateRoute exact path="/profile"> <Profile /> </PrivateRoute>

                <Redirect to="/"/>
            </Switch>
        </div>
    )
}

export default Routes;