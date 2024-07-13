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
            <button type="button">
              buttao
            </button>

          </form>
        </div>

      </main>
      <footer>

      </footer>
    </>
  );
}
