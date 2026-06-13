import type { IImages } from "./global.types"

export interface IBlogs {
    _id:string,
    name:string,
    title:string,
    subtitle:string,
    date:Date,
    description:string
    images:IImages[]
}   