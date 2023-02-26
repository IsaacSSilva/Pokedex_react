import { Seo } from '../components/common/Seo'
import { PokedexList } from '../components/pokeList/pokeList'

const Pokedex = () => {
  return (
    <>
      <Seo title='PokeDex' />
      {/* <main className='min-h-screen h-full bg-sky-500'> */}
      <PokedexList />
      {/* </main> */}
    </>
  )
}

export default Pokedex
