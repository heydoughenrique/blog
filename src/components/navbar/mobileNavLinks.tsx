import React, { useState } from "react";
import styles from './mobileNavLinks.module.scss';
import { Accessibility } from "./accessibility";
import { MenuToggle } from "./menuToggle";
import Link from 'next/link';

export function MobileNavLinks(props) {
  const [isOpen, setOpen] = useState(false);

  return (
    <div className={styles.navLinksContainer}>
      <MenuToggle isOpen={isOpen} toggle={() => setOpen(!isOpen)} />
      {isOpen && (
        <ul>
          <li>

            <a href="">Home</a>

          </li>
          <li>

            <a href="">Pricing</a>

          </li>
          <li>

            <a href="">Blog</a>

          </li>
          <div className={styles.marginer} />
          <Accessibility />
        </ul>
      )}

    </div>
  );
}
