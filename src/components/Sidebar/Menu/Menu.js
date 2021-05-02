// @flow strict
import React from 'react';
import { Link } from 'gatsby';
import styles from './Menu.module.scss';

type Props = {
  menu: {
    label: string,
    path: string
  }[]
};

const Menu = ({ menu }: Props) => (
  <nav className={styles['menu']}>
    <ul className={styles['menu__list']}>
      {menu.map((item) => (
        <li className={styles['menu__list-item']} key={item.path}>
          {item.label !== 'Resume' ?
          <Link
            to={item.path}
            className={styles['menu__list-item-link']}
            activeClassName={styles['menu__list-item-link--active']}
          >
            {item.label}
          </Link>
          :
          <a href="https://drive.google.com/file/d/1IDkWZGvvoiAyH6MTKlajrW9qzci_N7qX/view?usp=sharing">Resume</a>
          }
        </li>
      ))}
    </ul>
  </nav>
);

export default Menu;
