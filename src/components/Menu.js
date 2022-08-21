import { useEffect, useState } from 'react';
import {
  Card,
  CardBody,
  CardImg,
  CardImgOverlay,
  CardText,
  CardTitle,
} from 'reactstrap';

function Menu(props) {
  const [dishes, setDishes] = useState([]);
  const [dishDetail, setDishDetail] = useState({});
  useEffect(() => {
    setDishes(props.dishes);

    return () => {
      setDishes([]);
    };
  }, [props.dishes]);

  const handleClickDish = (dish) => {
    setDishDetail(dish);
  };

  const menu =
    dishes.length > 0 &&
    dishes.map((dish) => (
      <div key={dish.id} className="col-12 col-lg-12 col-md-6 mt-5">
        <Card onClick={() => handleClickDish(dish)}>
          <CardImg width="100%" src={dish.image} alt={dish.name} />
          <CardImgOverlay>
            <CardTitle>{dish.name}</CardTitle>
          </CardImgOverlay>
        </Card>
      </div>
    ));

  const renderDish = () => {
    return (
      Object.entries(dishDetail).length !== 0 && (
        <Card>
          <CardImg top src={dishDetail.image} alt={dishDetail.name} />
          <CardBody>
            <CardTitle>{dishDetail.name}</CardTitle>
            <CardText>{dishDetail.description}</CardText>
          </CardBody>
        </Card>
      )
    );
  };

  return (
    <div className="container">
      <div className="row">{menu}</div>

      <div className="row">
        <div className="col-12 m-1">{renderDish()}</div>
      </div>
    </div>
  );
}

export default Menu;
