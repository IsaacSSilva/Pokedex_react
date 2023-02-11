import { Seo } from '../components/common/Seo'
import { PokedexList } from '../components/pokeList/pokeList'
import { Home } from '../components/Home'

export default function Index() {
  return (
    <>
      <Seo />
      <main className='min-h-screen h-full bg-sky-500'>
        <Home />
        <PokedexList />

        <footer className='flex justify-center p-14 font-roboto'>
          <p>em desenvolvimento 🚧 por Isaac S. Silva...</p>
        </footer>
      </main>
    </>
  )
}
