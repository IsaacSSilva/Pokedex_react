import Link from 'next/link'
import Image from 'next/image'

// import Linkedin from 'app/assets/icons8-linkedin-circled.svg'
// import Github from '../src/assets/icons8-github.svg'

export const metadata = {
  title: 'Home'
}

export default function Index() {
  return (
    <>
      <main className='w-screen h-screen flex lg:flex-row flex-col lg:items-end justify-end bg-sky-500 items-center'>
        <div id='banner' className='h-full w-full'>
          <Image
            className='w-full h-full bg-cover'
            src={'https://media.tenor.com/zlxnhYvP8GgAAAAC/pokemon-anime.gif'}
            // src={
            //   'https://th.bing.com/th/id/R.9c453571169ec7979c14fe88dfd5842d?rik=6VK13AbXUwCJXw&pid=ImgRaw&r=0'
            // }
            width={1000}
            height={1000}
            unoptimized
            alt='Linkedin Icone'
          />
        </div>

        <div className='flex flex-col gap-14 md:gap-7 lg:gap-28 p-3 w-96 text lg:w-1/3 lg:text-right text-justify bg-sky-500 bg-opacity-95'>
          <h1 className='uppercase font-bold text-5xl md:text-right text-center'>
            I PokeDex
          </h1>
          <div>
            <p>
              Essa e uma lista de pokemon inspirada em PokeDex, chamada IPokeDex
              projetada para te trazer uma breve amostra dos pokemons.
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
          </div>

          <Link className='m-auto' target='_self' href={'./pokedex'}>
            <div className='w-24 p-2 rounded-full text-center bg-yellow-300 transition-all duration-500  hover:p-3 hover:w-28 hover:bg-opacity-90'>
              I PokeDex
            </div>
          </Link>

          <div>
            <p className='text-right'>
              A
              <span className='bg-yellow-300 px-1 py-0.5 mx-0.5 rounded-full bg-opacity-90'>
                {' '}
                IPokeDex{' '}
              </span>
              Foi Desenvolvido com 💜 por <br /> Isaac S.Silva
            </p>
            <ul className='flex flex-row justify-end gap-1 mt-5'>
              <li className='md:opacity-70 transition duration-700 hover:opacity-100'>
                <Link
                  target='_blank'
                  href={'https://github.com/IsaacGSS/Pokedex_react'}
                >
                  {/* <Image
                    className='transition-all duration-700 hover:w-11 w-10'
                    src={Github}
                    alt='Linkedin Icone'
                  /> */}
                </Link>
              </li>

              <li className='md:opacity-70 transition duration-700 hover:opacity-100'>
                <Link
                  target='_blank'
                  href={
                    'https://www.linkedin.com/in/isaac-gabriel-sousa-silvadev/'
                  }
                >
                  {/* <Image
                    className='transition-all duration-700 hover:w-11 w-10'
                    src={Linkedin}
                    alt='Linkedin Icone'
                  /> */}
                </Link>
              </li>

              <li className='md:opacity-70 transition-all duration-700 hover:opacity-100'>
                <Link target='_blank' href={'https://linksdev.vercel.app/'}>
                  <Image
                    className='transition-all duration-700 hover:w-11 w-10 rounded-full'
                    src={'https://github.com/IsaacGSS.png'}
                    width={40}
                    height={40}
                    unoptimized
                    alt='Linkedin Icone'
                  />
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </main>
    </>
  )
}
