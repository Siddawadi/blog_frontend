

export const DataLoading = () => {
     return (
    <div className='min-h-screen w-full flex items-center justify-center bg-gray-50/50'>
      <div className='flex flex-col items-center gap-3'>
        <div className='w-8 h-8 border-4 border-amber-600 border-t-transparent rounded-full animate-spin' />
        <p className='text-gray-400 text-xs tracking-widest uppercase font-semibold animate-pulse'>Loading Story...</p>
      </div>
    </div>
  )
}
