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
import axios from 'axios';

type ProEditProps = {
    cate: CategoryType[];
    onUpdate: (pro: ProductType) => void
}
type FormValues = {
    _id: number,
    name: string,
    price: number,
    quantity: number,
    img: string,
    desc: string,
    short_desc: string,
    categoryId: number
}

const EditPro = (props: ProEditProps) => {
    const { id } = useParams();
    const { register, handleSubmit, formState: { errors }, reset } = useForm<FormValues>();
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

    useEffect(() => {
        const getPro = async () => {
            const { data } = await listOnePro(id)
            reset(data);
        }
        getPro();
    }, [])
    const onSubmit: SubmitHandler<FormValues> = async (data) => {
        try {
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
            props.onUpdate(data);
            toastr.success("Cập nhật thành công, chuyển trang sau 2s");
            setTimeout(() => {
                navigate('/admin/product')
            }, 2000);
        } catch (error) {
            toastr.error("Cập nhật không thành công!!");
        }
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
                                        <input type="text" className="form-control" placeholder="Nhập tên sản phẩm....."  {...register('name', { required: true, minLength: 5 })} />
                                        {errors.name && errors.name.type === 'required' && <span style={{ color: 'red' }}>Không dược để trống!</span>}
                                        {errors.name && errors.name.type === 'minLength' && <span style={{ color: 'red' }}>Ít nhất 5 kí tự</span>}
                                    </div>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-sm-6">
                                    <div className="form-group">
                                        <label>Danh mục <span style={{ color: 'red' }}>*</span></label>
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
                                        <input type="text" className="form-control" placeholder="Nhập giá....." {...register('price', { required: true, minLength: 5 })} />
                                        {errors.price && errors.price.type === 'required' && <span style={{ color: 'red' }}>Không dược để trống!</span>}
                                        {errors.price && errors.price.type === 'minLength' && <span style={{ color: 'red' }}>Ít nhất 5 kí tự</span>}
                                    </div>
                                </div>
                            </div>

                            <div className="row">
                                <div className="col-sm-6">
                                    <div className="form-group">
                                        <label>Số lượng <span style={{ color: 'red' }}>*</span> </label>
                                        <input type="text" className="form-control" {...register('quantity', { required: true, minLength: 5 })} />
                                        {errors.quantity && errors.quantity.type === 'required' && <span style={{ color: 'red' }}>Không dược để trống!</span>}
                                        {errors.quantity && errors.quantity.type === 'minLength' && <span style={{ color: 'red' }}>Ít nhất 5 kí tự</span>}
                                    </div>
                                </div>
                                <div className="col-sm-6">
                                    <div className="form-group">
                                        <label>Hình ảnh <span style={{ color: 'red' }}>*</span> </label>
                                        <input type="file" className="form-control" onChange={(e) => { setImage(e.target.files[0]) }} />
                                    </div>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-sm-6">
                                    <div className="form-group">
                                        <label>Mô tả ngắn <span style={{ color: 'red' }}>*</span></label>
                                        <textarea className="form-control" rows={4} placeholder="Mô tả sản phẩm..." defaultValue={""} {...register('short_desc', { required: true, minLength: 5 })} />
                                        {errors.short_desc && errors.short_desc.type === 'required' && <span style={{ color: 'red' }}>Không dược để trống!</span>}
                                        {errors.short_desc && errors.short_desc.type === 'minLength' && <span style={{ color: 'red' }}>Ít nhất 5 kí tự</span>}
                                    </div>
                                </div>
                                <div className="col-sm-6">
                                    <div className="form-group">
                                        <label>MÔ TẢ <span style={{ color: 'red' }}>*</span></label>
                                        <textarea className="form-control" rows={4} placeholder="Mô tả sản phẩm..." defaultValue={""} {...register('desc', { required: true, minLength: 5 })} />
                                        {errors.desc && errors.desc.type === 'required' && <span style={{ color: 'red' }}>Không dược để trống!</span>}
                                        {errors.desc && errors.desc.type === 'minLength' && <span style={{ color: 'red' }}>Ít nhất 5 kí tự</span>}
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