import Image from 'next/image'
import { motion } from 'framer-motion'
import { ArrowDownCircle } from 'lucide-react'

export default function Home() {
  return (
    <section className='pt-20 md:pt-0 min-h-screen flex items-center relative bg-gradient-to-br from-kombosa-950 to-kombosa-800 overflow-hidden'>
      <div className='absolute inset-0 opacity-20'>
        <div className='relative h-full w-full'>
          <Image
            src='https://images.unsplash.com/photo-1561758033-7e924f619b47?q=80&w=1470&auto=format&fit=crop'
            alt='Lanches'
            fill
            className='w-full h-full object-cover'
          />
        </div>
      </div>

      <div className='container mx-auto px-4 z-10 py-20'>
        <div className='flex flex-col md:flex-row items-center'>
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className='md:w-1/2 text-center md:text-left'
          >
            <h1 className='text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight mb-4'>
              Kombosa do Amigão
            </h1>
            <p className='text-xl md:text-2xl text-white/90 mb-8 max-w-xl'>
              Os melhores lanches da cidade, preparados com ingredientes
              selecionados e muito carinho.
            </p>
            <div className='flex flex-col sm:flex-row gap-4 justify-center md:justify-start'>
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
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className='md:w-1/2 mt-10 md:mt-0'
          >
            <div className='relative'>
              <div className='absolute -inset-4 bg-white/10 rounded-full blur-xl'></div>
              <img
                src='https://images.unsplash.com/photo-1594212699903-ec8a3eca50f5?q=80&w=800&auto=format&fit=crop'
                alt='X-Tudo'
                className='relative z-10 w-full h-auto rounded-3xl shadow-2xl'
              />
            </div>
          </motion.div>
        </div>
      </div>

      <div className='absolute bottom-10 left-0 right-0 flex justify-center'>
        <a
          href='#destaques'
          className='animate-bounce bg-white/10 p-2 rounded-full backdrop-blur-sm'
        >
          <ArrowDownCircle size={30} className='text-white' />
        </a>
      </div>
    </section>
  )
}
