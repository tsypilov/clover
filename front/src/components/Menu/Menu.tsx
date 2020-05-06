import React, { FC, useState } from "react";
import styles from "./Menu.module.scss";
import { withRouter } from "react-router";
import { LocationType } from "../../typings/client";
import { about, events, news, root } from "../../routes/routeNames";
import { NavLink } from "react-router-dom";
import Media from "react-media";
import Foco from "react-foco/lib";
import cn from "classnames";
import { DESKTOP_SIZE } from "../../globals/constants";

const LOCATIONS: LocationType[] = [
  { to: root, name: "Главная" },
  { to: news, name: "Новости" },
  { to: events, name: "События" },
  { to: about, name: "О нас" },
];

const MenuList: FC<{ isMobile?: boolean }> = ({ isMobile }) => (
  <menu className={cn(styles.root, { [styles.mobile]: isMobile })}>
    {LOCATIONS.map((l) => (
      <NavLink className={styles.link} activeClassName={styles.activeLink} exact={true} to={l.to}>
        {l.name}
      </NavLink>
    ))}
  </menu>
);

const MobileMenu: FC = () => {
  const [menuListState, setMenuListState] = useState<boolean>(false);

  return (
    <>
      <button className={styles.burger} onClick={() => setMenuListState(!menuListState)}>
        &#9776;
      </button>
      {menuListState && (
        <Foco onFocusOutside={() => setMenuListState(false)} onClickOutside={() => setMenuListState(false)}>
          <section className={styles.mobileMenuList}>
            <MenuList isMobile={true} />
          </section>
        </Foco>
      )}
    </>
  );
};

const Menu: FC = () => <Media query={DESKTOP_SIZE}>{(matches) => (matches ? <MenuList /> : <MobileMenu />)}</Media>;

export default withRouter(Menu);
