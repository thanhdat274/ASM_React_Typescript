// import { useEffect, useState } from 'react'
// import logo from './logo.svg'
// import './App.css'
// import { Route, Routes } from 'react-router-dom'
// import { ProductType } from './types/products'
// import ListProducts from './pages/ListProducts'
// import axios from 'axios'
// import AddProduct from './pages/AddProduct'

// function App() {
//   const [products, setProducts] = useState<ProductType[]>([])

//   useEffect(()=>{
//     const getProduct = async ()=>{
//       const { data } = await axios.get('http://localhost:3001/products');
//       setProducts(data);
//     }
//     getProduct()
//   },[])

//   const onHandleRemove =(id?: number)=>{
//     axios.delete('http://localhost:3001/products/'+id);
//     setProducts(products.filter(item=> item.id !== id));
//   }

//   const onHandleAdd = async (product: ProductType)=>{
//    const { data } = await axios.post('http://localhost:3001/products', product);
//    setProducts([...products, data])
//   }
//   return (
//     <div>
//       <Routes>
//         <Route path='/' element={<ListProducts data={products} onRemove={onHandleRemove}/>}/>
//         <Route path='/add' element={<AddProduct onRemove={onHandleAdd}/>}/>
//       </Routes>
//     </div>
//   )
// }

// export default App
