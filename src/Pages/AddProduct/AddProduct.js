import React from "react";
import { Col, Container, Form, Row, Button } from "react-bootstrap";
import { useForm } from "react-hook-form";
import { useHistory } from "react-router-dom";
import Swal from 'sweetalert2'

const AddProduct = () => {

  const history = useHistory();
  const redirect_uri = "/dashboard/manageProduct";
  //react hook form
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    data.description = 'Includes Dehydrated chicken protein, chicken fat, rice,  maize, whey powder, hydrolysed bagasse fibre, dried antarctic kril';

    fetch('https://salty-dawn-56606.herokuapp.com/addproduct', {
      method: 'POST',
      headers: {
        'content-type': 'application/json'
      },
      body: JSON.stringify(data)
    })
      .then(res => res.json())
      .then(data => {
        if (data.insertedId) {
          Swal.fire(
            'Product Added Successfully !'
          )
          history.push(redirect_uri)
        }
      })
  };

  return (
    <Container style={{ minHeight: '100vh', padding: '0px' }}>
      <Row>
        <div className="col-12 col-md-10 col-lg-8 mx-auto">
          <div className="form-container py-5">
            <Form
              onSubmit={handleSubmit(onSubmit)}
              className="shadow-lg px-3 px-md-5 py-3 text-cyan"
            >
              <h2 className="mb-2 text-center abril-font">
                Add A New Product !
              </h2>
              <p className="text-cyan text-center mb-5">Currently we are allowing only admins to add products to our database</p>

              <Row className="mb-3">
                <Form.Group as={Col} controlId="formGridProduct">
                  <Form.Label>Product Title</Form.Label>
                  <Form.Control
                    placeholder="Cat Food"
                    required
                    className="text-secondary fw-semi-bold"
                    {...register("title", { required: true })}
                    {...(errors.title && <span>Title is required</span>)}
                  />
                </Form.Group>
                <Form.Group as={Col} controlId="formGridPrice">
                  <Form.Label> Product Price</Form.Label>
                  <Form.Control
                    required
                    placeholder="50"
                    className="text-secondary fw-semi-bold"
                    {...register("price", { required: true })}
                    {...(errors.price && <span>price is required</span>)}
                  />
                </Form.Group>
              </Row>
              <Row>
                <Form.Group as={Col} controlId="formGridImage">
                  <Form.Label>
                    Photo URL
                  </Form.Label>
                  <Form.Control
                    defaultValue="https://i.ibb.co/pxx2k4R/1-GFWzed-M1-Ke-Cry7-e-IRm-M4w.jpg"
                    className="text-secondary fw-semi-bold mb-5"
                    required
                    {...register("img")}
                    {...(errors.img && <span>PhotoURL is required</span>)}
                  />
                </Form.Group>
              </Row>
              <Button
                type="submit"
                className="px-3 py-2 fw-bold btn-warning shadow-none"
              >
                <i className="fas fa-clipboard-check text-dark me-2"></i>
                Add Product
              </Button>
            </Form>
          </div>
        </div>
      </Row>
    </Container>
  );
};

export default AddProduct;
