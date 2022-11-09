import Head from 'next/head'
import Image from 'next/image'
import homeStyles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div>
      <Head>
        <title>Park Soyun</title>
      </Head>
      <section className={homeStyles.headingMd}>
        <p>[Park Soyun Introduction]</p>
        <p>
          (This is a websites)
        </p>
      </section>
      <section className={`${homeStyles.headingMd} ${homeStyles.padding1px}`}>
        <h2 className={homeStyles.headingLg}>Blog</h2>
        <ul className={homeStyles.list}>


        </ul>
      </section>

      
    </div>
  )
}
