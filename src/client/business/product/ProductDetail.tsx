import React from 'react'
import { Link, useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { ProductType } from '../../../types/product';
import { listOnePro } from '../../../api/products';
import ProductInfor from './ProductInfor';

type Props = {

}

const ProductDetail = (props: Props) => {
    const { id } = useParams();
    const [pro, setPro] = useState<ProductType[]>([]);
    useEffect(() => {
        const getPro = async () => {
            const { data } = await listOnePro(id);
            setPro(data)
        }
        getPro();
    }, [id])
    return (
        <div>
            {pro && <ProductInfor data={pro}/>}
        </div>
    )
}

export default ProductDetail