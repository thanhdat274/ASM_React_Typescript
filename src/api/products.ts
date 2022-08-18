import { ProductType } from "../types/product";
import instance from "./instance";
import { isAuthenticate } from "../utils/localStorage";
const { user, token } = isAuthenticate();

export const listPro = () => {
    const url = '/products'
    return instance.get(url);
}
export const listOnePro = (id: string) => {
    const url = `/products/${id}`
    return instance.get(url);
}
export const listCateAndPro = (id: string) => {
    const url = `/category/${id}?_embed=products`
    return instance.get(url);
}
export const deletePro = (id: string) => {
    const url = `/products/${id}`
    return instance.delete(url)
}
export const addPro = (pro: ProductType) => {
    const url = `/products/${user._id}`;
    return instance.post(url, pro, {
        headers: {
            "Authorization": `Bearer ${token}`
        }
    });
}
export const updatePro = (pro: ProductType) => {
    const url = `/products/${pro._id}`
    return instance.put(url, pro);
}
export const listPriceDesc = () => {
    const url = `/products?sort=price&order=desc`
    return instance.get(url);
}
export const listPriceAsc = () => {
    const url = `/products?sort=price&order=asc`
    return instance.get(url);
}