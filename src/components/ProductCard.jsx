import React from "react";
import Card from "react-bootstrap/Card";
import "../Styles.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartShopping } from "@fortawesome/free-solid-svg-icons";

const ProductCard = ({data}) => (
  <Card className="shadow mb-4 mt-4">
    <Card.Img variant="img-top" src={data.picture} className="card-img" />
    <Card.Body className="p-4">
      {data.date ? <h6>Design: {data.date}</h6> : <span></span>}
      <Card.Title>{data.name}</Card.Title>
      <Card.Text className="text-secondary">{data.description}</Card.Text>
      <div className="d-flex"><h5>&#8358;{data.price}</h5>
      <FontAwesomeIcon icon={faCartShopping} className="btn btn-danger ms-auto"/>
      </div>
    </Card.Body>
  </Card>
);

export default ProductCard;
