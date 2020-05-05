import React, { FC } from "react";
import styles from "./Header.module.scss";
import logo from "./logo.png";
import { Link } from "react-router-dom";
import { root } from "../../routes/routeNames";

export const Header: FC = () => (
  <section className={styles.root}>
    <Link to={root} className={styles.rootLink}>
      <img width={55} src={logo} alt={""} />
      <h1>ТСЖ</h1>
    </Link>
  </section>
);
