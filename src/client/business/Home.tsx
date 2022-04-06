import React from 'react'
import { Link } from 'react-router-dom'
import { ProductType } from '../../types/product';
import Banner from '../layouts/Banner'
import { useEffect } from 'react';

type ListPro = {
  data: ProductType[];
  onListPro: () => void
}

const Home = (props: ListPro) => {
  useEffect(() => {
    const getPro = async () => {
      await props.onListPro();
    }
    getPro();
  }, [])
  return (
    <div>
      <main className="mt-[10px]">
        <Banner />
        <div className="max-w-[1440px] mx-auto">
          <div className="my-[20px]">
            <h2 className="font-semibold text-2xl uppercase my-[30px] text-center">Tất cả Sản phẩm</h2>
            <div className="grid grid-cols-5 gap-8">
              {props.data && props.data.map((item, index) => {
                return <div className="border p-3">
                  <Link to={`/product/${item._id}`}>
                    <img src={item.img} className="w-[250px] h-[250px]" />
                  </Link>
                  <h3 className="my-3"><Link to={`/product/${item._id}`} className="font-semibold text-lg ">{item.name}</Link></h3>
                  <p className="text-[red] font-semibold text-[16px]">{item.price}</p>
                </div>
              })}
            </div>
          </div>
        </div>
      </main>
    </div>
  )
}

export default Home