import Head from 'next/head'
import Image from 'next/image'
import styles from '@/styles/Landing.module.css'
import WelcomeBox from '@/components/WelcomeBox'
import Sprout from '@/public/logos/Logo_no-bkg.svg'
import NavbarHollow from '@/components/NavbarHollow'

export default function Landing() {
  var welcome = process.env.NEXT_PUBLIC_HEADER

  return (
    <>
      <Head>
        <title>Welcome to Plantifull Recipes</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.svg" />
      </Head>
      <main className={styles.main}>
        <NavbarHollow />
        <section className={styles.logoSection}>
          <Image className={styles.sprout} src={Sprout} width={250} height={300}/>
        </section>
        <WelcomeBox title={welcome}/>
      </main>
    </>
  )
}
