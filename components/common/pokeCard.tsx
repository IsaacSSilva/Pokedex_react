import { PokeImg } from './pokeImg'

export const CardPokemon = ({ key, img, name, id, pokeType }: any) => {
  return (
    <>
      <div
        className='w-40 h-40 z-10 flex flex-col justify-center items-center bg-white bg-opacity-60  rounded-md border border-slate-800'
        key={key}
        title={`${id}, ${name}`}
      >
        <div className='w-full flex flex-row px-1 justify-between'>
          <span className='font-mono text-base relative opacity-40'>{id}</span>
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
