import React from "react";
import Card from "react-bootstrap/Card";
import "../Styles.css";

const ProductCard = (props) => (
  <Card className="shadow mb-4 mt-4">
    <Card.Img variant="img-top" src={props.data.picture} className="card-img" />
    <Card.Body className="p-4">
      {props.data.date ? <h6>Design: {props.data.date}</h6> : <span></span>}
      <Card.Title>{props.data.name}</Card.Title>
      <Card.Text className="text-secondary">{props.data.description}</Card.Text>
      <h5>{props.data.price}</h5>
    </Card.Body>
  </Card>
);

export default ProductCard;
