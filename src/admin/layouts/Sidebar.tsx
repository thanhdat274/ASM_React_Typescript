import React from 'react'
import { Link } from 'react-router-dom'

type Props = {}

const Sidebar = (props: Props) => {
    return (
        <div>
            <aside className="main-sidebar sidebar-dark-primary elevation-4">

                <Link to="/" className="brand-link">
                    <img src="../../../src/public/admin/dist/img/AdminLTELogo.png" alt="AdminLTE Logo" className="brand-image img-circle elevation-3" style={{ opacity: '.8' }} />
                    <span className="brand-text font-weight-light">Trang chủ</span>
                </Link>

                <div className="sidebar">
                    <div className="user-panel mt-3 pb-3 mb-3 d-flex">
                        <div className="image">
                            <img src="../../../src/public/admin/dist/img/user2-160x160.jpg" className="img-circle elevation-2" alt="User Image" />
                        </div>
                        <div className="info">
                            <Link to="/admin" className="d-block">ADMIN</Link>
                        </div>
                    </div>
                    
                    <div className="form-inline">
                        <div className="input-group" data-widget="sidebar-search">
                            <input className="form-control form-control-sidebar" type="search" placeholder="Search" aria-label="Search" />
                            <div className="input-group-append">
                                <button className="btn btn-sidebar">
                                    <i className="fas fa-search fa-fw" />
                                </button>
                            </div>
                        </div>
                    </div>

                    <nav className="mt-2">
                        <ul className="nav nav-pills nav-sidebar flex-column" data-widget="treeview" role="menu" data-accordion="false">
                            <li className="nav-item ">
                                <Link to="/admin" className="nav-link ">
                                    <i className="nav-icon fas fa-tachometer-alt" />
                                    <p>
                                        Dashboard
                                    </p>
                                </Link>
                            </li>

                            <li className="nav-item">
                                <Link to="#" className="nav-link">
                                    <i className="fa fa-list-ol" aria-hidden="true" />
                                    <p>
                                        Danh mục
                                        <i className="fas fa-angle-left right" />
                                    </p>
                                </Link>
                                <ul className="nav nav-treeview">
                                    <li className="nav-item">
                                        <Link to="/admin/category" className="nav-link">
                                            <i className="far fa-circle nav-icon" />
                                            <p>Danh sách</p>
                                        </Link>
                                    </li>
                                    <li className="nav-item">
                                        <Link to="/admin/category/add" className="nav-link">
                                            <i className="far fa-circle nav-icon" />
                                            <p>Tạo mới</p>
                                        </Link>
                                    </li>
                                </ul>
                            </li>

                            <li className="nav-item">
                                <Link to="#" className="nav-link">
                                    <i className="fa fa-truck" aria-hidden="true" />
                                    <p>
                                       Sản phẩm
                                        <i className="fas fa-angle-left right" />
                                    </p>
                                </Link>
                                <ul className="nav nav-treeview">
                                    <li className="nav-item">
                                        <Link to="/admin/product" className="nav-link">
                                            <i className="far fa-circle nav-icon" />
                                            <p>Danh sách</p>
                                        </Link>
                                    </li>
                                    <li className="nav-item">
                                        <Link to="/admin/product/add" className="nav-link">
                                            <i className="far fa-circle nav-icon" />
                                            <p>Tạo mới</p>
                                        </Link>
                                    </li>
                                </ul>
                            </li>

                            <li className="nav-item">
                                <Link to="#" className="nav-link">
                                    <i className="fas fa-user-circle" aria-hidden="true" />
                                    <p>
                                       Tài khoản 
                                        <i className="fas fa-angle-left right" />
                                    </p>
                                </Link>
                                <ul className="nav nav-treeview">
                                    <li className="nav-item">
                                        <Link to="/admin/user" className="nav-link">
                                            <i className="far fa-circle nav-icon" />
                                            <p>Danh sách</p>
                                        </Link>
                                    </li>
                                    <li className="nav-item">
                                        <Link to="/admin/user/add" className="nav-link">
                                            <i className="far fa-circle nav-icon" />
                                            <p>Tạo mới</p>
                                        </Link>
                                    </li>
                                </ul>
                            </li>

                        </ul>
                    </nav>
                </div>
            </aside>
        </div>
    )
}

export default Sidebar