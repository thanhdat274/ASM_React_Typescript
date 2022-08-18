import React, { useRef } from 'react'
import { Link } from 'react-router-dom';
import { CategoryType } from '../../../types/category'
import { useState } from 'react';

type ListCate = {
    data: CategoryType[];
    onRemove: (id: string) => void;
}

const ListCate = (props: ListCate) => {
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
                        <h2 className="card-title uppercase">Danh sách danh mục</h2><br /><br />
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
                            <thead>
                                <tr>
                                    <th>ID</th>
                                    <th>Danh mục</th>
                                    <th colSpan={2}>Action</th>
                                    <th>
                                        <Link to="/admin/category/add" className="btn btn-sm btn-success">Tạo mới</Link>
                                    </th>
                                </tr>
                            </thead>
                            <tbody>
                                {props.data && props.data.filter((val) => {
                                    if (fillter == "") {
                                        return val;
                                    } else if (val.name.toLocaleLowerCase().includes(fillter.toLowerCase())) {
                                        return val;
                                    }
                                }).map((item, index) => {
                                    return <tr key={index}>
                                        <td>{index + 1}</td>
                                        <td>{item.name}</td>
                                        <td>
                                            <Link to={`/admin/category/${item._id}/edit`} className="btn btn-sm btn-info">
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

export default ListCate