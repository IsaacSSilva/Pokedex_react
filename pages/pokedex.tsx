import { Seo } from '../components/common/Seo'
import { PokedexList } from '../components/pokeList/pokeList'

const Pokedex = () => {
  return (
    <>
      <Seo title='PokeDex' />
      <PokedexList />
    </>
  )
}

export default Pokedex
