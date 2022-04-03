import React from 'react'
import { Link } from 'react-router-dom'
import { ProductType } from '../../../types/product'

type ListPro = {
    data: ProductType[];
    onRemove: (id: number) => void
}

const ListPro = (props: ListPro) => {
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
                                        <input type="text" name="keyword" className="form-control" placeholder="Tìm kiếm..." aria-describedby="helpId" />
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
                                {props.data && props.data.map((item, index) => {
                                    return <tr key={index}>
                                        <td>{index + 1}</td>
                                        <td>{item.name}</td>
                                        <td><img src={item.img} alt="" width={250} height={150} /></td>
                                        <td>{item.price}</td>
                                        <td>{item.quantity}</td>
                                        <td>{item.desc}</td>
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