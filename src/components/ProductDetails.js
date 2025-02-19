import React, { useState, useEffect } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import { Container, Row, Col, Card, Button } from "react-bootstrap";

const ProductDetails = () => {
  const { id } = useParams();
  const [product, setProduct] = useState(null);

  useEffect(() => {
    axios.get(\`https://fakestoreapi.com/products/\${id}\`)
      .then(response => setProduct(response.data))
      .catch(error => console.log(error));
  }, [id]);

  if (!product) return <h2 className="text-center">Loading...</h2>;

  return (
    <Container>
      <Row className="justify-content-center mt-5">
        <Col md={6}>
          <Card className="shadow-sm p-3">
            <Card.Img variant="top" src={product.image} style={{ height: "300px", objectFit: "contain" }} />
            <Card.Body>
              <Card.Title className="text-center">{product.title}</Card.Title>
              <Card.Text className="text-muted">{product.description}</Card.Text>
              <h3 className="text-center text-danger">${product.price}</h3>
              <Button variant="success" className="w-100 mt-3">Buy Now</Button>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default ProductDetails;
