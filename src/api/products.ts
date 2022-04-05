import { ProductType } from "../types/product";
import instance from "./instance";
import { isAuthenticate } from "../utils/localStorage";
const {user , token} = isAuthenticate();

export const listPro = () =>{
    const url = '/products'
    return instance.get(url);
}
export const listOnePro = (id: number) =>{
    const url = `/products/${id}`
    return instance.get(url);
}
export const listCateAndPro = (id: number) =>{
    const url = `/category/${id}?_embed=products`
    return instance.get(url);
}
export const deletePro =(id:number)=>{
    const url = `/products/${id}`
    return instance.delete(url)
}
export const addPro = (pro: ProductType) =>{
    const url = `/products/${user._id}`;
    return instance.post(url, pro,{
        headers: {
            "Authorization": `Bearer ${token}`
        }
    });
}
export const updatePro = (pro: ProductType) => {
    const url = `/products/${pro._id}` 
    return instance.put(url, pro);
}