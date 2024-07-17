import { AlignJustify } from "lucide-react";
import Image from "next/image";

export default function Home() {
  return (
    <>
      <header className="flex justify-between items-center py-1 px-6">
        <Image src={'/favicon.png'} alt="PokeIcon" width={80} height={80}/>

        <AlignJustify />
      </header>
      <main>

        <div className=" w-full h-[320px] flex flex-col justify-center items-center gap-11  ">
          <h1 className="text-7xl font-thin">
            Pokédex
          </h1>

          <form action="" className="">

            <input type="text" name="" id="" placeholder="Pikachu or 25" className="font-thin"/>

          </form>
        </div>

        <div className="w-full h-full flex gap-4">

          <div id="card"
          className="flex flex-col justify-between items-center gap-2 w-28 h-36 m-auto 
          border border-black rounded-md shadow-md shadow-zinc-950/20 overflow-hidden"
          >
            <div id="namber and type"
            className="flex justify-between items-center w-full px-1
            text-black/35 font-mono"
            >
              <span>#003</span>
              <span>glass</span>
            </div>

            <div id="image"
            className="bg-cover"
            >
              <Image 
              //className="w-28" 
              src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/showdown/130.gif" 
              alt="Venusaur" 
              width={100}
              height={100}
              className="max-w-[80px] h-full bg-cover"
              />              
            </div>

            <div
              className="w-full text-left pl-2 pb-0.5 bg-slate-200 "
            >
              <span id="name">Venusaur</span>
            </div>
          </div>

        </div>

      </main>
      <footer>

      </footer>
    </>
  );
}
