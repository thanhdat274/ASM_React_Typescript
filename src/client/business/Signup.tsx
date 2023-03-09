import React from 'react'
import { useForm, SubmitHandler } from 'react-hook-form';
import { Link, useNavigate } from 'react-router-dom';
import toastr from 'toastr'
import "toastr/build/toastr.min.css";
import { signup } from '../../api/user';

type FormValues = {
    name: string,
    email: string,
    password: string
};

const Signup = () => {
    const { register, handleSubmit, formState: { errors } } = useForm<FormValues>();
    const navigate = useNavigate();
    const onSubmit: SubmitHandler<FormValues> = async (data) => {
        try {
            await signup(data);
            toastr.success("Đăng kí tài khoản thành công, chuyển sang trang đăng nhập sau 2s");
            setTimeout(() => {
                navigate("/signin");
            }, 2000);
        } catch (error) {
            toastr.error("Tên tài khoản đã được đăng kí rồi");
        }
    }
    return (
        <div>
            <main className="mt-[10px]">
                <div className="min-h-full flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8 my-[10px]">
                    <div className="max-w-md w-full space-y-8">
                        <div>
                            <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900 uppercase">đăng ký</h2>
                            <p className="mt-2 text-center text-sm text-gray-600" />
                        </div>
                        <form onSubmit={handleSubmit(onSubmit)}>
                            <div className="mt-4">
                                <div>
                                    <label className="block" htmlFor="Name">Họ và tên <span className="text-red-500">*</span></label>
                                    <input type="text" className="w-full px-4 py-2 mt-2 border rounded-md focus:outline-none focus:ring-1 focus:ring-blue-600" {...register('name', {required: true }) } />
                                </div>
                                <div className="mt-4">
                                    <label className="block" htmlFor="email">Địa chỉ email <span className="text-red-500">*</span></label>
                                    <input type="text" className="w-full px-4 py-2 mt-2 border rounded-md focus:outline-none focus:ring-1 focus:ring-blue-600" {...register('email')}/>
                                </div>
                                <div className="mt-4">
                                    <label className="block">Mật khẩu <span className="text-red-500">*</span></label>
                                    <input type="password" className="w-full px-4 py-2 mt-2 border rounded-md focus:outline-none focus:ring-1 focus:ring-blue-600" {...register('password')} />
                                </div>
                                <div className="flex mt-[20px]">
                                    <button className="w-full px-6 py-2 mt-4 text-white bg-blue-600 rounded-lg hover:bg-blue-600">Đăng ký</button>
                                </div>
                                <div className="mt-6 text-grey-dark">Bạn đã có tài khoản? <Link className="text-blue-600 hover:underline" to="/signin">Đăng nhập</Link></div>
                            </div>
                        </form>
                    </div>
                </div>
            </main>
        </div>
    )
}

export default Signup