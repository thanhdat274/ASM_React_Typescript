import React, { useEffect } from 'react'
import { CategoryType } from '../../../types/category';
import { useForm, SubmitHandler } from "react-hook-form";
import { Link, useNavigate, useParams } from 'react-router-dom';
import { listOneCate } from '../../../api/category';
import toastr from 'toastr'
import "toastr/build/toastr.min.css";

type CateAddProps = {
    onUpdate: (cate: CategoryType) => void
}
type FromValues = {
    name: string,
    price: number
};

const EditCate = (props: CateAddProps) => {
    const {id} = useParams();
    const { register, handleSubmit, formState: { errors }, reset } = useForm<FromValues>();
    const navigate = useNavigate();

    useEffect(()=>{
        const getCate = async()=>{
            const {data} = await listOneCate(id);
            reset(data);
        }
        getCate();
    },[])

    const onSubmit: SubmitHandler<FromValues> = data => {
        props.onUpdate(data);
        toastr.success("Cập nhật thành công, chuyển trang sau 2s");
        setTimeout(() => {
            navigate('/admin/category')
        }, 2000);
    }
    return (
        <div className="row">
            <div className="col-12">
                <div className="card">
                    <div className="card-header">
                        <h3 className="card-title m-0">CẬP NHẬT DANH MỤC</h3>
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
                                        <label>Tên sản phẩm<span style={{ color: 'red' }}>*</span> </label>
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

export default EditCate