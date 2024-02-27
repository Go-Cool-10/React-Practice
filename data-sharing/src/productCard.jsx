import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";

function ProductCard({ city }) {
  return (
    <>
      <div>
        <Card>
          <Card.Img src={city.image} />
          <Card.Body>
            <Card.Name>{city.name}</Card.Name>
            <Card.Info>{city.info}</Card.Info>
            <Card.Price>{city.price}</Card.Price>
            <Button variant="primary">Go SomeWhere</Button>
          </Card.Body>
        </Card>
      </div>
    </>
  );
}
export default ProductCard;
