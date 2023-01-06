import { PokemonClient } from 'pokenode-ts'
import { useState } from 'react'

export const Iput = () => {
  const [poke, setPoke] = useState('')
  const [pokemon, setPokemon] = useState('')

  const api = async () => {
    const api = new PokemonClient()

    await api
      .getPokemonByName(poke)
      .then(data => setPokemon(data.name))
      .catch(error => console.error(error))
  }

  return (
    <>
      <input
        value={poke}
        onChange={event => {
          setPoke(event.target.value)
        }}
        type='text'
      />

      <div>{pokemon}</div>

      <button onClick={api}>api</button>
    </>
  )
}
