import axios from 'axios'
import { useState, useEffect } from 'react'
import { CardPokemon } from './pokeCard'

export const PokedexList = () => {
  const [addPoke, setAddPoke] = useState<number>(50)
  const [valueNumero, setValuNumero] = useState()
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

  const api = 'https://pokeapi.co/api/v2/pokemon?limit=50'

  useEffect(() => {
    getPoke()
  }, [addPoke])

  const getPoke = async () => {
    var endpoints = []

    for (var i = 1; i <= addPoke; ++i) {
      endpoints.push(`https://pokeapi.co/api/v2/pokemon/${i}/`)
    }

    await axios
      .all(endpoints.map(endpoint => axios.get(endpoint)))
      .then((poke: any) => setIdPoke([...poke]))
  }

  return (
    <>
      <div className='flex m-auto justify-center items-center gap-7'>
        <input
          placeholder='nome'
          type='text'
          onChange={e => {
            setValueName(e.target.value.toLowerCase())
          }}
        />
      </div>

      <div className='max-w-3xl flex flex-row flex-wrap m-auto py-10 px-1 md:p-5  justify-center items-center gap-5'>
        {valueName
          ? idPoke
              .filter(poke => poke.data.name.includes(valueName))

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
          : idPoke.map((poke, key) => (
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
            setAddPoke(addPoke + 25)
            console.log(addPoke)
          }}
        >
          Mais Pokemons...
        </button>
      </div>
    </>
  )
}
