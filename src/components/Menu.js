import { useEffect, useState } from 'react';
import { Card, CardBody, CardImg, CardText, CardTitle } from 'reactstrap';
import { Comments } from '../shared/comments';
import DishDetail from './DishDetail';

function Menu(props) {
  const [dishes, setDishes] = useState([]);
  const [dishDetail, setDishDetail] = useState({});
  const [comments, setComments] = useState(Comments);
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
      <div key={dish.id} className="col-12 col-lg-6 col-md-6 col-sm-12 mt-5">
        <DishDetail dish={dish} onClick={() => handleClickDish(dish)} />
      </div>
    ));

  const renderDish = () => {
    return (
      Object.entries(dishDetail).length !== 0 && (
        <div className="col-12 col-lg-6 col-md-6 col-sm-12 mt-5">
          <Card>
            <CardImg top src={dishDetail.image} alt={dishDetail.name} />
            <CardBody>
              <CardTitle>{dishDetail.name}</CardTitle>
              <CardText>{dishDetail.description}</CardText>
            </CardBody>
          </Card>
        </div>
      )
    );
  };

  const renderComments = () => (
    <div className="col-12 col-lg-6 col-md-6 col-sm-12 mt-5">
      <h4>Comments</h4>
      {comments.map(
        (comment) =>
          comment.dish_id === dishDetail.id && (
            <div key={comment.id}>
              <p>{comment.content}</p>
              <p>
                --- {comment.author} , {comment.createdAt}
              </p>
            </div>
          )
      )}
    </div>
  );

  return (
    <div className="container">
      <div className="row">
        {menu}
        {renderDish()}
        {renderComments()}
      </div>
    </div>
  );
}

export default Menu;
