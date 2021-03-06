import React from 'react'
import { Link } from 'react-router-dom'
import { ProductType } from '../../types/product';
import Banner from '../layouts/Banner'

type ListPro = {
  data: ProductType[];
  onListAsc: () => void;
  onListDesc: () => void;
}

const Home = (props: ListPro) => {
  return (
    <div>
      <main className="mt-[10px]">
        <Banner />
        <div className="max-w-[1440px] mx-auto">
          <div className="my-[20px]">
            <h2 className="font-semibold text-2xl uppercase my-[30px] text-center">Tất cả Sản phẩm</h2>
            <div className='flex h-[50px] justify-end'>
              <p>Sắp xếp theo giá</p>
              <ul className='flex'>

                <li className='mx-5'><button onClick={() => { props.onListAsc() }}><i className="fas fa-sort-amount-up-alt"></i>&ensp;Giá thấp đến cao</button></li>
                <li className=''><button onClick={() => { props.onListDesc() }}><i className="fas fa-sort-amount-up"></i>Giá cao đến thấp</button></li>
              </ul>
            </div>

            <div className="grid grid-cols-5 gap-8">
              {props.data && props.data.map((item, index) => {
                return <div key={index} className="border p-3">
                  <Link to={`/product/${item._id}`}>
                    <img src={item.img} className="w-[250px] h-[250px]" />
                  </Link>
                  <h3 className="my-3"><Link to={`/product/${item._id}`} className="font-semibold text-[18px] ">{item.name}</Link></h3>
                  <p className="text-[red] font-semibold text-[17px]">{item.price.toLocaleString("vi-VN", { style: "currency", currency: "VND" })}</p>
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