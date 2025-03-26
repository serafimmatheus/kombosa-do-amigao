'use client'

import Image from 'next/image'
import { motion } from 'framer-motion'
// import { ArrowDownCircle } from 'lucide-react'

export default function Home() {
  return (
    <section className='pt-20 md:pt-0 min-h-screen flex items-center relative bg-gradient-to-br from-kombosa-950 to-kombosa-800 overflow-hidden'>
      <div className='absolute inset-0'>
        <div className='relative h-full w-full'>
          <Image
            src='https://images.unsplash.com/photo-1561758033-7e924f619b47?q=80&w=1470&auto=format&fit=crop'
            alt='Lanches'
            fill
            className='w-full h-full object-cover opacity-80'
          />
        </div>
      </div>

      <div className='container mx-auto px-4 z-50 py-20'>
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          className='w-full relative z-50 flex flex-col items-center text-center md:text-left'
        >
          <h1 className='text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight mb-4'>
            Kombosa do Amigão
          </h1>
          <p className='text-xl md:text-2xl text-white mb-8 max-w-xl'>
            Em breve uma nova experiência em lanches e refeições rápidas.
          </p>
          {/* <div className='flex flex-col sm:flex-row gap-4 justify-center md:justify-start'>
              <a
                href='#destaques'
                className='px-6 py-3 bg-kombosa-600 text-white rounded-full hover:bg-kombosa-700 transition-colors'
              >
                Ver Destaques
              </a>
              <a
                href='#menu'
                className='px-6 py-3 bg-white text-kombosa-600 rounded-full hover:bg-gray-100 transition-colors'
              >
                Cardápio Completo
              </a>
            </div> */}
        </motion.div>
      </div>

      {/* <div className='absolute bottom-10 left-0 right-0 flex justify-center'>
        <a
          href='#destaques'
          className='animate-bounce bg-white/10 p-2 rounded-full backdrop-blur-sm'
        >
          <ArrowDownCircle size={30} className='text-white' />
        </a>
      </div> */}
    </section>
  )
}
