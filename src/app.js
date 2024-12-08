import React, { useEffect, useState } from "react";
import ReactDOM from "react-dom/client";
import Header from "./components/Header";
import Body from "./components/Body";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import About from "./components/About";
import ContactUs from "./components/contactus";
import Error from "./components/error";
import RestaurantMenu from "./components/RestaurantMenu";
import UserContext from "./utilis/UserContext";
import { Provider } from "react-redux";
import appStore from "./utilis/appStore";
import Cart from "./components/Cart";

const AppLayout = () => {
  const [userName, setUserName] = useState("");

  //authentication
  useEffect(() => {
    //Make an API call and send username and password
    const data = {
      name: "Trisha Mishra",
    };
    setUserName(data.name);
  });
  return (
    <Provider store={appStore}>
      <UserContext.Provider value={{ loggedInUser: userName, setUserName }}>
        <div className="app">
          <Header />
          <Outlet />
        </div>
      </UserContext.Provider>
    </Provider>
  );
};

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout />,
    children: [
      {
        path: "/",
        element: <Body />,
      },
      {
        path: "/about",
        element: <About />,
      },
      {
        path: "/contact",
        element: <ContactUs />,
      },
      {
        path: "/restaurants/:resId", //colon resID means this part of the url is dynmic
        element: <RestaurantMenu />,
      },
      {
        path: "/cart" ,
        element: <Cart/>
      }
    ],
    errorElement: <Error />,
  },
]);
// Rendering the App
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={appRouter} />);
