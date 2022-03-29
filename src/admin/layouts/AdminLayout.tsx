import React from 'react'
import { Link, Outlet } from 'react-router-dom'
import Header from './Header'
import Sidebar from './Sidebar'

type Props = {}

const AdminLayout = (props: Props) => {
  return (
        <div className="wrapper">
            <div className="preloader flex-column justify-content-center align-items-center">
                <img className="animation__shake" src="../../../src/public/admin/dist/img/AdminLTELogo.png" alt="AdminLTELogo" height={60} width={60} />
            </div>
            <Header/>
            <Sidebar/>
            <div className="content-wrapper">
                <div className="content-header">
                    <div className="container-fluid">
                        <div className="row mb-2">
                            <div className="col-sm-6">
                                <h1 className="m-0">Dashboard</h1>
                            </div>
                        </div>
                    </div>
                </div>
                <section className="content">
                    <div className="container-fluid">
                       <Outlet/>
                    </div>
                </section>
            </div>
            <footer className="main-footer">
                <strong>Copyright © 2022 <Link to="#">ASM React-TypeScriptJS By Nguyễn Thành Đạt PH13533</Link>.</strong>
            </footer>
            <aside className="control-sidebar control-sidebar-dark">

            </aside>
        </div>
  )
}

export default AdminLayout