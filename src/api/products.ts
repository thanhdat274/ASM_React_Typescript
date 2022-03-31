import instance from "./instance";

 export const getProduct = () =>{
     const url = '/products';
     return instance.get(url);
 }