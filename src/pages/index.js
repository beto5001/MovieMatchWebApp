import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Movie Match</title>
        <meta name="description" content="Movie Match" />
        <link rel="icon" href="../public/favicon.ico" />
      </Head>
      <h1>
        QUALÉ GURIZADA VAMO DE MUVI METI
      </h1>
    </div>
  )
}
