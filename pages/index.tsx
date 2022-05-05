import type { NextPage } from 'next'
import Head from 'next/head'
import Sidebar from '../components/Sidebar'
import Image from 'next/image'
import Feed from '../components/Feed'
import Widgets from '../components/Widgets'

const Home: NextPage = () => {
  return (
    <div className="">
      <Head>
        <title>Twitter 2.0</title>
      </Head>

      <main>
        <Sidebar />
        <Feed />
        <Widgets />
      </main>
    </div>
  )
}

export default Home
