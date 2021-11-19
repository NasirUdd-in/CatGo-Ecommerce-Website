import React from "react";
import { Container, Row } from "react-bootstrap";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div>
      <section className="footer">
        <Container fluid>
          <Row>
            <div className="footer py-5  bg-dark d-flex flex-wrap justify-content-around">
              <div className="col-12 col-md-3 text-center">
                {/* Social Icons */}
                <div className="social-links mb-3">
                  <h6 className="text-white ms-2">Catgo is social</h6>
                  <a
                    rel="noopener noreferrer"
                    href="https://facebook.com/"
                    target="_blank"
                    className="text-warning"
                  >
                    <i className="fab fa-facebook text-primary me-4"></i>
                  </a>
                  <a
                    rel="noopener noreferrer"
                    href="https://twitter.com/"
                    target="_blank"
                    className="text-warning"
                  >
                    <i className="fab fa-twitter text-info me-4"></i>
                  </a>
                  <a
                    rel="noopener noreferrer"
                    href="https://youtube.com"
                    target="_blank"
                    className="text-warning"
                  >
                    <i className="fab fa-youtube text-danger me-4"></i>
                  </a>
                  <a
                    rel="noopener noreferrer"
                    href="https://vimeo.com/"
                    target="_blank"
                    className="text-warning"
                  >
                    <i className="fab fa-vimeo-v text-info"></i>
                  </a>
                </div>
              </div>
              {/* Footer text */}
              <div className="col-12 col-md-3 text-center mb-3">
                <div className="terms">
                  <h6 className="text-white">
                    With vegetables and rice. Many owners like to feed a raw meat
                    diet to their Catsand while this can suit some cats very
                    well, there are some important considerations you need to be
                    aware of.
                  </h6>
                </div>
              </div>
              {/* Copyright */}
              <div className="col-12 col-md-3 text-center">
                <div className="copyright">
                  <h6 className="text-white mt-2">
                    All rights reserved by Catgo - 2022 &trade;
                  </h6>
                  <h6 className="text-white mt-2">
                    Developed
                    by
                    Nasir Uddin.
                  </h6>
                </div>
              </div>
              {/* Quick Links */}
              <div className="col-12 col-md-3 text-center my-3 my-lg-0">
                <div className="terms">
                  <h6 className="text-white">
                    Quick Links:
                    <ul className="list-unstyled">
                      <li className="my-2">
                        <Link
                          to="/"
                          className="text-decoration-none text-warning fw-semi-bold"
                        >
                          Home
                        </Link>
                      </li>
                      <li className="my-2">
                        <Link
                          to="/products"
                          className="text-decoration-none text-warning fw-semi-bold"
                        >
                          Products
                        </Link>
                      </li>
                      <Link
                        to="/about"
                        className="text-decoration-none text-warning fw-semi-bold"
                      >
                        About
                      </Link>
                    </ul>
                  </h6>
                </div>
              </div>
            </div>
          </Row>
        </Container>
      </section>
    </div>
  );
};

export default Footer;
