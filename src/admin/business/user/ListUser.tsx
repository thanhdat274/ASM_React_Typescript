import React from 'react'
import { Link } from 'react-router-dom'
import { UserType } from '../../../types/user';

type ListUser = {
  data: UserType[];
  onRemove: (id: number) => void
}

const ListUser = (props: ListUser) => {
  return (
    <div className="row">
      <div className="col-12">
        <div className="card">
          <div className="card-header">
            <h2 className="card-title">Danh sách danh mục</h2><br /><br />
            <form>
              <div className="row">
                <div className="col-6">
                  <div className="form-group">
                    <input type="text" name="keyword" className="form-control" placeholder="Tìm kiếm..." aria-describedby="helpId" />
                  </div>
                </div>
              </div>
            </form>
          </div>
          <div className="card-body">
            <table className="table tabl-stripped">
              <thead>
                <tr>
                  <th>ID</th>
                  <th>ĐỊA CHỈ EMAIL</th>
                  <th>HỌ VÀ TÊN</th>
                  <th>ĐỊA CHỈ</th>
                  <th>SỐ ĐIỆN THOẠI</th>
                  <th>VAI TRÒ</th>
                  <th colSpan={2}>Action</th>
                  <th>
                    <Link to="/admin/user/add" className="btn btn-sm btn-success">Tạo mới</Link>
                  </th>
                </tr>
              </thead>
              <tbody>
                {props.data && props.data.map((item, index) => {
                  return <tr key={index}>
                    <td>{index + 1}</td>
                    <td>{item.email}</td>
                    <td>{item.name}</td>
                    <td>{item.address}</td>
                    <td>{item.phone}</td>
                    <td>{item.role == 1 ? 'Nhân viên' : 'Khách hàng'}</td>
                    <td>
                      <Link to={`/admin/user/${item._id}/edit`} className="btn btn-sm btn-info">
                        <i className="fas fa-edit" />
                      </Link>
                      <button onClick={() => props.onRemove(item._id)} className="btn btn-sm btn-danger"><i className="fas fa-trash" /></button>
                    </td>
                  </tr>
                })}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ListUser