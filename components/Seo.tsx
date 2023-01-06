import Head from 'next/head'
import { Iseo } from 'types/interface'

export const Seo = ({ title, description, favicon }: Iseo) => {
  return (
    <>
      <Head>
        <title>{title}</title>
        <meta name='viewport' content='width=device-width, initial-scale=1' />
        {description && <meta name='description' content={description} />}
        {favicon ? (
          <link rel='icon' href={favicon} />
        ) : (
          <link rel='icon' href='/pokedex.png' />
        )}
      </Head>
    </>
  )
}
