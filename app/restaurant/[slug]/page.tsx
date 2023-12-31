import { PrismaClient, Review } from "@prisma/client";
import { notFound } from "next/navigation";
import Description from "./components/Description";
import Images from "./components/Images";
import Rating from "./components/Rating";
import ReservationCard from "./components/ReservationCard";
import RestaurantNavBar from "./components/RestaurantNavBar";
import Reviews from "./components/Reviews";
import Title from "./components/Title";

const prisma = new PrismaClient();

interface RestaurantType {
  id: number;
  slug: string;
  name: string;
  images: string[];
  description: string;
  reviews: Review[];
  open_time: string;
  close_time: string;
}

export interface ReviewType {
  id: number;
  first_name: string;
  last_name: string;
  text: string;
  rating: number;
  restaurant_id: number;
  user_id: number;
}

const fetchRestaurantBySlug = async (slug: string): Promise<RestaurantType> => {
  const restaurant = await prisma.restaurant.findUnique({
    where: { slug },
    select: {
      id: true,
      slug: true,
      name: true,
      images: true,
      description: true,
      reviews: true,
      open_time: true,
      close_time: true,
    },
  });

  if (!restaurant) {
    notFound();
  }

  return restaurant;
};

export default async function RestaurantDetails({
  params,
}: {
  params: { slug: string };
}) {
  const restaurant = await fetchRestaurantBySlug(params.slug);

  return (
    <>
      <div className="bg-white w-[70%] rounded p-3 shadow">
        <RestaurantNavBar slug={restaurant.slug} />
        <Title name={restaurant.name} />
        <Rating reviews={restaurant.reviews} />
        <Description description={restaurant.description} />
        <Images images={restaurant.images} />
        {restaurant.reviews.length > 0 && (
          <Reviews reviews={restaurant.reviews} />
        )}
      </div>
      <div className="w-[27%] relative text-reg">
        <ReservationCard
          openTime={restaurant.open_time}
          closeTime={restaurant.close_time}
          slug={restaurant.slug}
        />
      </div>
    </>
  );
}
