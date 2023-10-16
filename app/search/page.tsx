import Link from "next/link";
import { useRouter } from "next/navigation";

import Navbar from "../components/NavBar";

export default function Search() {
  const router = useRouter();
  return (
    <main className="bg-gray-100 min-h-screen w-screen">
      <main className="max-w-screen-2xl m-auto bg-white">
        {/* navbar */}
        <Navbar />
        {/* navbar */} {/* header */}
        <div className=" bg-gradient-to-r from-[#0f1f47] to-[#5f6984] p-2">
          {/* search bar */}
          <div className="text-left text-lg py-3 m-auto flex justify-center">
            <input
              className="rounded  mr-3 p-2 w-[450px]"
              type="text"
              placeholder="State, city or town"
            />
            <button className="bg-red-600 px-9 py-2 text-white rounded">
              Let's go
            </button>
          </div>
          {/* search bar */}
        </div>
        {/* header */}
        <div className="flex m-auto py-4 justify-between items-start w-2/3">
          {/* search side bar */}
          <div className="w-1/5">
            <div className="border-b pb-4">
              <h1 className="mb-2">Region</h1>
              <p className="font-light text-reg">Toronto</p>
              <p className="font-light text-reg">Ottawa</p>
              <p className="font-light text-reg">Montreal</p>
              <p className="font-light text-reg">Kingston</p>
            </div>
            <div className="border-b pb-4 mt-3">
              <h1 className="mb-2">Cuisine</h1>
              <p className="font-light text-reg">Mexican</p>
              <p className="font-light text-reg">Italien</p>
              <p className="font-light text-reg">Chinese</p>
            </div>
            <div className="mt-3 pb-4">
              <h1 className="mb-2">Price</h1>
              <div className="flex">
                <button className="border w-full text-reg font-light rounded-l p-2">
                  $
                </button>
                <button className="border-r border-t border-b w-full text-reg font-light p-2">
                  $$
                </button>
                <button className="border-r border-t border-b w-full text-reg rounded-r font-light p-2">
                  $$$
                </button>
              </div>
            </div>
          </div>
          {/* search side bar */}
          <div className="w-5/6">
            {/* restaurant card */}
            <div className="border-b flex pb-5">
              <img
                src="https://images.unsplash.com/photo-1512621776951-a57141f2eefd?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2940&q=80"
                alt=""
                className="w-44 rounded"
              />
              <div className="pl-5">
                <h2 className="text-3xl">reataurant name</h2>
                <div className="flex items-start">
                  <div className="flex mb-2">*****</div>
                  <p className="ml-2 text-sm">Awsome</p>
                </div>
                <div className="mb-9">
                  <div className="font-light flex text-reg">
                    <p className="mr-4">$$$</p>
                    <p className="mr-4">Mexican</p>
                    <p className="mr-4">Ottowa</p>
                  </div>
                </div>
                <div className="text-red-600">
                  <a href="">View more information</a>
                </div>
              </div>
            </div>
            {/* restaurant card */}
          </div>
        </div>
      </main>
    </main>
  );
}
