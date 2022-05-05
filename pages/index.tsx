import type { NextPage } from 'next'
import Head from 'next/head'
import Sidebar from '../components/Sidebar'
import Image from 'next/image'

const Home: NextPage = () => {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center py-2">
      <Head>
        <title>Twitter 2.0</title>
      </Head>

      <main>
      {/* Sidebar */}
<Sidebar/>
      {/* Feed */}

      {/* Widget */}
      </main>
    </div>
  )
}

export default Home
