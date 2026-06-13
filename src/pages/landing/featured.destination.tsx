

export const Featureddestination = () => {
  return (
    <div className='flex gap-5 flex-col flex-1 items-center mt-20'>
      <div className='text-4xl text-white'>Featured destination</div>
      <div className='flex  gap-5  '>
        <div className="h-80  transition hover:scale-105 duration-500  backdrop-blur-2xl  w-80 rounded-2xl 
        flex justify-center ">
          <div className=" backdrop-blur-2xl relative flex">
    <img className=" h-full hover:transform-3d w-80 object-cover rounded-2xl"
     src="mount-everest-facts-and-records.jpg.webp" alt="images" />

          <div className="bg-black/40  absolute inset-0 z-50   flex flex-col
           justify-end items-center p-0.5 ">
          <p className="z-50 py-2 text-white text-3xl font-semibold">Everest</p>
      <p className="b text-white">Experience the journey to the world's highest 
      peak.</p>
      <button className=' rounded-2xl h-10 w-[10vw]
     hover:font-semibold text-orange-300'>Discover Everest</button>
          </div>
          </div>
          
          

        </div>
        <div className="h-80  transition hover:scale-105 duration-500  bg-white/20 backdrop-blur-2xl  w-80 rounded-2xl 
        flex justify-center ">
          <div className=" backdrop-blur-2xl relative">
    <img className=" h-full  w-80 object-cover rounded-2xl"
     src="mount-everest-facts-and-records.jpg.webp" alt="images" />

          <div className="bg-black/40  absolute inset-0 z-50  flex flex-col
           justify-end items-center p-0.5 ">
          <p className="z-50 py-2 text-white text-3xl">Everest</p>
      <p className="b text-white">Trek through the stunning Annapurna region, filled with diverse landscapes, 
        villages, and Himalayan beauty.</p>
      <button className='bg-black/50 rounded-2xl h-10 w-[10vw]
     hover:font-semibold text-orange-300'>Discover Everest</button>
          </div>
          </div>
          
          

        </div>
        <div className="h-80 hover:zoom-105 transition hover:scale-105 duration-500 backdrop-blur-2xl   w-80 rounded-2xl 
        flex justify-center ">
          <div className=" backdrop-blur-2xl relative">
    <img className=" h-full  w-80 object-cover rounded-2xl"
     src="mount-everest-facts-and-records.jpg.webp" alt="images" />

          <div className="bg-black/40   absolute inset-0 z-50  flex flex-col
           justify-end items-center p-0.5 ">
          <p className="z-50 py-2 text-white text-3xl">Everest</p>
      <p className="b text-white">Experience the journey to the world's highest 
      peak, surrounded by breathtaking Himalayan landscapes and Sherpa culture.</p>
      <button className='bg-black/50 rounded-2xl h-10 w-[10vw]
     hover:font-semibold text-orange-300'>Discover Everest</button>
          </div>
          </div>
          
          
    </div>
        </div>
      

        </div>
  )
}
