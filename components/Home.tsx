import Image from 'next/image'
import pokeIcon from '../src/assets/pokeicon.png'
export const Home = () => {
  return (
    <>
      <div>
        <Image src={pokeIcon} alt='' className='' />
      </div>
    </>
  )
}
