import RestaurantCard from "./RestaurantCard";
import resDataArray from "../utilis/mockdata";
import { useState, useEffect, useContext } from "react";
import axios from "axios";
import useOnlineStatus from "../utilis/useOnlineStatus";
import UserContext from "../utilis/UserContext";
import { Link } from "react-router-dom";
const Body = () => {
  const [ListOfRestaurants, setListOfRestaurants] = useState(resDataArray); // Initialize with mock data directly
  const [filteredRestaurant, setFilteredRestaurant] = useState(resDataArray);
  const [searchText, setsearchText] = useState("");

  console.log("body rendered");

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const data = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=22.057437&lng=78.9381729&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
    );

    const json = await data.json();
    console.log(json);

    setListOfRestaurants(
      json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );
    setFilteredRestaurant(
      json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );
  };

  const handleSearch = () => {
    const filtered = ListOfRestaurants.filter((restaurant) =>
      restaurant.info.name.toLowerCase().includes(searchText.toLowerCase())
    );
    setFilteredRestaurant(filtered);
  };

  const handleTopRatedFilter = () => {
    const topRated = ListOfRestaurants.filter((res) => res.info.avgRating > 4);
    setFilteredRestaurant(topRated);
  };

  const onlineStatus = useOnlineStatus();

  if (onlineStatus === false)
    return (
      <h1>
        Looks like you're offline!! please check your internet connection!!
      </h1>
    );
  const { setUserName, loggedInUser } = useContext(UserContext);

  return (
    <div className="body bg-green-50">
      <div className="filter flex">
        <div className="search m-4 p-4 flex flex-wrap">
          <input
            type="text"
            className="border border-solid border-black-100 bg-gray-100"
            value={searchText}
            onChange={(e) => setsearchText(e.target.value)}
          />
          <button
            className="search px-4 bg-slate-400 m-4 rounded-lg flex"
            onClick={handleSearch}
          >
            <img
              src="https://cdn-icons-png.flaticon.com/128/751/751463.png"
              className="mx-2 my-1 h-5 w-5"
            />
          </button>
        </div>
        <div className="m-4 p-4 flex items-center">
          <button
            className="px-4 bg-slate-400 rounded-lg flex"
            onClick={handleTopRatedFilter}
          >
            Filter{" "}
            <img
              src="https://cdn2.iconfinder.com/data/icons/designers-and-developers-icon-set/32/filter_text_Z-A-64.png"
              className=" mx-2 my-1 w-5 h-4"
            />
          </button>
        </div>
        <div className="m-4 p-4 flex items-center">
          <label>UserName </label>
          <input
            className="border border-black p-2"
            value={loggedInUser}
            onChange={(e) => setUserName(e.target.value)}
          />
        </div>
      </div>
      <div className="res-container flex flex-wrap rounded-md">
        {filteredRestaurant.map((restaurant) => (
          <Link
            key={restaurant.info.id}
            to={"/restaurants/" + restaurant.info.id}
          >
            <RestaurantCard resData={restaurant} />
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Body;
