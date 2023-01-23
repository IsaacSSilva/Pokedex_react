import { App } from './App'
import { Seo } from '../components/common/Seo'
import { PokedexList } from './pokeList'
import { Home } from '../components/Home'

export default function Index() {
  return (
    <>
      <Seo />
      <main className='w-full h-full bg-gradient-to-b from-sky-500 via-yellow-500 to-indigo-500 '>
        {/* <App /> */}
        <Home />
        <PokedexList />

        <footer className='h-full flex justify-center p-14 text-lg font-mono font-semibold'>
          <p>em desenvolvimento 🚧 por Isaac S. Silva...</p>
        </footer>
      </main>
    </>
  )
}
