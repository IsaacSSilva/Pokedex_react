import axios from 'axios'
import { useState, useEffect } from 'react'
import { CardPokemon } from './pokeCard'

export const PokedexList = () => {
  const [addPoke, setAddPoke] = useState<number>(150)
  const [pokeLimited, setPokeLimited] = useState<number>(50)
  const [valueName, setValueName] = useState<any>()
  const [idPoke, setIdPoke] = useState([
    {
      data: {
        id: '',
        name: '',
        sprites: { front_default: '' },
        types: [{ type: { name: '' } }]
      }
    }
  ])

  useEffect(() => {
    getPoke()
  }, [addPoke])

  const getPoke = async () => {
    let endpoints: string[] = []

    for (
      let i = endpoints.length === 0 ? 1 : endpoints.length;
      i <= addPoke;
      ++i
    ) {
      endpoints.push(`https://pokeapi.co/api/v2/pokemon/${i}/`)
    }

    await axios
      .all(endpoints.map(endpoint => axios.get(endpoint)))
      .then((poke: any) => setIdPoke([...poke]))
  }

  return (
    <>
      <div className='m-auto flex flex-row justify-center items-center gap-2'>
        <input
          className='px-2 py-1 rounded-sm bg-opacity-75 bg-white focus:bg-opacity-100 outline-none'
          placeholder='Pikachu ou #25'
          type='text'
          onChange={(e: any) => {
            let valor =
              e.target.value.substr(0, 1) == '#'
                ? parseInt(e.target.value.replace(/[^0-9]/g, ''))
                : e.target.value.toLowerCase()

            setValueName(valor)
          }}
        />
      </div>

      <div className='flex flex-row flex-wrap m-auto my-10 mx-1 md:m-5  justify-center items-center gap-5'>
        {valueName
          ? idPoke
              .filter(poke =>
                typeof valueName === 'string'
                  ? poke.data.name.includes(valueName)
                  : poke.data.id == valueName
              )
              .map((poke, key) => (
                <CardPokemon
                  key={key}
                  id={poke.data.id}
                  img={poke.data.sprites.front_default}
                  name={poke.data.name}
                  numero={poke.data.id.toString()}
                  pokeType={poke.data.types[0].type.name}
                />
              ))
          : idPoke
              .slice(0, pokeLimited)
              .map((poke, key) => (
                <CardPokemon
                  key={key}
                  id={poke.data.id}
                  img={poke.data.sprites.front_default}
                  name={poke.data.name}
                  numero={poke.data.id.toString()}
                  pokeType={poke.data.types[0].type.name}
                />
              ))}
      </div>

      <div className='flex justify-center items-center'>
        <button
          className='px-4 py-2 bg-yellow-300 border border-white rounded-lg'
          onClick={() => {
            pokeLimited >= addPoke ? setAddPoke(addPoke + 25) : ''
            setPokeLimited(pokeLimited + 25)
          }}
        >
          Mais Pokemons...
        </button>
      </div>
    </>
  )
}
