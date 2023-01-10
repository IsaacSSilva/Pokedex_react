import Image from 'next/image'

export const ImgPokemon = ({ loader, srcPokemon }: any) => {
  const myLoader = () => {
    return `${loader} `
  }

  return (
    <>
      {loader && (
        <Image
          loader={myLoader}
          src={`${srcPokemon}`}
          width={100}
          height={100}
          alt=''
        />
      )}
    </>
  )
}
