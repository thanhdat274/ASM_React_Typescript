import { useEffect, useState } from 'react'
import { Route, Routes } from 'react-router-dom'
import axios from 'axios'
import AdminLayout from './admin/layouts/AdminLayout'
import Dashboard from './admin/business/Dashboard'
import WebsiteLayout from './client/layouts/WebsiteLayout'
import Home from './client/business/Home'

function App() {
  
  return (
    <div>
      <Routes>
        <Route path='/' element={<WebsiteLayout />}>
            <Route index element={<Home />} />
        </Route>
        <Route path='/admin' element={<AdminLayout />}>
            <Route index element={<Dashboard />} />
        </Route>
      </Routes>
    </div>
  )
}

export default App
