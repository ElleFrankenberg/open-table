"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";
import Header from "./components/Header";

import Navbar from "../components/NavBar";
import SearchSideBar from "./components/SearchSideBar";
import RestaurantCard from "./components/RestaurantCard";

export default function Search() {
  const router = useRouter();
  return (
    <main className="bg-gray-100 min-h-screen w-screen">
      <main className="max-w-screen-2xl m-auto bg-white">
        <Navbar />
        <Header />
        <div className="flex m-auto py-4 justify-between items-start w-2/3">
          <SearchSideBar />
          <div className="w-5/6">
            <RestaurantCard />
          </div>
        </div>
      </main>
    </main>
  );
}
