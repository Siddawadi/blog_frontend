import { Card } from './blog.card'
import type { IBlogs } from '../../../types/blog.types'

interface Iprops {
    blogs: IBlogs[]
}

export const BlogList = ({ blogs }: Iprops) => {
  return (
    
    <div className='w-full min-h-screen bg-blue-50 py-12 px-4'>
      
      
      <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto'>
          {blogs.map((blog) => (
              <Card key={blog._id} card={blog} />
          ))}
      </div>
    </div>  
  )
}