import { Media } from 'reactstrap';

function Menu(props) {
  console.log(props);

  const _dishes = props.dishes;
  const menu = _dishes.map((dish) => (
    <div key={dish.id} className="col-12 mt-5">
      <Media tag="li">
        <div className="row">
          <div className="col-2">
            <Media object src={dish.image} alt={dish.name} />
          </div>
          <div className="col-10 text-center">
            <Media heading>{dish.name}</Media>
            <p>{dish.description}</p>
          </div>
        </div>
      </Media>
    </div>
  ));

  return (
    <div className="container">
      <div className="row">
        <Media list>{menu}</Media>
      </div>
    </div>
  );
}

export default Menu;
