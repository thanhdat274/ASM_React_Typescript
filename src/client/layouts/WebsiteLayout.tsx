import React from "react";
import { Outlet } from "react-router-dom";
import Footer from "./Footer";
import Header from "./Header";
import { useState, useEffect } from 'react';
import { CategoryType } from "../../types/category";
import { listCate } from "../../api/category";


const WebsiteLayout = () => {
  const [category, setCategory] = useState<CategoryType[]>([]);
  useEffect(() => {
    const getCate = async () => {
      const { data } = await listCate();
      setCategory(data);
    };
    getCate();
  }, []);

  return (
    <div className="max-w-full mx-auto">
      <header>
        <Header data={category} />
      </header>

      <Outlet />

      <footer>
        <Footer />
      </footer>
    </div>
  );
};

export default WebsiteLayout;
