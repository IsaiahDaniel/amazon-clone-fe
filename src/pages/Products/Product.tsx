import React from "react";
import { Link, useParams } from "react-router-dom";
import Card from "../../components/Card/Card";
import Rating from "../../components/Rating/Rating";
import { products } from "../../data/products";
import { BiArrowBack } from "react-icons/bi";

import Button from "../../components/Button/Button";
import { useSelector, useDispatch } from "react-redux";
import "./Product.css";

const Product = () => {
  const { id } = useParams();

  const product = products.find((p) => p._id === id);

  return (
    <div className="container mt-2">
      <Link to={"/"}>
        <Button dark>
          <BiArrowBack /> Back
        </Button>
      </Link>
      <div className="grid-3 mt-2">
        <img src={product?.image} alt={product?.name} />

        <div>
          <ul>
            <li>
              <h2>{product?.name}</h2>
            </li>

            <li style={{ display: "flex", alignItems: "center" }}>
              <span>
                <Rating rating={product?.rating} />
              </span>{" "}
              from {product?.numReviews} Reviews
            </li>
            <li>Price: ${product?.price}</li>
            <li>Description: {product?.description}</li>
            <li>
              images
              <div
                style={{ width: 70, border: "2px solid #f8f8f8", padding: 10 }}
              >
                <img src={product?.image} alt={product?.name} />
              </div>
            </li>
          </ul>
        </div>

        <div>
          <Card>
            {/* style={{ background: "red" }} */}
            <ul style={{ padding: 10 }}>
              <li
                style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "space-between",
                }}
              >
                <div>
                  <h3>Price:</h3>
                </div>
                <div>${product?.price}</div>
              </li>
              <li
                style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "space-between",
                }}
              >
                <div>Status: </div>
                <div>
                  {product?.countInStock === 0 ? "Unavailable" : "Available"}
                </div>
              </li>
              <br />

              <Button primary isDisabled={product?.countInStock === 0 ? true : false}>Add To Cart</Button>
            </ul>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default Product;
