import Image from 'next/image'
import pokeIcon from 'public/pokeicon.png'
export const Header = () => {
  return (
    <header
    className='flex justify-end px-10 py-4'
    >

      <Image
        src={pokeIcon}
        alt='icone pokemon'
        priority
        className='w-32'
      />
    </header>
  )
}
