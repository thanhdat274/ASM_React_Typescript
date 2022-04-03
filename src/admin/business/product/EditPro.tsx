import React from 'react'
import { ProductType } from '../../../types/product'
import { useForm, SubmitHandler } from 'react-hook-form';
import { Link, useNavigate, useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { CategoryType } from '../../../types/category';
import { listCate } from '../../../api/category';
import { listOnePro } from '../../../api/products';
import toastr from 'toastr'
import "toastr/build/toastr.min.css";

type ProEditProps = {
    cate: CategoryType[];
    onUpdate: (pro: ProductType)=>void
}
 type FormValues = {
    _id: number,
    name: string,
    price: number,
    quantity: number,
    desc: string
    categoryId: number
 }

const EditPro = (props: ProEditProps) => {
    const {id} = useParams();
    const {register, handleSubmit, formState: {errors} ,reset } = useForm<FormValues>();
    const navigate = useNavigate();
    const [category, setCategory] = useState<CategoryType[]>([]);
    useEffect(() => {
        const getCate = async () => {
            const { data: cate } = await listCate();
            setCategory(cate);
        };
        getCate();
    }, []);

    useEffect(()=>{
        const getPro = async ()=>{
            const {data} = await listOnePro(id)
            reset(data);
        }
        getPro();
    },[])
    const onSubmit: SubmitHandler<FormValues> = data => {
        props.onUpdate(data);
        toastr.success("Cập nhật thành công, chuyển trang sau 2s");
        setTimeout(() => {
            navigate('/admin/product')
        }, 2000);
    }
  return (
    <div className="row">
    <div className="col-12">
        <div className="card">
            <div className="card-header">
                <h3 className="card-title m-0">CẬP NHẬT SẢN PHẨM</h3>
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
                                <label>Tên sản phẩm <span style={{ color: 'red' }}>*</span> </label>
                                <input type="text" className="form-control" placeholder="Nhập tên sản phẩm....."  {...register('name')} />
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-sm-6">
                            <div className="form-group">
                                <label>Danh mục</label>
                                <select className="form-control" {...register('categoryId')}>
                                    {props.cate && props.cate.map(item => {
                                        return (
                                            <option value={item._id}>{item.name}</option>
                                        )
                                    })}
                                </select>
                            </div>
                        </div>
                        <div className="col-sm-6">
                            <div className="form-group">
                                <label> Giá <span style={{ color: 'red' }}>*</span> </label>
                                <input type="text" className="form-control" placeholder="Nhập giá....." {...register('price')} />
                            </div>
                        </div>
                    </div>

                    <div className="row">
                        <div className="col-sm-6">
                            <div className="form-group">
                                <label>Số lượng </label>
                                <input type="text" className="form-control" {...register('quantity')} />
                            </div>
                        </div>
                        <div className="col-sm-6">
                            <div className="form-group">
                                <label>MÔ TẢ <span style={{ color: 'red' }}>*</span></label>
                                <textarea className="form-control" rows={3} placeholder="Mô tả sản phẩm..." defaultValue={""} {...register('desc')}/>
                            </div>
                        </div>
                    </div>

                    <br />
                    <div className="d-flex justify-content-end">
                        <Link to="/admin/product" className="btn btn-sm btn-danger">Hủy</Link>
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

export default EditPro