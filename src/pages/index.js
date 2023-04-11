import Head from 'next/head'
import Image from 'next/image'
import { Inter } from 'next/font/google'
import styles from '@/styles/Home.module.css'
import MyMDXPage from './my-mdx-page.mdx'
import Link from 'next/link'
import { getSortedPostsData } from '../lib/post'

const inter = Inter({ subsets: ['latin'] })

export default function Home({ allPostsData }) {
  return (
    <>
      <MyMDXPage />
      <Link href="/projects/my-mdx-page2">Page 2</Link>
      <br></br>
      <Link href="/projects/my-mdx-page3">Page 3</Link>

      <ul>
        {allPostsData.map(({ id, title, date }) => (
          <li key={id}>
            {title}
            <br />
            {date}
          </li>
        ))}
      </ul>
    </>
  )
}

export async function getStaticProps() {
  const allPostsData = getSortedPostsData();
  return {
    props: {
      allPostsData,
    },
  };
}
