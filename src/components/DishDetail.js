import { Card, CardImg, CardImgOverlay, CardTitle } from 'reactstrap';

function DishDetail({ dish, onClick }) {
  return (
    dish && (
      <Card onClick={onClick}>
        <CardImg width="100%" src={dish.image} alt={dish.name} />
        <CardImgOverlay>
          <CardTitle>{dish.name}</CardTitle>
        </CardImgOverlay>
      </Card>
    )
  );
}

export default DishDetail;
