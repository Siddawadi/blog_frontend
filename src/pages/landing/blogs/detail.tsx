import { useQuery } from '@tanstack/react-query'
import { useParams, Link } from 'react-router-dom'
import { getone } from '../../../api/blog.api'
import type { IImages } from '../../../types/global.types'
import { motion } from 'framer-motion'
import { FaArrowLeft } from 'react-icons/fa'

export const Detail = () => {
  const params = useParams()
  const id = params.id as string
  

  const { data, isLoading } = useQuery({
    queryFn: () => getone(id),
    queryKey: ['get-one', id]
  })
  
  const blog = data?.data

  if (isLoading) return (
    <div className='min-h-screen w-full flex items-center justify-center bg-gray-50/50'>
      <div className='flex flex-col items-center gap-3'>
        <div className='w-8 h-8 border-4 border-amber-600 border-t-transparent rounded-full animate-spin' />
        <p className='text-gray-400 text-xs tracking-widest uppercase font-semibold animate-pulse'>Loading Story...</p>
      </div>
    </div>
  )

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.4 }}
      className='min-h-screen w-full bg-white ml-50 text-gray-800 selection:bg-amber-100 items-center selection:text-amber-900'
      style={{ fontFamily: '"Plus Jakarta Sans", sans-serif' }}
    >
        <div className='flex flex-col items-start ml-30 mt-30'>
      <Link to='/' className='text-orange-300 flex  text-md'><FaArrowLeft/>back to story</Link>
      <p className='mt-5 font-sans font-semibold tracking-tighter text-2xl'>{blog.subtitle}</p>
      <p className='mt-5 font-sans font-bold text-6xl tracking-tight'>{blog.title}</p>
      <div className='flex items-center justify-center gap-2'>
      <button className='h-12 w-12  border-red-300 rounded-full bg-black animate-spin text-white mt-10 '>

    {blog.name[0]}  
      </button>
      <p className='mt-9 font-sans font-semibold tracking-tighter  text-2xl'>By {blog.name}</p>
      </div>
      
      
<div className='mt-10 w-full md:w-[50vw]  h-[70vh] flex gap-3 overflow-hidden rounded-2xl shadow-lg bg-gray-50/50'>
  
  
  {blog.images?.map((image: IImages, index: number) => 
    index === 0 && (
      <div key={image.public_id} className='flex-1
       h-full overflow-hidden'>
        <img 
          className='h-full w-full hover:scale-105 transition-transform duration-500 ease-out object-cover' 
          src={image.path} 
          alt="Main Cover" 
        />
      </div>
    )
  )}


  {blog?.images?.length > 1 && (
    <div className='flex flex-col gap-3 flex-1 h-full'>
      {blog.images.map((image: IImages, index: number) => 
        (index === 1 || index === 2) && (
          
          <div key={image.public_id} className='flex-1 h-full overflow-hidden'>
            <img 
              src={image.path} 
              className='h-full w-full hover:scale-105 transition-transform duration-500 ease-out object-cover' 
              alt="Grid detail" 
            />
          </div>
        )
      )}
    </div>
  )}

</div>
<div className='h-fit w-[50vw] mb-10 text-justify first-letter:font-bold first-letter:text-7xl  text-3xl font-sans  ml-0 mt-10'>

    <p className='ml-5 '>{blog.detailed_description}</p>
</div>
     </div>

    </motion.div>
  )
}