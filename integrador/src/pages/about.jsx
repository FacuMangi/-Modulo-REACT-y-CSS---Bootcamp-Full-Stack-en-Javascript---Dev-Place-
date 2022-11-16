import React from "react";
import Card from 'react-bootstrap/Card';
import CardGroup from 'react-bootstrap/CardGroup';
import arrayProducts from '../Data/Data';

export function About() {
  return (
    <div className="container">
      <CardGroup>
        <GenerateCards />
      </CardGroup>
    </div>
  )
}

function GenerateCards() {
  return (
    <CardGroup>
      {arrayProducts.map((item) => <ProductCard  price={item.price} img={item.img} description={item.description}/>)}
    </CardGroup>
  );
}

function ProductCard(props) {
  return (
    <Card className="card-item">
      <Card.Img variant="top" src={props.img} />
      <Card.Body>
        <Card.Title>{props.price}</Card.Title>
        <Card.Text>
          {props.description}
        </Card.Text>
      </Card.Body>
    </Card>
  )
}
