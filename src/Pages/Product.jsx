import React, { useContext } from 'react';
import { ShopContext } from '../Context/ShopContext';
import { useParams } from 'react-router-dom';
import { BreadCrum } from '../Component/BreadCrum/BreadCrum';
import { ProductDisplay } from '../Component/ProductDisplay/ProductDisplay';
import { ProductDesc } from '../Component/ProductDesc/ProductDesc';

export const Product = () => {
  const {products} = useContext(ShopContext);
  const {productId} = useParams();

  const product = products.find((e)=>e.id === Number(productId));
  return (
    <div>
      <BreadCrum product={product}/>
      <ProductDisplay product={product}/>
      <ProductDesc/>
    </div>
  )
}

