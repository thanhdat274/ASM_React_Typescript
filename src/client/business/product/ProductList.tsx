import React from 'react'
import { useEffect, useState } from 'react';
import { listCateAndPro, listPro } from '../../../api/products';
import { useParams } from 'react-router-dom';
import { ProductType } from '../../../types/product';
type ListPro = {
    data: ProductType[];
    onList: (id: number) => void
}

const ProductList = (props: ListPro) => {
    const { id } = useParams();
    const getPro = async (id: number) => {
        props.onList(id);
    }
    getPro(id);
    console.log(props.data);

    return (
        <div>
            <main className="mt-[10px]">
                <div className="max-w-[1440px] mx-auto">
                    <div className="w-[1440px] py-[10px] flex border-b-2 border-[#f2f2f2]">
                        <div className="mx-2 text-[#5d5f6c]">
                            <i className="fa fa-angle-left" aria-hidden="true" />
                        </div>
                        <div className="text-yellow-500">
                            <a href="/" className="text-yellow-500 font-semibold">Quay lại trang</a>
                        </div>
                        <div className="mx-2 text-[#5d5f6c]">
                            <i className="fa fa-angle-right" aria-hidden="true" />
                        </div>
                        <div className="text-yellow-500 font-semibold">
                        </div>
                    </div>
                    <div className="my-[20px]">
                        <div className="grid grid-cols-5 gap-8">
                            {props.data && props.data.map((item, index) => {
                                return <div className="border p-3">
                                    <a href="/products/${posts.id}">
                                        <img src={item.img} className="w-[250px] h-[250px]" />
                                    </a>
                                    <h3 className="my-3"><a href="/products/${posts.id}" className="font-semibold text-lg">${'{'}posts.name{'}'}</a></h3>
                                    <p className="text-[red] font-semibold text-[16px]">${'{'}posts.price.toLocaleString("vi-VN", {'{'} style: "currency", currency: "VND" {'}'}){'}'}</p>
                                </div>
                            })}
                        </div>
                    </div>
                </div>
            </main>
        </div>

    )
}

export default ProductList