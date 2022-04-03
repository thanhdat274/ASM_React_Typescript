import React from 'react'
import { Link, useNavigate } from 'react-router-dom';
import { UserType } from '../../../types/user'
import { useForm, SubmitHandler } from 'react-hook-form';
import toastr from 'toastr'
import "toastr/build/toastr.min.css";
import axios from 'axios';
import { useState } from 'react';

type UserAddProps = {
  onAdd: (use: UserType) => void
}

type FormValues = {
  _id: number,
  name: string,
  email: string,
  password: string,
  phone: string,
  address: string,
  img: string,
  role: number
}

const AddUser = (props: UserAddProps) => {
  const { register, handleSubmit, watch, formState: { errors } } = useForm<FormValues>();
  const navigate = useNavigate();
  const [image, setImage] = useState("");
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
    props.onAdd(data)
    toastr.success("Thêm mới thành công, chuyển trang sau 2s");
    setTimeout(() => {
      navigate('/admin/user')
    }, 2000);

  }
  return (
    <div className="row">
      <div className="col-12">
        <div className="card">
          <div className="card-header">
            <h4 className="card-title-m-0">THÊM MỚI TÀI KHOẢN KHÁCH HÀNG</h4>
          </div>
          <div className="card-body">
            <form onSubmit={handleSubmit(onSubmit)} encType="multipart/form-data">
              <div className="row">
                <div className="col-sm-6">
                  <div className="form-group">
                    <label>ID</label>
                    <input type="text" className="form-control" name="id" disabled />
                  </div>
                </div>
                <div className="col-sm-6">
                  <div className="form-group">
                    <label>EMAIL <span style={{ color: 'red' }}>*</span> </label>
                    <input type="email" className="form-control" placeholder="Nhập email....." {...register('email')} />
                  </div>
                </div>
              </div>
              <div className="row">
                <div className="col-sm-6">
                  <div className="form-group">
                    <label>MẬT KHẨU <span style={{ color: 'red' }}>*</span> </label>
                    <input type="password" className="form-control" placeholder="Nhập mật khẩu....." {...register('password')} />
                  </div>
                </div>
                <div className="col-sm-6">
                  <div className="form-group">
                    <label>HỌ VÀ TÊN <span style={{ color: 'red' }}>*</span> </label>
                    <input type="text" className="form-control" placeholder="Nhập họ và tên....." {...register('name')} />
                  </div>
                </div>
              </div>
              <div className="row">
                <div className="col-sm-6">
                  <div className="form-group">
                    <label>ĐỊA CHỈ <span style={{ color: 'red' }}>*</span> </label>
                    <input type="text" className="form-control" placeholder="Nhập địa chỉ....." {...register('address')} />
                  </div>
                </div>
                <div className="col-sm-6">
                  <div className="form-group">
                    <label>SỐ ĐIỆN THOẠI <span style={{ color: 'red' }}>*</span> </label>
                    <input type="phone" className="form-control" placeholder="Nhập số điện thoại....." {...register('phone')} />
                  </div>
                </div>
              </div>
              <div className="row">
                <div className="col-sm-6">
                  <div className="form-group">
                    <label>HÌNH ẢNH <span style={{ color: 'red' }}>*</span> </label>
                    <div className="form-control">
                      <input type="file" onChange={(e) => { setImage(e.target.files[0]) }} placeholder="Nhập hình ảnh....." />
                    </div>
                  </div>
                </div>
                <div className="col-sm-6">
                  <div className="form-group">
                    <label>Danh mục</label>
                    <select className="form-control" {...register('role')}>
                      <option value={0}>Khách hàng</option>
                      <option value={1}>Nhân viên</option>
                    </select>
                  </div>
                </div>
              </div>
              <br />
              <div className="d-flex justify-content-end">
                <Link to="/admin/user" className="btn btn-sm btn-danger">Hủy</Link>
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

export default AddUser