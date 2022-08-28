import React from "react";
import Card from "react-bootstrap/Card";
import "../Styles.css";


const BlogCard = ({data}) => (
  <Card className="shadow mb-4 mt-4 card">
    <Card.Img variant="img-top" src={data.picture} className="card-img rounded-circle p-5" />
    <Card.Body className="p-4">
      <Card.Subtitle className="mb-4 text-danger">Design: <span className="text-secondary">{data.date}</span></Card.Subtitle>
      <Card.Title>{data.name}</Card.Title>
      <Card.Text className="text-secondary pb-5">{data.description}</Card.Text>
      <a className="link-danger text-uppercase text-decoration-none" href="#readmore">Read more</a>
    </Card.Body>
  </Card>
);

export default BlogCard;
