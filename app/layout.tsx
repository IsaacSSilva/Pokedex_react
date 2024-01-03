import './globals.css'
import { Metadata } from 'next'
import { Roboto } from 'next/font/google'

const roboto = Roboto({
  weight: '400',
  subsets: ['latin'],
  display: 'swap'
})

export const metadata: Metadata = {
  title: 'IPokedex',
  description:
    'iPokeDex, Sou uma pokedex para uma busca de algum pokemon no estilo instagram'
}

export default function RootLayout({
  children
}: {
  children: React.ReactNode
}) {
  return (
    <html className={roboto.className} lang='pt-BR'>
      <body>{children}</body>
    </html>
  )
}
