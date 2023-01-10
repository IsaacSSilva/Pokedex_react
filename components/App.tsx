import { useState, useEffect } from 'react'
import axios from 'axios'

export const App = () => {
  const [poke, setPoke] = useState()
  const [img, setimg] = useState({})
  const api = 'https://pokeapi.co/api/v2/pokemon/' + poke

  const pokeEvent = () => {
    axios.get(api).then(api => {
      setimg({
        back: api.data.sprites.back_default,
        front: api.data.sprites.front_default
      })
    })
  }

  return (
    <>
      <input
        onChange={e => {
          setPoke(e.target.value)
        }}
        type='text'
      />

      <img src={img.front} alt='' />
      <img src={img.back} alt='' />

      <button onClick={pokeEvent}>api</button>
    </>
  )
}
