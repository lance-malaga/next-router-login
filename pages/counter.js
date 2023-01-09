import Head from 'next/head'
import Image from 'next/image'
import { Inter } from '@next/font/google'
import styles from '../styles/Home.module.css'
import { useEffect, useState } from 'react'
import { useSearchParams } from 'next/navigation'
import { useRouter } from 'next/router'

const inter = Inter({ subsets: ['latin'] })

export default function Counter() {

  const [number, setNumber] = useState(0);
  const searchParams = useSearchParams();
  const isUser = searchParams.get('username');
  const router = useRouter();

  useEffect(() => {
    if(!isUser) {
      router.push('/')
    } else {

    }
  }, [isUser])

  return (
    <>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={styles.main}>
        <div className={styles.description}>
          <p>
            COUNTER PAGE&nbsp;
            <code className={styles.code}>Welcome, <span>{isUser}</span></code>
          </p>
          <div>
            <a
              href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
              target="_blank"
              rel="noopener noreferrer"
            >
              By{' '}
              <Image
                src="/vercel.svg"
                alt="Vercel Logo"
                className={styles.vercelLogo}
                width={100}
                height={24}
                priority
              />
            </a>
          </div>
        </div>

        <div className={styles.center}>
          <Image
            className={styles.logo}
            src="/next.svg"
            alt="Next.js Logo"
            width={180}
            height={37}
            priority
          />
          <div className={styles.thirteen}>
            <Image
              src="/thirteen.svg"
              alt="13"
              width={40}
              height={31}
              priority
            />
          </div>
        </div>

        <div className={styles.grid}>
          <h2 className={inter.className}>
            The number is:
          </h2>
          <p className={inter.className}>
            {number}
          </p>
          <button onClick={() => setNumber(number + 1)}>Increment</button>
          <button onClick={() => setNumber(number - 1)}>Decrement</button>
        </div>
      </main>
    </>
  )
}
