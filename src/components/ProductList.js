import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import { Container, Row, Col, Card, Button } from "react-bootstrap";

const ProductList = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    axios.get("https://fakestoreapi.com/products")
      .then(response => setProducts(response.data))
      .catch(error => console.log(error));
  }, []);

  return (
    <Container>
      <h1 className="text-center my-4">Product Listing</h1>
      <Row>
        {products.map(product => (
          <Col md={4} lg={3} key={product.id} className="mb-4">
            <Card className="shadow-sm">
              <Card.Img variant="top" src={product.image} style={{ height: "200px", objectFit: "contain" }} />
              <Card.Body>
                <Card.Title>{product.title}</Card.Title>
                <Card.Text>${product.price}</Card.Text>
                <Link to={\`/product/\${product.id}\`}>
                  <Button variant="primary" className="w-100">View Details</Button>
                </Link>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default ProductList;
