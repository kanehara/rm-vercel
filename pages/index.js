import Head from 'next/head'
import SearchBox from '../components/SearchBox'

const Home = () => (
  <div className="container">
    <Head>
      <title>Rick and Morty Trivia</title>
      <link rel="icon" href="/favicon.ico" />
    </Head>

    <main>
      <h1>Rick and Morty</h1>
      <div style={{margin: 'auto', display: 'flex', justifyContent: 'center' }}>
        <div style={{maxWidth: 300, alignItems: 'center', display: 'flex', justifyContent: 'center'}}>
          <SearchBox />
        </div>
      </div>
    </main>

    <style jsx global>{`
      html,
      body {
        padding: 0;
        margin: 0;
        font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen,
          Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue, sans-serif;
      }

      * {
        box-sizing: border-box;
      }

      h1 {
        text-align: center;
      }

      img {
        margin: 1rem;
        border-radius: 1rem;
      }
    `}</style>
  </div>
)

export default Home
