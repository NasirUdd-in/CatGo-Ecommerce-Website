import React, { useEffect, useState } from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import Review from "./Review/Review";
import { Row } from "react-bootstrap";
import './ReviewSection.css'

const Reviews = () => {
  const [reviews, setReviews] = useState([]);

  useEffect(() => {
    fetch("https://salty-dawn-56606.herokuapp.com/review")
      .then((res) => res.json())
      .then((data) => setReviews(data));
  }, []);

  var settings = {
    dots: false,
    infinite: true,
    autoplay: true,
    autoplaySpeed: 2000,
    speed: 3000,
    slidesToShow: 3,
    slidesToScroll: 1,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: false,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  return (
    <section className="mt-5 py-5 mytestimonial" data-aos="fade-up" data-aos-duration="2000">
      <div className="container">
        <Row data-aos="fade-down"
          data-aos-duration="1500">
          <h6 className="text-warning text-center mt-5 pt-5">
            Testimonial
          </h6>
          <h2 className="text-center abril-font">What Our Customer Says</h2>
          <p className="text-center mb-4">
            The Cat Food Advisor's unbiased Cat food reviews and ratings
            searchable by brand or star rating. Find the best dry, canned or raw
            food for your Cat.The Cat Food Advisor's unbiased cat food reviews
            and ratings searchable by brand or star rating. Find the best dry,
            canned or raw food for your Cat.The cat Food Advisor's unbiased Cat food reviews and ratings searchable.
          </p>
        </Row>
        <Slider {...settings}>
          {reviews?.map((review) => (
            <Review key={review._id} review={review}></Review>
          ))}
        </Slider>
      </div>
    </section>
  );
};

export default Reviews;
