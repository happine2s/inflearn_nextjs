import type { GetStaticProps } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import { getSortedPostsData } from '../lib/post'
import homeStyles from '../styles/Home.module.css'
import Link from 'next/link'

const Home=({allPostsData}:{
  allPostsData:{
    date: string
    title: string
    id: string
  }[]
}) => {
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
          {allPostsData.map(({id, title, date})=>
          <li className={homeStyles.listItem} key={id}>
            <Link href={`/posts/${id}`}>
              {/*
                a태그인데 에러나서 p태그로 대체
                Error: Invalid <Link> with <a> child. Please remove <a> or use <Link legacyBehavior>.
              */}
              <p>{title}</p>
            </Link>
            <br/>
            <small className={homeStyles.lightText}>
              {date}
            </small>
          </li>
          )}
        </ul>
      </section>

      
    </div>
  )
}

export default Home

export const getStaticProps: GetStaticProps=async() => {
  const allPostsData=getSortedPostsData();
  return{
    props:{
      allPostsData
    }
  }
}