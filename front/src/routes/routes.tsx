import React from "react";
import { Switch, Route } from "react-router";
import { about, events, news, root } from "./routeNames";
import { Main } from "../containers/Main/Main";
import { Error } from "../containers/Error/Error";
import { News } from "../containers/News/News";
import { About } from "../containers/About/About";
import { Events } from "../containers/Events/Events";

export const routes = () => (
  <Switch>
    <Route exact={true} component={Main} path={root} />
    <Route exact={true} component={News} path={news} />
    <Route exact={true} component={About} path={about} />
    <Route exact={true} component={Events} path={events} />
    <Route component={Error} />
  </Switch>
);
