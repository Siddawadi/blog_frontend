
import * as yup from "yup"

export const addSchema = yup.object({
  name: yup.string().required("Name is required").max(50, 'Must be less than 50 characters'),
  title: yup.string().required("Title is required").max(100, 'Must be less than 100 characters'),
  subtitle: yup.string().required("Subtitle is required").max(150, 'Must be less than 150 characters'),
  description: yup.string().required("Description is required").max(300, 'Must be less than 300 characters'),
  detailed_description: yup.string().required("Detailed description is required").max(700, 'Must be less than 700 characters'),
})