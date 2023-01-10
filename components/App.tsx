import { useState } from 'react'
import axios from 'axios'
import { ImgPokemon } from './ImgPokemon'
import { IPoke } from '../types/interface'

export const App = () => {
  const [idPoke, setIdPoke] = useState()
  const [pokemon, setPokemon] = useState<IPoke>({ back: '', front: '' })
  const api = 'https://pokeapi.co/api/v2/pokemon/' + idPoke

  const pokeEvent = () => {
    axios.get(api).then(api => {
      setPokemon({
        back: api.data.sprites.back_default,
        front: api.data.sprites.front_default
      })
    })
  }

  return (
    <>
      <input
        onChange={(e: any) => {
          setIdPoke(e.target.value)
        }}
        type='text'
      />

      <div className='flex'>
        <ImgPokemon loader={pokemon.front} srcPokemon={pokemon} />
        <ImgPokemon loader={pokemon.back} srcPokemon={pokemon} />
      </div>

      <button onClick={pokeEvent}>api</button>
    </>
  )
}
