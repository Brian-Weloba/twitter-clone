import type { GetServerSideProps, NextPage } from 'next'
import Head from 'next/head'
import Sidebar from '../components/Sidebar'
import Image from 'next/image'
import Feed from '../components/Feed'
import Widgets from '../components/Widgets'
import { fetchTweets } from '../utils/fetchTweets'
import { Tweet } from '../typings'

interface Props {
  tweets: Tweet[]
}

const Home = ({tweets}: Props) => {
  console.log(tweets)
  return (
    <div className="mx-auto max-h-screen overflow-hidden lg:max-w-6xl">
      <Head>
        <title>Twitter 2.0</title>
      </Head>

      <main className="grid grid-cols-9">
        <Sidebar />
        <Feed tweets={tweets}/>
        <Widgets />
      </main>
    </div>
  )
}

export default Home

export const getServerSideProps: GetServerSideProps = async (context) => {
  const tweets = await fetchTweets();
  return {
    props: {
      tweets,
    },
  }
}
