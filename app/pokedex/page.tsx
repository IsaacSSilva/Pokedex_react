import { Suspense } from 'react'
import { Header } from './Header'
import Loading from './Loading'
import { PokedexList } from './pokeList'

const Pokedex = () => {
  return (
    <main className='bg-sky-500'>
      <Header />

      <PokedexList />
    </main>
  )
}

export default Pokedex
