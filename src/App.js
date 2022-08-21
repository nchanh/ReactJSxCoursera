import logo from './logo.svg';
import './App.css';
import { Navbar, NavbarBrand } from 'reactstrap';
import Menu from './components/Menu';
import { useEffect, useState } from 'react';
import { DISHES } from './shared/dishes';

function App() {
  const [dishes, setDishes] = useState([]);

  useEffect(() => {
    setDishes(DISHES);
  }, []);

  return (
    <div>
      <Navbar className="my-2" color="dark" dark>
        <NavbarBrand href="/">
          <img
            alt="logo"
            src={logo}
            style={{
              height: 40,
              width: 40,
            }}
          />
          Reactstrap
        </NavbarBrand>
      </Navbar>
      {dishes.length > 0 && <Menu dishes={dishes} />}
    </div>
  );
}

export default App;
