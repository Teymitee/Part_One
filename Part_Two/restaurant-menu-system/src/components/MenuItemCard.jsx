import React from "react";
import Card from "react-bootstrap/Card";

export const MenuItemCard = ({ data, handleDeleteItem }) => {

  const deleteItem = _ => handleDeleteItem(data)

  return (
    <Card className="shadow col-lg-4">
      <Card.Img variant="top" src={data.image} className="card-img" />
      <Card.Body className="">
        <Card.Title>{data.name}</Card.Title>
        <Card.Text className="text-secondary">{data.description}</Card.Text>
        <h5>&#8358;{data.price}</h5>
        <input type="button" value="Delete" onClick={deleteItem}/>
      </Card.Body>
    </Card>
  );
};
