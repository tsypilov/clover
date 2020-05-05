import React, { FC } from "react";
import styles from "./PageHeader.module.scss";

export const PageHeader: FC = ({ children }) => <h1 className={styles.root}>{children}</h1>;
