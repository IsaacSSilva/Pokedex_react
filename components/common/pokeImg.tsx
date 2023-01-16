import Image from 'next/image'

export const PokeImg = ({ loader, srcPokemon, alt }: any) => {
  const myLoader = () => {
    return `${loader} `
  }

  return (
    <>
      {loader && (
        <Image
          //bg-opacity-10 bg-white
          className='rounded-full mx-2'
          loader={myLoader}
          src={`${srcPokemon}`}
          width={100}
          height={100}
          alt={alt}
        />
      )}
    </>
  )
}
