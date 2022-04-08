import React from 'react'
import { Link } from 'react-router-dom'
import { ProductType } from '../../../types/product'
import { useState } from 'react';

type ListPro = {
    data: ProductType[];
    onRemove: (id: number) => void
}

const ListPro = (props: ListPro) => {
    const [fillter, setfillter] = useState("");

    const handleSearch = (event) => {
        const value = event.target.value;
        setfillter(value);
    };
    return (
        <div className="row">
            <div className="col-12">
                <div className="card">
                    <div className="card-header">
                        <h2 className="card-title uppercase">Danh sách sản phẩm</h2><br /><br />
                        <form>
                            <div className="row">
                                <div className="col-6">
                                    <div className="form-group">
                                        <input type="text" name="keyword" className="form-control" placeholder="Tìm kiếm..." onChange={handleSearch} value={fillter} />
                                    </div>
                                </div>
                            </div>
                        </form>
                    </div>
                    <div className="card-body">
                        <table className="table tabl-stripped">
                            <thead className='uppercase'>
                                <tr>
                                    <th>ID</th>
                                    <th>Tên sản phẩm</th>
                                    <th>Hình ảnh</th>
                                    <th>Giá sản phẩm</th>
                                    <th>Số lượng sản phẩm</th>
                                    <th>Mô tả sản phẩm</th>
                                    <th colSpan={2}>Action</th>
                                    <th>
                                        <Link to="/admin/product/add" className="btn btn-sm btn-success">Tạo mới</Link>
                                    </th>
                                </tr>
                            </thead>
                            <tbody>
                                {props.data && props.data.filter((val)=>{
                                    if(fillter ==""){
                                        return val
                                    }else if (val.name.toLocaleLowerCase().includes(fillter.toLowerCase())) {
                                        return val;
                                    }
                                }).map((item, index) => {
                                    return <tr key={index}>
                                        <td>{index + 1}</td>
                                        <td>{item.name}</td>
                                        <td><img src={item.img} alt="" width={250} height={150} /></td>
                                        <td>{item.price.toLocaleString("vi-VN", { style: "currency", currency: "VND" })}</td>
                                        <td>{item.quantity.toLocaleString()}</td>
                                        <td>
                                            <textarea rows={8} cols={100} className="shadow-sm focus:ring-indigo-500 focus:border-indigo-500 mt-1 block w-full sm:text-sm border border-gray-300 rounded-md" >{item.desc}</textarea>
                                        </td>
                                        <td>
                                            <Link to={`/admin/product/${item._id}/edit`} className="btn btn-sm btn-info">
                                                <i className="fas fa-edit" />
                                            </Link>
                                            <button onClick={() => props.onRemove(item._id)} className="btn btn-sm btn-danger"><i className="fas fa-trash" /></button>
                                        </td>
                                    </tr>
                                })}
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ListPro