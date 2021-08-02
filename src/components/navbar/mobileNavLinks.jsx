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
              <Link href="/" prefetch>
                <a>Home</a>
              </Link>
            </li>
            <li>
              <Link href="/pricing" prefetch>
                <a>Pricing</a>
              </Link>
            </li>
            <li>
              <Link href="/blog" prefetch>
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
