import Link from "next/link"
import styles from './index.module.scss'

export function Logo(props) {
  return (
    <div className={styles.logoWrapper}>
      <div className={styles.logoImg}>
        <Link href="/">
          <a>
            <img src="/images/logo-strides.svg" alt="Strides Digital Logo" />
          </a>
        </Link>
      </div>
    </div>
  );
}
