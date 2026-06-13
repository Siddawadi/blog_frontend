

export const Footer = () => {
  return (
    <footer className='bg-slate-900 text-slate-300 border-t border-slate-800'>
      <div className='max-w-7xl mx-auto px-6 py-12 grid  grid-cols-3 gap-8'>
        
       
        <div className='flex flex-col gap-3'>
          <h2 className='text-white text-xl font-bold tracking-wide'>GlobeDiary</h2>
          <p className='text-sm text-slate-400 leading-relaxed balance'>
            A community-driven travel blogging platform where explorers, adventurers, and storytellers come together to share their experiences from around the world.
          </p>
        </div>

        
        <div className='flex flex-col gap-3 md:pl-12'>
          <h3 className='text-white text-sm font-semibold tracking-wider uppercase'>Explore</h3>
          <ul className='flex flex-col gap-2 text-sm'>
            <li>All Stories</li>
            <li>Trending Destinations</li>
            <li>Our Mission</li>
          </ul>
        </div>

        
        <div className='flex flex-col gap-3'>
          <h3 className='text-white text-sm font-semibold tracking-wider uppercase'>Our Vision</h3>
          <p className='text-sm text-gray-400 '>
            Every story helps inspire the next journey. We connect people through authentic travel experiences and make discovering the world more accessible, one story at a time.
          </p>
        </div>

      </div>

      
    </footer>
  )
}