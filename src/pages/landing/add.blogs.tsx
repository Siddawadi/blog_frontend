import  { useState } from 'react'
import { Input } from '../../components/common/input/input'
import { useForm, type SubmitHandler } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'
import { addSchema } from '../../schema/yup.schema'
import type { AddInput } from '../../types/addform.types'
import { useMutation } from '@tanstack/react-query'
import { createBlog } from '../../api/blog.api'
import { FaArrowLeft } from 'react-icons/fa'
import { Link } from 'react-router-dom'
export const Add = () => {
  const [images, setImages] = useState<File[]>([])
   //before upload empty array after [file(image1.jpg)]

  const { register, handleSubmit, formState: { errors } } = useForm<AddInput>({
    // yo yup(addSchema) schema ma vako ra default values 
  // ma same xa ki nai check garna . checks if there is any typo 
  // for eg: default values ma name and yup scheama ma Name huna didaina catch garxa 
    defaultValues: {
      name: "",
      title: "",
      subtitle: "",
      description: "",
      detailed_description: "",
    },
    resolver: yupResolver(addSchema),
  })

  const { mutate, isPending } = useMutation({
    mutationFn: (data: AddInput) => { 
      const formData = new FormData() 
      //You use this because you are uploading files (images).
      //  Regular JSON cannot handle file uploads, 
      
      Object.entries(data).forEach(([key, val]) => formData.append(key, val)) 
      // This line takes your list of typed text fields (name,title, description, etc.) 
      // and drops them into the FormData box one by one.

      images.forEach((file) => formData.append('images', file)) 
      //This line takes your list of uploaded picture files and 
      //    drops them into the FormData box one by one.
      return createBlog(formData)
      // api call garxa
    },
    onSuccess: (res) => console.log('Blog created:', res),
    onError: (err) => console.error('Failed:', err),
  })

  const onSubmit: SubmitHandler<AddInput> = (formdata) => {
  if (images.length === 0) { // to check images ko length more than 3 ta xaina ni vanera 
    alert('Please select at least one image')
    return
  }
  if (images.length > 3) {
    alert('Maximum 3 images allowed')
    return
  }
  mutate(formdata)
}

  return (
    <div className='min-h-screen w-full bg-slate-50 flex flex-col justify-center items-center p-4 antialiased'>
      <div className='w-full max-w-md mb-3 flex justify-start'>
        <Link to='/' className='flex items-center gap-2 text-sm text-slate-600 hover:text-blue-600 transition-colors'>
          <FaArrowLeft className='text-xs'/> Back to home
        </Link>
      </div>
      
      <div className='bg-white border border-slate-200 w-full max-w-md h-fit rounded-xl shadow-sm p-6 flex flex-col gap-4'>
        <form onSubmit={handleSubmit(onSubmit)} className='flex flex-col gap-4'>
          <h1 className='text-xl font-bold text-slate-800 border-b border-slate-100 pb-3'>Add Blog</h1>

          <Input register={register} label='Name' name='name' placeholder='Enter your name'
            error={errors?.name?.message} type='text' _id='name' />

          <Input register={register} label='Title' name='title' placeholder='Enter your title'
            error={errors?.title?.message} type='text' _id='title' />

          <Input register={register} label='Subtitle' name='subtitle' placeholder='Enter your subtitle'
            error={errors?.subtitle?.message} type='text' _id='subtitle' />

          <Input register={register} label='Description' name='description' placeholder='Enter your description'
            error={errors?.description?.message} type='text' _id='description' />

          <Input register={register} label='Detailed Description' name='detailed_description'
            placeholder='Enter detailed description' error={errors?.detailed_description?.message}
            type='text' _id='detailed_description' />

          
          <div className='flex flex-col w-full gap-1.5'>
            <label className='text-sm font-medium text-slate-700'>Images (max 3)</label>
            <input
              type='file'
              accept='image/*'
              multiple
              onChange={(e) => setImages(Array.from(e.target.files || []))}
            


//               e.target.files grabs the raw list of files from the browser button.

// Array.from(e.target.files) takes those files and transforms them into a proper array: [File, File, File].

// setImages(...) receives that beautiful, clean array and saves it into your state.
              className='text-sm block w-full text-slate-500 file:mr-4 file:py-2 file:px-4 file:rounded-md file:border-0 file:text-sm file:font-semibold file:bg-blue-50 file:text-blue-700 hover:file:bg-blue-100 transition-all cursor-pointer'
            />
          </div>

          <button
            type='submit'
            disabled={isPending}
            className='w-full h-10 font-medium tracking-wide border border-transparent mt-3 rounded-lg bg-blue-600 hover:bg-blue-700 text-white transition-colors disabled:opacity-60 disabled:pointer-events-none'
          >
            {isPending ? 'Submitting...' : 'Submit'}
          </button>
        </form>
      </div>
    </div>
  )
}