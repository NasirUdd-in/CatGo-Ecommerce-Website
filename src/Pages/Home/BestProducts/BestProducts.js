import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import { Container, Row, Button, Spinner } from "react-bootstrap";
import { Link } from "react-router-dom";
import SingleProductCard from "../../Products/SingleProductCard/SingleProductCard";

const BestProducts = () => {
  const [productDetails, setProductDetails] = useState([]);

  useEffect(() => {
    fetch("https://salty-dawn-56606.herokuapp.com/products?limit=6")
      .then((res) => res.json())
      .then((data) => setProductDetails(data));
  }, []);

  if (productDetails.length === 0) {
    return (
      <div className="d-flex justify-content-center align-items-center">
        <Spinner animation="border" variant="success" />
      </div>
    );
  }

  return (
    <section
      id="best-products"
      className="py-5 my-5"
      style={{ background: "#F5FBF9" }}
    >
      <Container>
        <Row
          data-aos="fade-down"
          data-aos-easing="linear"
          data-aos-duration="1500"
        >
          <h6 className="text-warning text-center">Best Products</h6>
          <h2 className="text-center abril-font">Our Best Selling Products</h2>
          <p className="text-center">
            The number one best selling cat food is Blue Buffalo with Chicken
            and Rice. The reason for this is that Blue Buffalo food always
            features realThe number one best selling cat food is Blue Buffalo
            with Chicken and Rice. The reason for this is that Blue Buffalo food
            always features realThe number one best selling cat food is Blue
            Buffalo with Chicken and Rice.
          </p>
        </Row>
        <Row xs={1} md={2} lg={3} className="mt-5">
          {productDetails.map((detail) => (
            <SingleProductCard
              key={detail._id}
              detail={detail}
            ></SingleProductCard>
          ))}
        </Row>
        <Row className="mb-5">
          <div className="text-center pt-1 pb-5">
            <Link to="/products">
              <Button className="btn-warning p-3 ms-3 ms-lg-0 text-white fw-bold">
                Explore All Products
              </Button>
            </Link>
          </div>
        </Row>
      </Container>
    </section>
  );
};

export default BestProducts;
