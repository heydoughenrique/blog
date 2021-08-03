import Link from 'next/link'
import styles from "./accessibility.module.scss"
import { useMediaQuery } from "react-responsive";
import { DeviceSize } from "../responsive";
import { MobileNavLinks } from './mobileNavLinks';



export function MenuCollapse(props) {
  const isMobile = useMediaQuery({ maxWidth: DeviceSize.mobile });
  return (

    <>

      {!isMobile && (
        <div className={styles.container}>
          <button className="btn-primary">
            <Link href="/pricing">
              <a>Get Started</a>
            </Link>
          </button>
        </div>
      )}

      {isMobile && <MobileNavLinks />}

    </>

  );
}
