import { GetStaticProps } from 'next';
import Head from 'next/head';
import Link from 'next/link';
import { stripe } from '../services/stripe';

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
          <p>Let us build & take care of your website.<br />Starting at {product.amount} month.</p>
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

export const getStaticProps: GetStaticProps = async () => {
  const price = await stripe.prices.retrieve('price_1JRQuxGES2JJaug66q9IimwE')

  const product = {
    priceId: price.id,
    amount: new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD',
    }).format(price.unit_amount / 100),
  };

  return {
    props: {
      product,
    },
    revalidate: 60 * 60 * 24 // 24 hours
  }
}