import React, { FC } from "react";
import styles from "./Menu.module.scss";
import { RouteComponentProps, withRouter } from "react-router";
import { LocationType } from "../../typings/client";
import { about, events, news, root } from "../../routes/routeNames";
import { NavLink } from "react-router-dom";

const LOCATIONS: LocationType[] = [
  { to: root, name: "Главная" },
  { to: news, name: "Новости" },
  { to: events, name: "События" },
  { to: about, name: "О нас" },
];

const Menu: FC<RouteComponentProps> = ({ location }) => (
  <menu className={styles.root}>
    {LOCATIONS.map((l) => (
      <NavLink className={styles.link} activeClassName={styles.activeLink} exact={true} to={l.to}>
        {l.name}
      </NavLink>
    ))}
  </menu>
);

export default withRouter(Menu);
