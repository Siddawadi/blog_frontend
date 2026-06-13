

import { Header } from '../../components/common/header'
import { motion } from 'framer-motion'

export const Herosection = () => {
  return (
    <div className='relative w-full min-h-screen overflow-hidden '>
        
        <div className="absolute top-0 left-0 w-full z-50">
            <Header/>
        </div>

     
        <img 
          className='absolute inset-0 w-full h-full object-cover ' 
          src="pexels-robert-stokoe-105922-9275921.jpg" 
          alt="Scenic Nepal Mountains" 
        />

        
        <div className='absolute inset-0 bg-black/40' />

    
        <div
        
            className='relative z-10 min-h-screen duration-500 transition-all  flex flex-col items-center justify-center px-4 text-center gap-6'>
            
            
            <motion.h1 
            initial={{y:80,opacity:0}}
            whileInView={{y:0,opacity:1}}
            viewport={{once:false}} 
            transition={{ duration: 0.6, ease: "easeOut" }}
              style={{ fontFamily: '"Plus Jakarta Sans", sans-serif' }}
              className='text-white text-6xl md:text-8xl translate-all  lg:text-9xl font-bold tracking-tight  shadow-black shadow-xl'
            >
              GlobeDiary
            </motion.h1>
            
            
            <p className='text-gray-100 text-sm md:text-base lg:text-lg max-w-xl font-light tracking-wide drop-shadow'>
              Capture the World, One Story at a Time
            </p>
            
            
            <div className='flex flex-col sm:flex-row gap-4 mt-4'>
               
                <a href={'#blogs'} className='px-8 py-3 rounded-full bg-black/30
                 text-white font-medium text-sm border border-white/10 
                 backdrop-blur-md transition-all duration-300 hover:bg-white/20
                  hover:border-white/40 shadow-lg'>
                  Explore Stories
                </a>
            </div>
            
        </div>
    </div>
  )
}