import Header from "./components/Header";

import SearchSideBar from "./components/SearchSideBar";
import RestaurantCard from "./components/RestaurantCard";
import { PrismaClient, PRICE, Location, Cuisine } from "@prisma/client";

const prisma = new PrismaClient();

// interface RestaurantType {
//   id: number;
//   slug: string;
//   name: string;
//   main_image: string;
//   price: PRICE;
//   location: Location;
//   cuisine: Cuisine;
// }

const fetchRestaurantsByCity = (city: string | undefined) => {
  const select = {
    id: true,
    slug: true,
    name: true,
    main_image: true,
    price: true,
    location: true,
    cuisine: true,
  };

  if (!city)
    return prisma.restaurant.findMany({
      select,
    });

  return prisma.restaurant.findMany({
    where: {
      location: {
        name: {
          equals: city.toLowerCase(),
        },
      },
    },
    select,
  });
};

export default async function Search({
  searchParams,
}: {
  searchParams: { city: string };
}) {
  const restaurants = await fetchRestaurantsByCity(searchParams.city);

  return (
    <>
      <Header />
      <div className="flex m-auto py-4 justify-between items-start w-2/3">
        <SearchSideBar />
        <div className="w-5/6">
          {restaurants.length ? (
            restaurants.map((restaurant) => (
              <RestaurantCard restaurant={restaurant} />
            ))
          ) : (
            <h1 className="text-2xl text-center mt-10">
              Sorry, we found no restaurants in this area.
            </h1>
          )}
        </div>
      </div>
    </>
  );
}
