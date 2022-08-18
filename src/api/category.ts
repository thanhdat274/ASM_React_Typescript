import { CategoryType } from "../types/category";
import instance from "./instance";

export const listCate = () =>{
    const url = '/category'
    return instance.get(url);
}
export const listOneCate = (id: string) =>{
    const url = `/category/${id}`
    return instance.get(url);
}
export const remove =(id:string)=>{
    const url = `/category/${id}`
    return instance.delete(url)
}
export const add = (cate: CategoryType) =>{
    const url = '/category'
    return instance.post(url, cate);
}
export const update = (cate: CategoryType) => {
    const url = `/category/${cate._id}` 
    return instance.put(url, cate);
}