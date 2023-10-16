import Link from "next/link";
import Navbar from "../../components/NavBar";

export default function RestaurantDetails() {
  return (
    <main className="bg-gray-100 min-h-screen w-screen">
      <main className="max-w-screen-2xl m-auto bg-white">
        {/* navbar */}
        <Navbar />
        {/* navbar */} {/* header */}
        <div className="h-96 overflow-hidden">
          <div className="bg-center bg-gradient-to-r from-[#0f1f47] to-[#5f6984] h-full flex justify-center items-center">
            <h1 className="text-7xl text-white capitalize text-shadow text-center">
              milestones grill (toronto)
            </h1>
          </div>
        </div>
        {/* header */} {/* description portion */}
        <div className="flex m-auto w-2/3 justify-between items-start 0 -mt-11">
          <div className="bg-white w-[70%] rounded p-3 shadow">
            {/* restaurant navbar */}
            <nav className="flex text-reg border-b pb-2 capitalize">
              <Link href="/restaurant/milestones-grill" className="mr-7">
                overview
              </Link>
              <Link href="/restaurant/milestones-grill/menu">menu</Link>
            </nav>
            {/* restaurant navbar */} {/* restaurant title */}
            <div className="mt-4 border-b pb-6">
              <h1 className="font-bold text-6xl capitalize">
                milestones grill
              </h1>
            </div>
            {/* restaurant title */} {/* ratings */}
            <div className="flex items-end">
              <div className="ratings flex mt-2 items-center">
                <p>*****</p>
                <p className="text-reg ml-3">4.3</p>
              </div>
              <div>
                <p className="text-reg ml-4">600 reviews</p>
              </div>
            </div>
            {/* ratings */} {/* description */}
            <div className="mt-4">
              <p className="text-lg font-light">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor
                in reprehenderit in voluptate velit esse cillum dolore eu fugiat
                nulla pariatur. Excepteur sint occaecat cupidatat non proident,
                sunt in culpa qui officia deserunt mollit anim id est laborum.
              </p>
            </div>
            {/* description */} {/* images */}
            <div>
              <h1 className="font-bold text-3xl mt-10 mb-7 border-b pb-5">
                3 photos
              </h1>
              <div className="flex flex-wrap">
                <img
                  className="w-56 h-44 mr-1 mb-1"
                  alt="restaurant image"
                  src="https://images.unsplash.com/photo-1505405241694-58823de133e1?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8Z3JpbGx8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=800&q=60"
                />
                <img
                  className="w-56 h-44 mr-1 mb-1"
                  alt="restaurant image"
                  src="https://images.unsplash.com/photo-1457460866886-40ef8d4b42a0?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2940&q=80"
                />
                <img
                  className="w-56 h-44 mr-1 mb-1"
                  alt="restaurant image"
                  src="https://images.unsplash.com/photo-1498654831517-895a5dfe4edc?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2940&q=80"
                />
              </div>
            </div>
            {/* images */} {/* reviwes */}
            <div>
              <h1 className="font-bold text-3xl mt-10 mb-7 border-b pb-5">
                What 100 people are saying
              </h1>
              <div>
                {/* review card */}
                <div className="border-b pb-7 mb-7">
                  <div className="flex">
                    <div className="w-1/6 flex flex-col items-center">
                      <div className="rounded-full bg-blue-400 w-16 h-16 flex items-center justify-center">
                        <h2 className="text-white text-2xl">EF</h2>
                      </div>
                      <p className="text-center">Elle Frankenberg</p>
                    </div>
                    <div className="ml-10 w-5/6">
                      <div className="flex items-center">
                        <div className="flex mr-5">*****</div>
                      </div>
                      <div className="mt-5">
                        <p className="font-light text-lg">
                          Lorem ipsum dolor sit amet, consectetur adipiscing
                          elit, sed do eiusmod tempor incididunt ut labore et
                          dolore magna aliqua. Ut enim ad minim veniam, quis
                          nostrud exercitation ullamco laboris nisi ut aliquip
                          ex ea commodo consequat.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
                {/* review card */}
              </div>
            </div>
            {/* reviwes */}
          </div>
          {/* description portion */} {/* reservation portion */}
          <div className="w-[27%] relative text-reg">
            <div className="fixed w-[15%] rounded bg-white p-3 shadow">
              <div className="text-center border-b pb-2 font-bold">
                <h4 className="mr-7 text-lg">Make a reservation</h4>
              </div>
              <div className="my-3 flex flex-col">
                <label htmlFor="">Party size</label>
                <select className="py-3 border-b font-light" name="" id="">
                  <option value="1">1 person</option>
                  <option value="2">2 people</option>
                </select>
              </div>
              <div className="flex justify-between">
                <div className="flex flex-col w-[48%]">
                  <label htmlFor="">date</label>
                  <input
                    className="py-3 border-b font-light w-28"
                    type="text"
                  />
                </div>
                <div className="flex flex-col w-[48%]">
                  <label htmlFor="">time</label>
                  <select className="py-3 border-b font-light" name="" id="">
                    <option value="">7:30 AM</option>
                    <option value="">8:00 AM</option>
                  </select>
                </div>
              </div>
              <div className="mt-5">
                <button className="bg-red-600 rounded w-full px-4 text-white h-16 font-bold">
                  Find a time
                </button>
              </div>
            </div>
          </div>
          {/* reservation portion */}
        </div>
      </main>
    </main>
  );
}
