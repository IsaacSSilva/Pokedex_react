import { PokeImg } from '../common/pokeImg'

export const CardPokemon = ({ img, name, id, numero, pokeType }: any) => {
  let numeroPokemon =
    numero.length === 1
      ? `#00${numero}`
      : numero.length === 2
      ? `#0${numero}`
      : `#${numero}`

  return (
    <>
      <div
        className='w-40 h-40 z-10 flex flex-col justify-center items-center bg-white bg-opacity-60  rounded-md border border-slate-800'
        id={id}
        title={`${numeroPokemon}, ${name}`}
      >
        <div className='w-full flex flex-row px-1 justify-between'>
          <span className='font-mono text-base relative opacity-40'>
            {numeroPokemon}
          </span>
          <span className='font-mono text-sm relative opacity-40'>
            {pokeType}
          </span>
        </div>

        <PokeImg loader={img} srcPokemon={img} alt={name} />
        <div className='w-full h-full z-0 font-roboto capitalize font-semibold text-lg pl-3 flex items-center bg-white rounded-b-md'>
          <h4>{name}</h4>
        </div>
      </div>
    </>
  )
}