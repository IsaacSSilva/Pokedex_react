import Link from 'next/link'
import { Seo } from '../components/common/Seo'
import Image from 'next/image'
import Linkedin from '../src/assets/icons8-linkedin-circled.svg'
import Github from '../src/assets/icons8-github.svg'

export default function Index() {
  return (
    <>
      <Seo title='Home PokeDex' />
      <main className='w-screen h-screen flex items-end md:justify-end md:items-center'>
        <div className='flex flex-col gap-20 md:gap-7 m-3 md:w-96 text-right'>
          <h1 className='uppercase font-bold text-5xl'>I Pokemon</h1>
          <div>
            <p>
              Essa e uma lista com os pokemons inspirada em PokeDex, chamada
              IPokeDex projetada para te trazer uma breve amostra dos pokemons.
            </p>
            <p>
              As informaoes da IPokeDex foi retirada da{' '}
              <Link
                target='_blank'
                href={'https://pokeapi.co/'}
                className='font-semibold after:content-["👈"]'
              >
                PokeAPI
              </Link>
            </p>
            <Link target='_self' href={'./pokedex'}>
              <div className='w-24 p-2 rounded-full text-center bg-yellow-300'>
                I PokeDex
              </div>
            </Link>
          </div>

          <div>
            <p>A IPokeDex Foi Desenvolvido com 💜 por Isaac S.Silva</p>
            <ul className='flex flex-row'>
              <li>
                <Link target='_blank' href={'https://github.com/IsaacGSS'}>
                  <span>
                    <Image className='w-10' src={Github} alt='Linkedin Icone' />
                  </span>
                </Link>
              </li>

              <Link
                target='_blank'
                href={
                  'https://www.linkedin.com/in/isaac-gabriel-sousa-silvadev/'
                }
              >
                <li>
                  <span>
                    <Image
                      className='w-10'
                      src={Linkedin}
                      alt='Linkedin Icone'
                    />
                  </span>
                </li>
              </Link>
            </ul>
          </div>
        </div>
      </main>
    </>
  )
}
