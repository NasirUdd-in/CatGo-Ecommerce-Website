import React from "react";
import { Card, Col, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import "./SingleProductCard.css";

const SingleProductCard = ({ detail }) => {
  return (
    <Col>
      <Card
        className="shadow-lg mb-5 border border-warning rounded"
        data-aos="fade-up"
        data-aos-duration="1500"
      >
        <div className="overflow-hidden">
          <Card.Img
            variant="top"
            src={detail?.img}
            id="cardimg"
            className="mh-50 img-fluid"
          />
        </div>
        <Card.Body>
          <div className="d-flex justify-content-between">
            <Card.Title className="abril-font fw-semi-bold">
              {detail.title}
            </Card.Title>
            <h4 className="text-warning fw-bolder">${detail.price}</h4>
          </div>
          <Card.Text className="text-cyan fw-semi-bold">
            {detail.description}
          </Card.Text>
        </Card.Body>
        <Card.Footer className="d-flex justify-content-center">
          <Link to={`products/${detail?._id}`}>
            <Button className="btn-warning  py-2 px-4 shadow-none">
              Buy Now
            </Button>
          </Link>
        </Card.Footer>
      </Card>
    </Col>
  );
};

export default SingleProductCard;
