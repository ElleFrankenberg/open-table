import Header from "./components/Header";

import SearchSideBar from "./components/SearchSideBar";
import RestaurantCard from "./components/RestaurantCard";
import { PRICE, PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

interface SearchParams {
  city?: string;
  cuisine?: string;
  price?: PRICE;
}

const fetchRestaurantsBySearchParams = ({
  searchParams,
}: {
  searchParams: SearchParams;
}) => {
  const where: any = {};

  if (searchParams.city) {
    where.location = {
      name: {
        equals: searchParams.city.toLowerCase(),
      },
    };
  }
  if (searchParams.cuisine) {
    where.cuisine = {
      name: {
        equals: searchParams.cuisine.toLowerCase(),
      },
    };
  }
  if (searchParams.price) {
    where.price = {
      equals: searchParams.price,
    };
  }

  const select = {
    id: true,
    slug: true,
    name: true,
    main_image: true,
    price: true,
    location: true,
    cuisine: true,
  };

  return prisma.restaurant.findMany({
    where,
    select,
  });
};

const fetchLocations = async () => {
  return await prisma.location.findMany();
};

const fetchCuisines = async () => {
  return await prisma.cuisine.findMany();
};

export default async function Search({
  searchParams,
}: {
  searchParams: SearchParams;
}) {
  const restaurants = await fetchRestaurantsBySearchParams({ searchParams });
  const locations = await fetchLocations();
  const cuisines = await fetchCuisines();

  return (
    <>
      <Header />
      <div className="flex m-auto py-4 justify-between items-start w-2/3">
        <SearchSideBar
          locations={locations}
          cuisines={cuisines}
          searchParams={searchParams}
        />
        <div className="w-5/6">
          {restaurants.length ? (
            restaurants.map((restaurant) => (
              <RestaurantCard restaurant={restaurant} key={restaurant.id} />
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
