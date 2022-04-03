import React from 'react'
import { CategoryType } from '../../../types/category';
import { useForm, SubmitHandler } from "react-hook-form";
import { Link, useNavigate } from 'react-router-dom';
import toastr from 'toastr'
import "toastr/build/toastr.min.css";

type CateAddProps = {
    onAdd: (cate: CategoryType) => void
}
type FromValues = {
    name: string,
    price: number
};

const AddCate = (props: CateAddProps) => {
    const { register, handleSubmit, watch, formState: { errors } } = useForm<FromValues>();
    const navigate = useNavigate();
    const onSubmit: SubmitHandler<FromValues> = data => {
        props.onAdd(data);
        toastr.success("Thêm mới thành công, chuyển trang sau 2s");
        setTimeout(() => {
             navigate('/admin/category')
        }, 2000);
    }
    return (
        <div className="row">
            <div className="col-12">
                <div className="card">
                    <div className="card-header">
                        <h3 className="card-title m-0">THÊM MỚI DANH MỤC</h3>
                    </div>
                    <div className="card-body">
                        <form onSubmit={handleSubmit(onSubmit)}>
                            <div className="row">
                                <div className="col-sm-6">
                                    <div className="form-group">
                                        <label>ID</label>
                                        <input type="text" className="form-control" name="id" disabled />
                                    </div>
                                </div>
                                <div className="col-sm-6">
                                    <div className="form-group">
                                        <label>Tên danh mục <span style={{ color: 'red' }}>*</span> </label>
                                        <input type="text" className="form-control" placeholder="Nhập tên danh mục....."  {...register('name')}/>
                                    </div>
                                </div>
                            </div>
                            <br />
                            <div className="d-flex justify-content-end">
                                <Link to="/admin/category" className="btn btn-sm btn-danger">Hủy</Link>
                                &nbsp;
                                <button className="btn btn-sm btn-primary">Lưu</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default AddCate