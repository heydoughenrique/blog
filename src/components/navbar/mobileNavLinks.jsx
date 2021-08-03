import React, { useState } from "react";
import { Accessibility } from "./accessibility";
import { MenuToggle } from "./menuToggle";
import styles from './mobileNavLinks.module.scss';
import Link from 'next/link';

export function MobileNavLinks(props) {
  const [isOpen, setOpen] = useState(false);

  return (
    <>
      <div className={styles.navLinksContainer}>
        <MenuToggle isOpen={isOpen} toggle={() => setOpen(!isOpen)} />
        {isOpen && (
          <ul>
            <li>
              <Link href="/">
                <a>Home</a>
              </Link>
            </li>
            <li>
              <Link href="/pricing">
                <a>Pricing</a>
              </Link>
            </li>
            <li>
              <Link href="/blog">
                <a>Blog</a>
              </Link>
            </li>
            <div className={styles.marginer} />
            <Accessibility />
          </ul>
        )}

      </div>
    </>
  );
}
