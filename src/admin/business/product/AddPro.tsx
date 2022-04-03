import React from 'react'
import { ProductType } from '../../../types/product'
import { useForm, SubmitHandler } from 'react-hook-form';
import { useNavigate, Link } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { listCate } from '../../../api/category';
import { CategoryType } from '../../../types/category';
import toastr from 'toastr'
import "toastr/build/toastr.min.css";
import axios from 'axios';

type ProAddProps = {
    cate: CategoryType[];
    onAdd: (pro: ProductType) => void
}
type FormValues = {
    _id: number,
    name: string,
    price: number,
    quantity: number,
    img: string,
    desc: string,
    categoryId: number
}
const AddPro = (props: ProAddProps) => {
    const { register, handleSubmit, watch, formState: { errors } } = useForm<FormValues>();
    const navigate = useNavigate();
    const [image, setImage] = useState("");
    const [category, setCategory] = useState<CategoryType[]>([]);
    useEffect(() => {
        const getCate = async () => {
            const { data: cate } = await listCate();
            setCategory(cate);
        };
        getCate();
    }, []);
    const onSubmit: SubmitHandler<FormValues> = async (data) => {
        const CLOUDINARY_PRESET_KEY = "js8yqruv";
        const CLOUDINARY_API_URL = "https://api.cloudinary.com/v1_1/dvj4wwihv/image/upload";

        if (image) {
            const formData = new FormData();
            formData.append("file", image);
            formData.append("upload_preset", CLOUDINARY_PRESET_KEY);
            const img = await axios.post(CLOUDINARY_API_URL, formData, {
                headers: {
                    "Content-Type": "application/form-data",
                },
            });
            data.img = img.data.url;
        }
        props.onAdd(data);
        toastr.success("Thêm mới thành công, chuyển trang sau 2s");
        setTimeout(() => {
            navigate('/admin/product')
        }, 2000);

    }
    return (
        <div className="row">
            <div className="col-12">
                <div className="card">
                    <div className="card-header">
                        <h3 className="card-title m-0">THÊM MỚI SẢN PHẨM</h3>
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
                                        <label>Hình ảnh <span style={{ color: 'red' }}>*</span> </label>
                                        <input type="file" className="form-control"  onChange={(e) => { setImage(e.target.files[0]) }}  />
                                    </div>
                                </div>
                            </div>
                            <div className="row">
                                <div className="form-group">
                                    <label>MÔ TẢ <span style={{ color: 'red' }}>*</span></label>
                                    <textarea className="form-control" rows={6} placeholder="Mô tả sản phẩm..." defaultValue={""} {...register('desc')} />
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

export default AddPro