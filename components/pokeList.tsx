import axios from 'axios'
import { useState, useEffect } from 'react'
import { CardPokemon } from './common/pokeCard'

export const PokedexList = () => {
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
  }, [])

  const getPoke = () => {
    var endpoints = []

    for (var i = 1; i <= 50; ++i) {
      endpoints.push(`https://pokeapi.co/api/v2/pokemon/${i}/`)
    }

    axios
      .all(endpoints.map(endpoint => axios.get(endpoint)))
      .then((poke: any) => setIdPoke(poke))
  }

  //poke.data.types.type.name

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

        <footer className='h-full flex justify-center p-14 text-lg font-mono font-semibold'>
          <p>em desenvolvimento 🚧 por Isaac S. Silva...</p>
        </footer>
      </>
    </>
  )
}
