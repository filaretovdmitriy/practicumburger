import React from "react";
import PropTypes from "prop-types";
import {
  Logo,
  BurgerIcon,
  ListIcon,
  ProfileIcon,
} from "@ya.praktikum/react-developer-burger-ui-components";

import styles from "./appheader.module.css";
function AppHeader(props) {
  return (
    <>
      <div className={styles.header + " pt-4 pb-4"}>
        <div className={styles.header__container}>
          <div className={styles.header__nav}>
            <div className={styles.header__link + " p-5 mr-2"}>
              <BurgerIcon type="primary" />
              <a href="#" className="pl-2">
                Конструктор
              </a>
            </div>
            <div className={styles.header__link + " p-5"}>
              <ListIcon type="secondary" />
              <a href="#" className="pl-2">
                Лента заказов
              </a>
            </div>
          </div>
          <div className={styles.logo}>
            <Logo />
          </div>
          <div className={styles.header__profile}>
            <div className={styles.header__link + " p-5"}>
              <ProfileIcon type="secondary" />
              <a href="#" className="pl-2">
                Личный кабинет
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default AppHeader;
