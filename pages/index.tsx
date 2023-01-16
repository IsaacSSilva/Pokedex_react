import { App } from '../components/App'
import { Seo } from '../components/common/Seo'
import { PokedexList } from '../components/pokeList'

export default function Home() {
  return (
    <>
      <Seo />
      <main className='w-full bg-sky-400'>
        {/* <App /> */}
        <PokedexList />
      </main>
    </>
  )
}
