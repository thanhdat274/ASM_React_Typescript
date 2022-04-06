import React from 'react'
import { Link } from 'react-router-dom'

type CartProps = {

}

const ProductInfor = ({data},props: CartProps) => {
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
                                {data.name}
                            </div>
                        </div>
                        <div className="w-[1080px] h-auto flex justify-between mt-[20px]">
                            <div className="w-[500px] h-[500px] mr-[20px] border">
                                <div>
                                    <img src={data.img} className="w-[500px] h-[500px]" />
                                </div>
                            </div>
                            <div className="w-[460px]">
                                <div className="text-[30px] font-semibold mb-3 w-[460px]">
                                    {data.name}
                                </div>
                                <div className="text-[#51545f] mb-[20px] w-[460px]">
                                    <h1 className="text-[21px] font-medium">Thông tin chung:</h1>
                                    <div className="font-medium text-[16px] break-words">{data.desc}</div>
                                </div>
                                <div className="text-[#fe4c50] font-semibold text-2xl mb-5">
                                    {data.price}
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
                            {data.desc}
                        </div>
                    </div>
                    <div className="w-[1080px] h-auto mx-auto">
                        <div className="text-[#5d5f6c] text-2xl font-medium mt-14 uppercase border-b-2 border-[#f2f2f2]">
                            Sản phẩm liên quan
                        </div>
                        <div className="w-[1080px] my-[20px]">
                            <div className="my-[20px]">
                                <div className="grid grid-cols-4 gap-8">
                                    ${'{'}data2.data.slice(0, 8).map((item) =&gt; {'{'}
                                    if (item.categoryProductId === data.categoryProductId) {'{'}
                                    return `
                                    <div className="border p-3">
                                        <a href="/products/${item.id}">
                                            <img src="${item.img}" className="w-[250px] h-[250px]" />
                                        </a>
                                        <h3 className="my-3"><a href="/products/${item.id}" className="font-semibold text-lg ">${'{'}item.name{'}'}</a></h3>
                                        <p className="text-[red] font-semibold text-[16px]">${'{'}item.price.toLocaleString("vi-VN", {'{'} style: "currency", currency: "VND" {'}'}){'}'}</p>
                                    </div>
                                    `;
                                    {'}'}
                                    {'}'}).join(""){'}'}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </main>
        </div>
    )
}

export default ProductInfor