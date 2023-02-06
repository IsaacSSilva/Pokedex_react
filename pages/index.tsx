import { App } from '../components/App'
import { Seo } from '../components/common/Seo'
import { PokedexList } from '../components/pokeList/pokeList'
import { Home } from '../components/Home'

export default function Index() {
  return (
    <>
      <Seo />
      <main className='min-h-screen h-full bg-gradient-to-b from-sky-500 via-yellow-500 to-indigo-500'>
        {/* <App /> */}
        <Home />
        <PokedexList />

        <footer className='flex justify-center p-14 text-lg font-mono font-semibold'>
          <p>em desenvolvimento 🚧 por Isaac S. Silva...</p>
        </footer>
      </main>
    </>
  )
}
