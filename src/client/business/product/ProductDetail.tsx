import React from 'react'
import { Link, useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { ProductType } from '../../../types/product';
import { listOnePro } from '../../../api/products';



const ProductDetail = ({ data2 }) => {
    console.log(data2);

    const { id } = useParams();
    const [product, setProduct] = useState<ProductType>()
    useEffect(() => {
        const getProduct = async () => {
            const { data } = await listOnePro(id);
            console.log(data);
            setProduct(data)
        }
        getProduct();
    }, [id]);
    return (
        <div>
            <main className="my-[20px]">
                <div className="w-[1440px] h-auto mx-auto">
                    <div className="w-[1080px] h-auto mx-auto">
                        <div className="w-[1080px] py-[10px] flex border-b-2 border-[#f2f2f2]">
                            <div className="text-yellow-500">
                                <Link to="/" className="text-yellow-500 font-semibold">Trang chủ</Link>
                            </div>
                            <div className="mx-2 text-[#5d5f6c]">
                                <i className="fa fa-angle-right" aria-hidden="true" />
                            </div>
                            <div className="text-yellow-500 font-semibold">
                                Chi tiết sản phẩm
                            </div>
                            <div className="mx-2 text-[#5d5f6c]">
                                <i className="fa fa-angle-right" aria-hidden="true" />
                            </div>
                            <div className="text-yellow-500 font-semibold">
                                {product?.name}
                            </div>
                        </div>
                        <div className="w-[1080px] h-auto flex justify-between mt-[20px]">
                            <div className="w-[500px] h-[500px] mr-[20px] border">
                                <div>
                                    <img src={product?.img} className="w-[500px] h-[500px]" />
                                </div>
                            </div>
                            <div className="w-[460px]">
                                <div className="text-[30px] font-semibold mb-3 w-[460px]">
                                    {product?.name}
                                </div>
                                <div className="text-[#51545f] mb-[20px] w-[460px]">
                                    <h1 className="text-[21px] font-semibold">Thông tin chung:</h1>
                                    <div className="font-medium text-[16px] break-words mt-[10px]">{product?.short_desc}</div>
                                </div>
                                <div className="text-[#fe4c50] font-semibold text-2xl mb-5">
                                    {product?.price.toLocaleString("vi-VN", { style: "currency", currency: "VND" })}
                                </div>
                                <div className="flex">
                                    <div className="text-[#1e1e27] mt-1">
                                        Số lượng:
                                    </div>
                                    <div className="mx-3 border h-[40px] w-[120px] flex justify-around">
                                        <input type="number" id="inputValue" defaultValue={1} className="w-10 text-center mx-2" />
                                    </div>
                                </div>
                                <div className="mt-8">
                                    <button data-id="${data.id}" id="btnAddToCart" className="bg-orange-400 h-10 w-44 rounded-sm text-white">Thêm vào giỏ hàng</button>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="w-[1080px] h-auto mx-auto ">
                        <div className="text-[#5d5f6c] text-2xl font-medium mt-[50px] uppercase border-b-2 border-[#f2f2f2]">
                            thông tin chi tiết sản phẩm
                        </div>
                        <div className="w-[1080px] my-[20px]">
                            {product?.desc}
                        </div>
                    </div>
                    <div className="w-[1080px] h-auto mx-auto">
                        <div className="text-[#5d5f6c] text-2xl font-medium mt-14 uppercase border-b-2 border-[#f2f2f2]">
                            Sản phẩm liên quan
                        </div>
                        <div className="w-[1080px] my-[20px]">
                            <div className="my-[20px]">
                                <div className="grid grid-cols-4 gap-8">
                                    {data2 && data2.map((item, index) => {
                                        if (item.categoryId === product?.categoryId) {
                                            return <div key={index} className="border p-3">
                                                <Link to={`/product/${item._id}`}>
                                                    <img src={item.img} className="w-[250px] h-[250px]" />
                                                </Link>
                                                <h3 className="my-3"><Link to={`/product/${item._id}`} className="font-semibold text-lg">{item.name}</Link></h3>
                                                <p className="text-[red] font-semibold text-[16px]">{item.price.toLocaleString("vi-VN", { style: "currency", currency: "VND" })}</p>
                                            </div>
                                        }

                                    })}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </main>
        </div>
    )
}

export default ProductDetail