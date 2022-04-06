import React from 'react'
import { useEffect, useState } from 'react';
import { listCateAndPro, listPro } from '../../../api/products';
import { Link, useParams } from 'react-router-dom';
import { ProductType } from '../../../types/product';
import { listCate } from '../../../api/category';
import { CategoryType } from '../../../types/category';
type ListPro = {
    data: ProductType[];
    onList: (id: number) => void
}

const ProductList = (props: ListPro) => {
    const { id } = useParams();
    useEffect(() => {
        const getPro = async () => {
            await props.onList(id);
        }
        getPro();
    }, [id])

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
                            {props.data.name}
                        </div>
                    </div>
                    <div className="my-[20px]">
                        <div className="grid grid-cols-5 gap-8">
                            {props.data.product && props.data.product.map((item, index) => {
                                return <div key={index} className="border p-3">
                                    <Link to={`/product/${item._id}`}>
                                        <img src={item.img} className="w-[250px] h-[250px]" />
                                    </Link>
                                    <h3 className="my-3"><Link to={`/product/${item._id}`} className="font-semibold text-lg">{item.name}</Link></h3>
                                    <p className="text-[red] font-semibold text-[16px]">{item.price.toLocaleString("vi-VN", { style: "currency", currency: "VND" })}</p>
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