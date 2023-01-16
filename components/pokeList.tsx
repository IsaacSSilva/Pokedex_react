import axios from 'axios'
import { useState, useEffect } from 'react'
import { CardPokemon } from './common/pokeCard'

export const PokedexList = () => {
  let e = 50

  const [addPoke, setAddPoke] = useState(e)
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

  const getPoke = () => {
    var endpoints = []

    for (var i = 1; i <= addPoke; ++i) {
      endpoints.push(`https://pokeapi.co/api/v2/pokemon/${i}/`)
    }

    axios
      .all(endpoints.map(endpoint => axios.get(endpoint)))
      .then((poke: any) => setIdPoke(poke))
  }

  return (
    <>
      <>
        {/* <input type='text' /> */}

        <div className='w-full flex flex-row flex-wrap py-10 px-1 md:p-5  justify-center items-center gap-5'>
          {idPoke &&
            idPoke.map(poke => (
              <CardPokemon
                key={poke.data.id}
                img={poke.data.sprites.front_default}
                name={poke.data.name}
                id={
                  poke.data.id.toString().length === 1
                    ? `#00${poke.data.id}`
                    : poke.data.id.toString().length === 2
                    ? `#0${poke.data.id}`
                    : `#${poke.data.id}`
                }
                pokeType={poke.data.types[0].type.name}
              />
            ))}
        </div>

        <div className='flex justify-center items-center'>
          <button
            className='px-4 py-2 bg-yellow-300 border border-white rounded-lg'
            onClick={() => {
              e = addPoke + 25
              e === 1250 ? setAddPoke(1279) : setAddPoke(e)
              console.log(e)
            }}
          >
            Mais Pokemons...
          </button>
        </div>

        <footer className='h-full flex justify-center p-14 text-lg font-mono font-semibold'>
          <p>em desenvolvimento 🚧 por Isaac S. Silva...</p>
        </footer>
      </>
    </>
  )
}
