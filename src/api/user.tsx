import instance from "./instance";
import { UserType } from '../types/user';

export const listUser = () =>{
    const url = '/user'
    return instance.get(url);
}
export const listOneUser = (id: number) =>{
    const url = `/user/${id}`
    return instance.get(url);
}
export const deleteUser =(id:number)=>{
    const url = `/user/${id}`
    return instance.delete(url)
}
export const addUser = (use: UserType) =>{
    const url = '/user'
    return instance.post(url, use);
}
export const updateUser = (use: UserType) => {
    const url = `/user/${use._id}` 
    return instance.put(url, use);
}