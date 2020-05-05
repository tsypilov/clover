import React, { FC } from "react";
import styles from "./Layout.module.scss";
import { Header } from "../../components/Header/Header";
import Menu from "../../components/Menu/Menu";

export const Layout: FC = ({ children }) => (
  <section className={styles.root}>
    <Header />
    <section className={styles.wrapper}>
      <Menu />
      <section className={styles.container}>{children}</section>
    </section>
  </section>
);
