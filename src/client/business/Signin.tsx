import React from 'react'
import { useForm, SubmitHandler } from 'react-hook-form';
import { Link, useNavigate } from 'react-router-dom';
import toastr from 'toastr'
import "toastr/build/toastr.min.css";
import { signin } from '../../api/user';
import { authenticate } from '../../utils/localStorage';

type FormValues = {
  name: string,
  email: string,
  password: string
};

const Signin = () => {
  const { register, handleSubmit, formState: { errors } } = useForm<FormValues>();
  const navigate = useNavigate();
  const onSubmit: SubmitHandler<FormValues> = async (data) => {
    try {
      const { data: user } = await signin(data);
      toastr.success("Đăng nhập tài khoản thành công, chuyển sang trang chủ sau 2s");
      setTimeout(() => {
        authenticate(user, () => navigate('/'))
      }, 2000);
    } catch (error) {
      toastr.error("Tên tài khoản hoặc mật khẩu không đúng!");
    }

  }
  return (
    <div>
      <main className="mt-[10px]">
        <div className="min-h-full flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8 my-[10px]">
          <div className="max-w-md w-full space-y-8">
            <div>
              <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900 uppercase">đăng nhập</h2>
              <p className="mt-2 text-center text-sm text-gray-600" />
            </div>
            <form className="space-y-6" onSubmit={handleSubmit(onSubmit)} data-sb-form-api-token="API_TOKEN">
              <div className="mt-4">
                <label className="block" htmlFor="email">Địa chỉ email <span className="text-red-500">*</span></label>
                <input type="text" className="w-full px-4 py-2 mt-2 border rounded-md focus:outline-none focus:ring-1 focus:ring-blue-600" {...register('email')} />
              </div>
              <div className="mt-4">
                <label className="block">Mật khẩu <span className="text-red-500">*</span></label>
                <input type="password" className="w-full px-4 py-2 mt-2 border rounded-md focus:outline-none focus:ring-1 focus:ring-blue-600" {...register('password')} />
              </div>
              <div className="flex items-center justify-between">
                <div className="flex items-start">
                  <div className="flex items-center h-5">
                    <input type="checkbox" className="focus:ring-indigo-500 h-4 w-4 text-indigo-600 border-gray-300 rounded" />
                  </div>
                  <div className="ml-3 text-sm">
                    <label htmlFor="comments" className="text-gray-500 cursor-pointer">Remember me</label>
                  </div>
                </div>
                <Link to="/forgetPass" className="text-sm text-blue-600 hover:underline">Forgot Password?</Link>
              </div>
              <div>
                <button className="w-full px-4 py-2 font-medium text-center text-white transition-colors duration-200 rounded-md bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-1 dark:focus:ring-offset-darker">
                  Đăng nhập
                </button>
              </div>
            </form>
            <div className="flex items-center justify-center space-x-2 flex-nowrap">
              <span className="w-20 h-px bg-gray-300" />
              <span>OR</span>
              <span className="w-20 h-px bg-gray-300" />
            </div>
            <div className="grid grid-cols-3 gap-3 text-xl">
              <div className="border-2 rounded-md p-3 text-center cursor-pointer hover:bg-indigo-100 ">
                <Link to="#">  <i className="fab fa-google" /></Link>
              </div>
              <div className="border-2 rounded-md p-3 text-center cursor-pointer hover:bg-indigo-100">
                <i className="fab fa-linkedin" />
              </div>
              <div className="border-2 rounded-md p-3 text-center cursor-pointer hover:bg-indigo-100">
                <i className="fab fa-github" />
              </div>
            </div>
            <div className="text-gray-600 dark:text-gray-400">Bạn chưa có tài khoản? <Link to="/signup" className="text-blue-600 hover:underline">Đăng ký</Link></div>
          </div>
        </div>
      </main>

    </div>
  )
}

export default Signin