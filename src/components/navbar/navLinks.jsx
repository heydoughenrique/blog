import Link from 'next/link'
import styles from './navLinks.module.scss'


export function NavLinks(props) {
  return (

    <div className={styles.navLinksContainer}>
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
      </ul>
    </div>
  );
}
