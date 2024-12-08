import { useContext } from "react";
import { CDN_URL } from "../utilis/constants";
import UserContext from "../utilis/UserContext";

const RestaurantCard = (props) => {
  const { resData } = props;
  const { loggedInUser } = useContext(UserContext);

  const { cloudinaryImageId, name, avgRating, cuisines, costForTwo, sla } =
    resData?.info;

  return (
    <div className="m-4 p-4 w-full sm:w-64 h-96 rounded-md bg-gray-200 hover:bg-gray-400 hover:cursor-pointer flex flex-col justify-between">
      <img
        className="res-logo rounded-md h-24 w-full object-cover"
        alt="res-logo"
        src={CDN_URL + cloudinaryImageId}
      />
      <h3 className="font-bold text-xl mt-2">{name}</h3>
      <h4 className="text-gray-700">{cuisines.join(", ")}</h4>
      <h4>{avgRating} stars</h4>
      <h4>{sla?.deliveryTime} minutes</h4>
      <h4> User: {loggedInUser}</h4>
      <h4>{costForTwo}</h4>
    </div>
  );
};

export default RestaurantCard;
