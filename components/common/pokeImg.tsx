import Image from 'next/image'

export const PokeImg = ({ loader, srcPokemon, alt, width, height }: any) => {
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
          width={width}
          height={height}
          alt={alt}
        />
      )}
    </>
  )
}
