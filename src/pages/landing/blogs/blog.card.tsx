import type { IBlogs } from '../../../types/blog.types' 
import { FaLongArrowAltRight } from "react-icons/fa";
import { Link } from 'react-router-dom';

interface CardProps {
  card: IBlogs
}

export const Card = ({ card }: CardProps) => {
  
  const blogImages = card?.images || [];

  return (
    <div 
      className='border border-gray-100 bg-white w-full max-w-[350px] rounded-2xl shadow-xl hover:shadow-2xl hover:scale-[1.02] duration-300 transition-all flex flex-col overflow-hidden h-full'
    >
     
      <div className='flex flex-col p-4 pb-0 flex-grow'>
        
       
        <div className='flex gap-1.5 mt-1 h-48 w-full rounded-xl overflow-hidden bg-gray-50'>
          
         
          <div className={`${blogImages.length > 1 ? 'flex-[1.4]' : 'flex-1'} h-full overflow-hidden`}>
            {blogImages[0]?.path ? (
              <img 
                src={blogImages[0].path} 
                className='object-cover w-full h-full hover:scale-105 duration-500 transition-transform' 
                alt={card.title || "Cover snapshot"} 
              />
            ) : (
             
              <div className="w-full h-full bg-gray-100 flex items-center justify-center text-gray-400 text-xs">
                No Image Available
              </div>
            )}
          </div>

         
          {(blogImages[1] || blogImages[2]) && (
            <div className='flex flex-col gap-1.5 flex-1 h-full'>
              {blogImages[1] && (
                <div className='flex-1 h-full overflow-hidden'>
                  <img 
                    src={blogImages[1].path} 
                    className='object-cover w-full h-full hover:scale-105 duration-500 transition-transform' 
                    alt="Detail frame 1" 
                  />
                </div>
              )}
              {blogImages[2] && (
                <div className='flex-1 h-full overflow-hidden'>
                  <img 
                    src={blogImages[2].path} 
                    className='object-cover w-full h-full hover:scale-105 duration-500 transition-transform' 
                    alt="Detail frame 2" 
                  />
                </div>
              )}
            </div>
          )}
        </div>
      
        {/* Typography Content Wrapper */}
        <div className='mt-4 px-1 flex flex-col flex-grow font-sans'>
          <span className='text-amber-600 tracking-wider font-bold text-[10px] uppercase block min-h-[16px]'>
            {card.subtitle || "\u00A0"} {/* Unicode blank space keeps layouts perfectly aligned if text is missing */}
          </span>
          
          <h3 className='font-extrabold text-gray-900 mt-1 text-base tracking-tight leading-snug line-clamp-2 min-h-[44px]'>
            {card.title}
          </h3>
          
          <p className='text-gray-500 text-xs font-normal mt-2 mb-5 leading-relaxed line-clamp-2'>
            {card.description}
          </p>
        </div>
      </div>

      {/* Footer Element anchored securely at the bottom */}
      <div className='border-t border-gray-100 w-full py-3 items-center justify-between flex text-xs px-4 bg-gray-50/50 mt-auto'>
        <div className='flex items-center gap-2'>
          <div className='rounded-full h-7 w-7 bg-amber-600 text-white font-bold flex items-center justify-center uppercase text-[10px] shadow-sm select-none'>
            {card.name ? card.name[0] : 'U'}
          </div>
          <p className='font-semibold text-gray-700 tracking-tight text-[11px] truncate max-w-[120px]'>
            {card.name || "Anonymous"}
          </p>
        </div>
        
        <Link 
          to={`/details/${card._id}`}
          className='flex items-center gap-1 font-bold text-gray-900 hover:text-amber-600 transition-colors group text-[11px]'
        >
          Read Details 
          <FaLongArrowAltRight className='text-xs transform group-hover:translate-x-1 duration-200 transition-transform' />
        </Link>
      </div>
    </div>
  )
}