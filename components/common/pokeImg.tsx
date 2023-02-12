import Image from 'next/image'

export const PokeImg = ({ loader, srcPokemon, alt }: any) => {
  const myLoader = () => {
    return srcPokemon
  }

  return (
    <>
      {loader && (
        <Image
          className=' mx-2'
          loader={myLoader}
          src={srcPokemon}
          width={100}
          height={100}
          alt={alt}
        />
      )}
    </>
  )
}
