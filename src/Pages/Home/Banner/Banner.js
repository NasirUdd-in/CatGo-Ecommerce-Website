import React from "react";
import { Container, Row, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import "./Banner.css";

const Banner = () => {
  return (
    <section className="banner mb-5">
      <Container>
        <Row>
          <div className="col-12">
            <div
              className="px-lg-5 py-5 py-lg-0 d-flex align-items-center justify-content-between"
              style={{ minHeight: "90vh" }}
            >
              <div
                data-aos="fade-down"
                data-aos-duration="1500"
              >
                <h1 className="text-white display-2 fw-bolder px-2 mb-3 mb-lg-0">
                  Best Food For Your Adorable Cat
                </h1>
                <p className="text-white px-2">
                  Find the latest  cat food nutrition articles,
                  commentary and news covering pet obesity and health, limited
                  ingredient diets, pet food label changesFind the latest cat
                  and cat food nutrition articles, commentary and news covering
                  pet obesity and health, limited ingredient diets.
                </p>
                <Link to="/products">
                  <Button className="btn-warning p-3 ms-3 ms-lg-0 text-white fw-bold">
                    Explore All Products
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </Row>
      </Container>
    </section>
  );
};

export default Banner;
