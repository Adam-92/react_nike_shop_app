import React, { useState } from "react";
//Import history from router
import { useHistory } from "react-router-dom";
//Import icons
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faUserCircle,
  faCartArrowDown,
} from "@fortawesome/free-solid-svg-icons";
//Import components
import ShoesContainer from "../components/ShoesContainer";
import Cart from "../components/Cart";
import Error from "./Error";
//Import global context
import { useGlobalContext } from "../context/Context";

//Main Shopping Page - after success login
const ShoppingPage = () => {
  const { setOpenCart, cart, currentUser, logout, data, error, setError} = useGlobalContext();
  
  //Logout button show/hide 
  const [logOutBtn, setLogOutBtn] = useState(false);
  //Create history for switching the route to login page if logout clicked
  const history = useHistory();

  //Logut function and redirect to login
  const handleLogut = async () => {
    try {
      await logout();
      history.push("/login");
    } catch (err) {
      setError({ ...error, logout: err });
    }
  };

  if (error.fetch) {
    return <Error text="Sorry but there is an issue, please try later..." />;
  }

  return (
    <main className="container-shoppingPage">
      <article className="content-shoppingPage">
        <nav className="nav-shoppingPage">
          <header className="header-shoppingPage">
            <div className="icon-shoppingPage">
              <FontAwesomeIcon
                icon={faUserCircle}
                className="icon-profile-shoppingPage"
                onClick={() => setLogOutBtn(!logOutBtn)}
              />
              {logOutBtn && (
                <div className="profile-shoppingPage">
                  <button onClick={handleLogut}>LOG OUT</button>
                </div>
              )}
            </div>
            <p className="welcome-shoppingPage">
              Welcome {currentUser.displayName}!
            </p>
            <div
              className="cart-shoppingPage"
              onClick={() => setOpenCart(true)}
            >
              <FontAwesomeIcon
                icon={faCartArrowDown}
                className="icon-cart-shoppingPage"
              />
              <p className="shoesInCart-shoppingPage">{cart.length}</p>
            </div>
          </header>
        </nav>
        <ShoesContainer shoes={data} />
        <Cart />
        {error.logut && (
          <div style={{ margin: "1em", color: "red" }}>
            <span>{error.logut}</span>
          </div>
        )}
      </article>
    </main>
  );
};

export default ShoppingPage;
