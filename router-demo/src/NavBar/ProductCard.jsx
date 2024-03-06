import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import { Link } from "react-router-dom";

function ProductCard({ image, price, title, id }) {
  return (
    <Card style={{ width: "18rem" }}>
      <Card.Img variant="top"  width="200px" height="200px" src={image} />
      <Card.Body>
        <Card.Title>{title}</Card.Title>
        <Card.Text>{price}</Card.Text>
        <Link to={`/products/${id}`}><Button variant="primary">Go somewhere</Button></Link>
      </Card.Body>
    </Card>
  );
}

export default ProductCard;
