import Image from 'next/image'
import pokeIcon from 'public/pokeicon.png'
import Pokedex from './page'
export const Header = () => {
  return (
    <header className='flex  px-10 py-4'>
      <nav>
        <ul>
          <li>
            <a href=''>Home</a>
          </li>
          <li>
            <a href='/batalha'>Batalha</a>
          </li>
          <li>
            <a href='/pokedex'>IsPokedex</a>
          </li>
        </ul>
      </nav>

      <Image
        src={pokeIcon}
        alt='icone pokemon'
        priority
        className='w-32 items-end'
      />
    </header>
  )
}
