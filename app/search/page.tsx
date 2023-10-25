"use client";

import { useRouter } from "next/navigation";
import Header from "./components/Header";

import SearchSideBar from "./components/SearchSideBar";
import RestaurantCard from "./components/RestaurantCard";

export default function Search() {
  const router = useRouter();
  return (
    <>
      <Header />
      <div className="flex m-auto py-4 justify-between items-start w-2/3">
        <SearchSideBar />
        <div className="w-5/6">
          <RestaurantCard />
        </div>
      </div>
    </>
  );
}
