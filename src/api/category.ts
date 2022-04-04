import { CategoryType } from "../types/category";
import instance from "./instance";

export const listCate = () =>{
    const url = '/category'
    return instance.get(url);
}
export const listOneCate = (id: number) =>{
    const url = `/category/${id}/edit`
    return instance.get(url);
}
export const listCateAndPro = (id: number) =>{
    const url = `/category/${id}`
    return instance.get(url);
}
export const remove =(id:number)=>{
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