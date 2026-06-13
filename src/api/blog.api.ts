import api from ".";

export const getblogs = async () => {
    try {
        const response = await api.get("/find")
        return response.data
    } catch (error) {
        throw error
    }
}

export const getone = async (id: string) => {
    try {
        const response = await api.get(`/findone/${id}`)
        return response.data
    } catch (error) {
        
        console.error("Error fetching single blog:", error)
        throw error
    }
}





export const createBlog = async (data: FormData) => {
  const res = await api.post('/create', data, {
    headers: { 'Content-Type': 'multipart/form-data' },
  })
  return res.data
}