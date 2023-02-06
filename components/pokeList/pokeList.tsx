import axios from 'axios'
import { useState, useEffect } from 'react'
import { CardPokemon } from './pokeCard'

export const PokedexList = () => {
  const [addPoke, setAddPoke] = useState<number>(150)
  const [pokeLimited, setPokeLimited] = useState<number>(50)
  const [valueName, setValueName] = useState<any>()
  const [valueNumber, setValueNumber] = useState<any>()
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
      <div className='m-auto flex flex-col justify-center items-center gap-2'>
        <input
          className='px-2 py-1 rounded-sm bg-opacity-75 bg-white focus:bg-opacity-100'
          placeholder='Nome'
          type='text'
          onChange={e => {
            setValueName(e.target.value.toLowerCase())
          }}
        />

        <input
          className='px-2 py-1 rounded-sm bg-opacity-75 bg-white focus:bg-opacity-100'
          placeholder='Numero'
          type='text'
          onChange={e => {
            setValueNumber(e.target.value)
          }}
        />
      </div>

      <div className='flex flex-row flex-wrap m-auto my-10 mx-1 md:m-5  justify-center items-center gap-5'>
        {valueNumber
          ? idPoke
              .filter(poke => poke.data.id == valueNumber)
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
          : valueName
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
          : valueName || valueNumber
          ? idPoke
              .filter(poke => poke.data.name.includes(valueName))
              .filter(poke => poke.data.id == valueNumber)
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
            pokeLimited >= 150 ? setAddPoke(addPoke + 25) : ''
            setPokeLimited(pokeLimited + 25)
          }}
        >
          Mais Pokemons...
        </button>
      </div>
    </>
  )
}
