import React, { useEffect } from "react";
import { Container, Row, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import Footer from "../../Common/commonComponents/Footer";
import Header from "../../Common/commonComponents/Header";
import ScrollToTop from "../../Common/commonComponents/ScrollToTop";
import './About.css'

const About = () => {
  useEffect(() => {
    document.title = "Catgo | About";
  }, []);

  return (
    <section id="about-us-container">
      <ScrollToTop></ScrollToTop>
      <Header></Header>

      <section className="py-5">
        <Container>
          <Row>
            <div className="col-12 col-md-8" data-aos="fade-right"
              data-aos-duration="1500">
              <img src="https://i.ibb.co/kMZG9MP/photo-1493101561740-e745892775b2.jpg" alt="about in home" className="img-fluid" />
            </div>
            <div
              className="col-12 col-md-4 d-flex flex-wrap align-items-center"
              style={{ minHeight: "100%" }}
            >
              <div data-aos="fade-left"
                data-aos-duration="1500">
                <h2 className="abril-font mb-3 display-2">
                  Best Cat Food Provider
                </h2>
                <p className="text-secondary mb-3">
                  CatSportmix biscuit treats are on the list of cat food brands to avoid because it is made of unwanted dry leftovers and includes preservatives Sportmix biscuit treats are on the list of cat food brands to avoid because.
                </p>
                <Link to="/products">
                  <Button className="btn-warning p-3 ms-3 ms-lg-0 text-white fw-bold shadow-none">
                    See Our Products
                  </Button>
                </Link>
              </div>
            </div>
          </Row>
        </Container>
      </section>
      <Footer></Footer>
    </section>
  );
};

export default About;
