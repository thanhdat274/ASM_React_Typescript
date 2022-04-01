import { useEffect, useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Route, Routes } from "react-router-dom";
import axios from "axios";
import "./public/client/style.css"
import AdminLayout from "./admin/layouts/AdminLayout";
import Dashboard from "./admin/business/Dashboard";
import WebsiteLayout from "./client/layouts/WebsiteLayout";
import Home from "./client/business/Home";
import ListCate from "./admin/business/categroy/ListCate";
import { add, listCate, remove, update } from "./api/category";
import { CategoryType } from "./types/category";
import AddCate from "./admin/business/categroy/AddCate";
import EditCate from "./admin/business/categroy/EditCate";

function App() {
  // Phần hàm xử lý của client

  // ---------------------------------------------

  // phần hàm sử lý của admin
  // phần category của admin
  const [category, setCategory] = useState<CategoryType[]>([]);
  useEffect(() => {
    const getCate = async () => {
      const { data } = await listCate();
      setCategory(data);
    };
    getCate();
  }, []);
  const removeCate = async (id: number) => {
    const {data} = await remove(id);
    if (data) {
      setCategory(category.filter(item => item._id !== id));
    }
  };
  const addCate = async (cate: CategoryType) => {
    const { data } = await add(cate);
    setCategory([...category, data]);
  };
  const updateCate = async (cate: CategoryType) =>{
    const {data} = await update(cate)
    setCategory(category.map(item => item._id == data._id ? data : item));
  }
  // ---------------------------------------------

  // ---------------------------------------------

  return (
    <>
      <Routes>
        <Route path="/" element={<WebsiteLayout />}>
          <Route index element={<Home />} />
        </Route>

        <Route path="/admin" element={<AdminLayout />}>
          <Route index element={<Dashboard />} />
          <Route path="category">
            <Route index element={<ListCate data={category} onRemove={removeCate} />} />
            <Route path="add" element={<AddCate  onAdd={addCate}/>} />
            <Route path=":id/edit" element={<EditCate onUpdate={updateCate}  />} />
          </Route>
        </Route>
      </Routes>
    </>
  );
}

export default App;
