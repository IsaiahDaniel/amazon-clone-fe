import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import Card from '../../components/Card/Card';
import Rating from '../../components/Rating/Rating';
import Loading from "../../components/Loading/Loading";

import { useSelector, useDispatch } from "react-redux";
import { getProducts } from '../../features/products/productService';
import { AppDispatch } from "../../app/store";

import "./Home.css";

const Home: React.FC = () => {

  const { products, isSuccess, isError, isLoading } = useSelector((state: any) => state.products);
  const dispatch = useDispatch<any>();

  useEffect(() => {
    dispatch(getProducts());
  }, [products, isSuccess, isError, dispatch]);

  if(products.length <= 0){
    return (
      <h2 className='text-center'>No Products yet.</h2>
    )
  }

  if(isLoading){
    return (
      <Loading />
    )
  }

  return (
    <main className='main'>
        { products.map((product: any) => (
          <Card key={product._id}>
              <img src={product.image} alt={product.name} style={{  height: 330  }} />
              <div className='card__body'>
                <Link to={`product/${product._id}`}>
                  <h3>{product.name}</h3>
                </Link>
                <div>
                  <Rating rating={product.rating} />
                  <p>{product.numReviews} Reviews</p>
                </div>
                <h3>${product.price}</h3>
              </div>
          </Card>
        )) }
    </main>
  )
}

export default Home;