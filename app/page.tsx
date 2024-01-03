import Link from 'next/link'
import Image from 'next/image'

// import Linkedin from 'app/assets/icons8-linkedin-circled.svg'
// import Github from '../src/assets/icons8-github.svg'
import { Header } from './pokedex/Header'

export const metadata = {
  title: 'Is Pokedex - Home'
}

export default function Index() {
  return (
    <>
      <Header />
      <main className='h-screen flex justify-center items-center text-center'>
        Home
      </main>
    </>
  )
}
