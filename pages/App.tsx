import { useState } from 'react'
import axios from 'axios'
import { PokeImg } from '../components/common/pokeImg'
import { IPoke } from '../types/interface'

export const App = () => {
  const [idPoke, setIdPoke] = useState()
  const [error, setError] = useState('')
  const [pokemon, setPokemon] = useState<IPoke>({ back: '', front: '' })
  const api = 'https://pokeapi.co/api/v2/pokemon/' + idPoke

  const pokeEvent = () => {
    axios
      .get(api)
      .then(api => {
        setPokemon({
          back: api.data.sprites.back_default,
          front: api.data.sprites.front_default
        })
      })
      .catch(error => {
        setError(error)
        console.log(error)
      })
  }

  return (
    <div className='w-screen h-screen flex flex-col justify-center items-center'>
      <input
        className='border border-black outline-none'
        onChange={(e: any) => {
          setIdPoke(e.target.value)
        }}
        type='text'
      />

      {error ? (
        <p>{error}</p>
      ) : (
        <div className='flex'>
          <PokeImg loader={pokemon.front} srcPokemon={pokemon} />
          <PokeImg loader={pokemon.back} srcPokemon={pokemon} />
        </div>
      )}

      <button onClick={pokeEvent}>api</button>
    </div>
  )
}
