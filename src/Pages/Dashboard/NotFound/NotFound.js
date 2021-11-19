import React from "react";
import { Container, Row, Button } from "react-bootstrap";
import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <Container>
      <Row>
        <div className="col-12 col-md-10 col-lg-8 mx-auto text-center">
          <div className="error-container">
            <img
              src="https://i.ibb.co/2gqjXDd/Pu-Xip-AW3-AXUz-UJ4u-Yyx-PKC-1200-80.jpg"
              alt="404"
              className="img-fluid notfoundimg"
            />
            <h6 className="text-warning">Sorry Cat Lover,</h6>
            <h1 className="text-danger m-0">404! Page Not Found !!</h1>
            <Link to="/dashboard">
              <Button className="btn-warning p-3 fw-semi-bold mb-5 mt-3 text-white shadow-none">
                Go Back to DashBoard
              </Button>
            </Link>
          </div>
        </div>
      </Row>
    </Container>
  );
};

export default NotFound;
