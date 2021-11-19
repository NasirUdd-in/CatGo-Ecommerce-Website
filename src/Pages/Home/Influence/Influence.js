import React from "react";
import { Container, Row, Button } from "react-bootstrap";
import { Link } from "react-router-dom";

const Influence = () => {
  return (
    <section className="py-5 my-5">
      <Container>
        <Row>
          <div
            className="col-12 col-md-6"
            data-aos="fade-right"
            data-aos-duration="1500"
          >
            <img
              src="https://i.ibb.co/pxx2k4R/1-GFWzed-M1-Ke-Cry7-e-IRm-M4w.jpg"
              alt="about in home"
              className="img-fluid border border-warning rounded"
            />
          </div>
          <div
            className="col-12 col-md-6 d-flex flex-wrap align-items-center"
            style={{ minHeight: "100%" }}
          >
            <div data-aos="fade-left" data-aos-duration="1500">
              <h2 className="abril-font mb-3 display-1">
                Cats Are Your Real Best Friend.
              </h2>
              <p className="text-secondary mb-3">
                Cat considers that aflatoxin levels in cat and cat food above 20
                ppb will support a charge of adulteration… because of the
                reasonable possibility that a regular As of August 9, the FDA is
                aware of more than 130 pet deaths and more than 220 pet
                illnesses that may be linked to eating brands of pet food above
                20 ppb will support a charge of adulteration… because of the
                reasonable possibility that a regular.
              </p>
              <Link to="/products">
                <Button className="btn-warning p-3 ms-3 ms-lg-0 text-white fw-bold">
                  Buy Foods For Your Cat
                </Button>
              </Link>
            </div>
          </div>
        </Row>
      </Container>
    </section>
  );
};

export default Influence;
