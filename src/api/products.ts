import { ProductType } from "../types/product";
import instance from "./instance";

export const listPro = () =>{
    const url = '/products'
    return instance.get(url);
}
export const listOnePro = (id: number) =>{
    const url = `/products/${id}`
    return instance.get(url);
}
export const deletePro =(id:number)=>{
    const url = `/products/${id}`
    return instance.delete(url)
}
export const addPro = (pro: ProductType) =>{
    const url = `/products`
    return instance.post(url, pro);
}
export const updatePro = (pro: ProductType) => {
    const url = `/products/${pro._id}` 
    return instance.put(url, pro);
}