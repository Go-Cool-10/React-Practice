import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";

function ProductCard({ product }) {
  return (
    <>
      <div>
        <Card style={{ width: "18rem" }}>
          <Card.Img
            variant="top"
            src={product.image}
            style={{ width: "250px", height: "250px" }}
          />
          <Card.Body>
            <Card.Title>{product.title}</Card.Title>
            <Card.Text>{product.description}</Card.Text>
            <Button variant="primary">Order Now</Button>
          </Card.Body>
        </Card>
      </div>
    </>
  );
}

export default ProductCard;