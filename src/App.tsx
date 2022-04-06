import { useEffect, useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Route, Routes, useParams } from "react-router-dom";
import axios from "axios";
import './public/client/style.css'
import AdminLayout from "./admin/layouts/AdminLayout";
import Dashboard from "./admin/business/Dashboard";
import WebsiteLayout from "./client/layouts/WebsiteLayout";
import Home from "./client/business/Home";
import ListCate from "./admin/business/categroy/ListCate";
import { add, listCate, remove, update } from './api/category';
import { CategoryType } from "./types/category";
import AddCate from "./admin/business/categroy/AddCate";
import EditCate from "./admin/business/categroy/EditCate";
import { ProductType } from "./types/product";
import { addPro, deletePro, listPro, updatePro, listCateAndPro, listOnePro } from './api/products';
import ListPro from "./admin/business/product/ListPro";
import AddPro from "./admin/business/product/AddPro";
import EditPro from "./admin/business/product/EditPro";
import ListUser from "./admin/business/user/ListUser";
import { addUser, deleteUser, listUser, updateUser } from './api/user';
import { UserType } from './types/user';
import AddUser from "./admin/business/user/AddUser";
import EditUser from './admin/business/user/EditUser';
import Signup from "./client/business/Signup";
import Signin from "./client/business/Signin";
import PrivateRouter from "./admin/layouts/PrivateRouter";
import ProductList from "./client/business/product/ProductList";
import ProductDetail from "./client/business/product/ProductDetail";

function App() {
  const [category, setCategory] = useState<CategoryType[]>([]);
  const [product, setProduct] = useState<ProductType[]>([]);
  const [pro, setPro] = useState([]);
  const [user, setUser] = useState<UserType[]>([]);

  // Phần hàm xử lý của client
  useEffect(() => {
    const ListProduct = async () => {
      const { data } = await listPro()
      setPro(data);
      console.log(data);
    }
    ListProduct();
  },[])
  const ListCateAndPro = async (id: number) => {
    const { data } = await listCateAndPro(id)
    setPro(data.product);
    console.log(data);
  }
  const ListProDetail = async (id: number) => {
    const { data } = await listOnePro(id)
    setPro(data);
    console.log(data);
  }

  // ---------------------------------------------

  // phần hàm sử lý của admin
  // phần category của admin
  useEffect(() => {
    const getCate = async () => {
      const { data } = await listCate();
      setCategory(data);
    };
    getCate();
  }, []);
  const removeCate = async (id: number) => {
    const confirm = window.confirm("Bạn có chắc chắn không??");
    if (confirm) {
      const { data } = await remove(id);
      if (data) {
        setCategory(category.filter(item => item._id !== id));
      }
    }
  };
  const addCate = async (cate: CategoryType) => {
    const { data } = await add(cate);
    setCategory([...category, data]);
  };
  const updateCate = async (cate: CategoryType) => {
    const { data } = await update(cate)
    setCategory(category.map(item => item._id == data._id ? data : item));
  }
  // ---------------------------------------------

  // phần product của admin
  // const [product, setProduct] = useState<ProductType[]>([]);
  useEffect(() => {
    const getPro = async () => {
      const { data } = await listPro();
      setProduct(data);
    };
    getPro();
  }, []);
  const removePro = async (id: number) => {
    const confirm = window.confirm("Bạn có chắc chắn không??");
    if (confirm) {
      const { data } = await deletePro(id);
      if (data) {
        setProduct(product.filter(item => item._id !== id));
      }
    }
  };
  const ProAdd = async (pro: ProductType) => {
    const { data } = await addPro(pro);
    setProduct([...product, data]);
  };
  const UpdatePro = async (pro: ProductType) => {
    const { data } = await updatePro(pro)
    setProduct(product.map(item => item._id == data._id ? data : item));
  }
  // ---------------------------------------------

  // phần user của admin
  useEffect(() => {
    const getUser = async () => {
      const { data } = await listUser();
      setUser(data);
    };
    getUser();
  }, []);
  const removeUser = async (id: number) => {
    const confirm = window.confirm("Bạn có chắc chắn không??");
    if (confirm) {
      const { data } = await deleteUser(id);
      if (data) {
        setUser(user.filter(item => item._id !== id));
      }
    }
  };
  const UserAdd = async (use: UserType) => {
    const { data } = await addUser(use);
    setUser([...user, data]);
  };
  const UpdateUser = async (use: UserType) => {
    const { data } = await updateUser(use)
    setUser(user.map(item => item._id == data._id ? data : item));
  }
  // ---------------------------------------------

  // ---------------------------------------------

  return (
    <>
      <Routes>
        <Route path="/" element={<WebsiteLayout />}>
          <Route index element={<Home data={product} />} />
          <Route path="signup" element={<Signup />} />
          <Route path="signin" element={<Signin />} />
          <Route path="category/:id" element={<ProductList data={pro} onList={ListCateAndPro} />} />
          <Route path="product/:id" element={<ProductDetail data={pro} onListDetail={ListProDetail} />} />
        </Route>

        <Route path="/admin" element={<PrivateRouter><AdminLayout /></PrivateRouter>}>
          <Route index element={<Dashboard />} />
          <Route path="category">
            <Route index element={<ListCate data={category} onRemove={removeCate} />} />
            <Route path="add" element={<AddCate onAdd={addCate} />} />
            <Route path=":id/edit" element={<EditCate onUpdate={updateCate} />} />
          </Route>

          <Route path="product">
            <Route index element={<ListPro data={product} onRemove={removePro} />} />
            <Route path="add" element={<AddPro cate={category} onAdd={ProAdd} />} />
            <Route path=":id/edit" element={<EditPro cate={category} onUpdate={UpdatePro} />} />
          </Route>

          <Route path="user">
            <Route index element={<ListUser data={user} onRemove={removeUser} />} />
            <Route path="add" element={<AddUser onAdd={UserAdd} />} />
            <Route path=":id/edit" element={<EditUser onUpdate={UpdateUser} />} />
          </Route>
        </Route>
      </Routes>
    </>
  );
}

export default App;
