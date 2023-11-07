import Link from "next/link";
import { PRICE, Cuisine, Location, Review } from "@prisma/client";
import Price from "../../components/Price";
import { calculateReviewRatingAverage } from "../../../utils/calculateReviewRatingAverage";

interface Restaurant {
  id: number;
  name: string;
  slug: string;
  main_image: string;
  price: PRICE;
  location: Location;
  cuisine: Cuisine;
  reviews: Review[];
}

const RestaurantCard = ({ restaurant }: { restaurant: Restaurant }) => {
  const renderRatingString = () => {
    const averageRating = calculateReviewRatingAverage(restaurant.reviews);

    if (averageRating > 4) return "Excellent";
    if (averageRating <= 4 && averageRating > 3) return "Good";
    if (averageRating <= 3 && averageRating > 0) return "Average";
    if (averageRating === 0) return "No reviews yet";
  };

  return (
    <div className="border-b flex pb-5 ml-4">
      <img src={restaurant.main_image} alt="" className="w-44 h-36 rounded" />
      <div className="pl-5">
        <h2 className="text-3xl">{restaurant.name}</h2>
        <div className="flex items-start">
          <div className="flex mb-2">*****</div>
          <p className="ml-2 text-sm">{renderRatingString()}</p>
        </div>
        <div className="mb-9">
          <div className="font-light flex text-reg">
            <Price price={restaurant.price} />
            <p className="mr-4 capitalize">{restaurant.cuisine.name}</p>
            <p className="mr-4 capitalize">{restaurant.location.name}</p>
          </div>
        </div>
        <div className="text-red-600">
          <Link href={`/restaurant/${restaurant.slug}`}>
            View more information
          </Link>
        </div>
      </div>
    </div>
  );
};

export default RestaurantCard;
