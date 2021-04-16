import React from "react";
import { Route, Switch, Redirect } from "react-router-dom";
import Home from "./Home";
import JobsList from "./JobsList";
import CompaniesList from "./CompaniesList";
import CompanyJobList from "./CompanyJobList";
import Profile from "./Profile";

function Routes(){
    return(
        <Switch>
            <Route exact path="/"> <Home /> </Route>
            <Route exact path="/jobs"> <JobsList /> </Route>
            <Route exact path="/companies"> <CompaniesList /> </Route>
            <Route exact path="/company/:name"> <CompanyJobList /> </Route>
            <Route exact path="/profile"> <Profile /> </Route>

            <Redirect to="/"/>
        </Switch>
    )
}

export default Routes;