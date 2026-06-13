import { addSchema } from "../schema/yup.schema";
import type { InferType } from "yup";
export type AddInput =InferType<typeof addSchema>