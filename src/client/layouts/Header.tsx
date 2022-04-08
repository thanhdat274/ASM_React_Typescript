import React from 'react'
import { Link, useNavigate } from 'react-router-dom';
import { CategoryType } from '../../types/category';
import { isAuthenticate } from '../../utils/localStorage';
const { user } = isAuthenticate();

type ListCate = {
  data: CategoryType[];
}

const Header = (props: ListCate) => {
  // const navigate = useNavigate();
  const logout = () => {
    localStorage.removeItem("user");
    window.location.reload();
  }
  return (
    <div>
      <div className="bg-white h-[50px] mb-[10px]">
        <div className="max-w-[1440px] mx-auto text-[15px] leading-[20px]">
          <div className="grid grid-cols-3 gap-5 mt-4 mb-4">
            <div className="grid grid-cols-2 mx-auto">
              <p className="mr-[10px]">Bạn đang xem giá, tồn kho tại</p>
              <div className="location-dropdown">
                <div className="location-dropdown-title">
                  <select className="location_name border-none bg-none text-[#c6992f]">
                    <option value={1} selected className="bg-[#c69a39] text-[#fff]">Hà Nội</option>
                    <option value={2} className="bg-[#c69a39] text-[#fff]">Hồ Chí Minh</option>
                    <option value={3} className="bg-[#c69a39] text-[#fff]">Đà Nẵng</option>
                  </select>
                </div>
                <div className="location-dropdown-list hidden">
                </div>
              </div>
            </div>
            <div className="grid grid-cols-1 text-center">
              <p>Hotline: <span className="text-[#f1aa0c]">HN: 0969.120.120 - SG: 0965.123.123 - ĐN:
                096.123.9797 - CSKH Online
                037.462.9999 - 096.539.7966</span></p>
            </div>
            <div className="grid grid-cols-1 mx-auto">
              {user ? <ul className="flex menu-item">
                <li className="flex items-center group"><Link to={'#'}>Xin chao <span className="block py-3 px-4">{user.name}</span></Link>
                  <div className="grid grid-cols-3 p-[10px] absolute bg-gray-200 border opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300">
                    <ul className="sub-menu-item">
                      <li className="sub-menu-item"><Link to={`/user/${user._id}`}>Thông tin cá nhân</Link></li>
                      {user.role === 1 ? <li className="sub-menu-item"><Link to={`/admin`}>Trang quản trị</Link></li> : ''}
                    </ul>
                  </div>
                </li>
                <li><Link to={`/`} className="block py-3 px-4" onClick={() => { logout() }} >logout</Link></li>
              </ul> : <ul className="flex">
                <li className="mx-4"><Link to="/signup">Đăng ký</Link></li>
                <li className="mx-4 text-[#f1aa0c]"><Link to={'#'}>|</Link></li>
                <li className="mx-4"><Link to="/signin">Đăng nhập</Link></li>
              </ul>}
            </div>
          </div>
        </div>
      </div>
      <div className="bg-[#c69a39] h-[100px]">
        <div className="max-w-[1440px] mx-auto">
          <div className="grid grid-cols-3">
            <div className="my-[15px]">
              <Link to="/">
                <img src="../../../src/public/image/NTĐ (3).png" className="w-[70px] h-[70px] mx-auto" />
              </Link>
            </div>
            <div className="h-[35px] my-[35px] bg-white">
              <form method="get">
                <input type="text" className="w-[450px] h-[35px] pl-[10px]" name="keyword" id="keyword" autoComplete="off" placeholder="Tìm kiếm sản phẩm ..." />
                <button type="submit" className="btn-search">
                  <i className="fas fa-search" />
                </button>
              </form>
            </div>
            <div className="my-auto mx-auto">
              <Link to="/cart" className="flex">
                <i className="fas fa-shopping-cart text-[35px] mr-[10px]" />
                <p className="text-[20px]">Cart</p>
                <div className="shopee-cart-number-badge"></div>
              </Link>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-[#daab47] h-[50px]">
        <div className="max-w-[1440px] mx-auto">
          <div className="flex justify-center">
            <nav className="">
              <ul className="flex h-[50px] py-2">
                <li><Link to="/" className="menu-item">Trang chủ</Link></li>
                {props.data && props.data.map((item, index) => {
                  return <li key={index}><Link to={`/category/${item._id}`} className="menu-item">{item.name}</Link></li>
                })}
                <li><Link to="/blog" className="menu-item">Tin tức công nghệ</Link></li>
                <li><Link to="/" className="menu-item">Liên hệ</Link></li>
              </ul>
            </nav>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Header