import Image from 'next/image'
import pokeIcon from '../src/assets/pokeicon.png'
export const Home = () => {
  return (
    <>
      <div>
        <Image
          src={pokeIcon}
          alt='icone pokemon'
          priority
          className='w-1/2 m-auto'
        />
      </div>
    </>
  )
}
