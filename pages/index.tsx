import { Seo } from 'components/Seo'
import Head from 'next/head'
import { PokemonClient } from 'pokenode-ts'

export default function Home() {
  const api = async () => {
    const api = new PokemonClient()

    await api
      .getPokemonByName('1')
      .then(data => console.log(data.name))
      .catch(error => console.error(error))
  }
  return (
    <>
      <Seo
        title='pokedex
      '
      />

      <button onClick={api}>api</button>
    </>
  )
}
