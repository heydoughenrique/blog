import Head from 'next/head';
import Link from 'next/link';

import styles from './home.module.scss';

interface HomeProps {
  product: {
    priceId: string,
    amount: number,
  }
}

export default function Home({ product }: HomeProps) {
  return (
    <>
      <Head>
        <title>Home | Strides Digital </title>
      </Head>
      <main className={styles.contentContainer} >
        <section className={styles.hero} >
          <span>👏 Hey, welcome and...</span>
          <h1>Stop Struggling with your website</h1>
          <p>Let us build & take care of your website.<br />Starting at $129 per month.</p>
          <Link href="/pricing">
            <button className="btn-primary">
              <a>Start now</a>
            </button>
          </Link>






        </section>

        <img src="/images/image-strides.png" alt="Girl coding" />
      </main>
    </>
  )
}