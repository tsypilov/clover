import React from "react";
import { PageHeader } from "../../components/PageHeader/PageHeader";
import styles from "./Error.module.scss";
import { Link } from "@skbkontur/react-ui";
import { root } from "../../routes/routeNames";

export const Error = () => (
  <>
    <PageHeader>Ошибка</PageHeader>
    <div className={styles.message}>Страница не найдена</div>
    <section>
      Вы можете вернуться <Link href={root}>на главную</Link>
    </section>
  </>
);
