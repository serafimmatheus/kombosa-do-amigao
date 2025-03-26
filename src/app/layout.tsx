import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import Logo from './_components/Logo'

const inter = Inter({
  subsets: ['latin'],
})

export const metadata: Metadata = {
  title: 'Kombosa do Amigão',
  description:
    'Os melhores lanches da cidade, preparados com ingredientes selecionados e muito carinho.',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang='pt-BR'>
      <body className={`${inter.className} antialiased min-h-screen`}>
        <header className='fixed w-full h-auto top-0 left-0 right-0 z-50 bg-red-400 backdrop-blur-lg flex items-center py-2'>
          <div className='w-full max-w-[1280px] mx-auto px-4'>
            <Logo />
          </div>
        </header>
        <main>{children}</main>
      </body>
    </html>
  )
}
