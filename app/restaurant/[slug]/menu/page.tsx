import Link from "next/link";
import Navbar from "../../../components/NavBar";

export default function RestaurantMenu() {
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
          <div className="bg-white w-[100%] rounded p-3 shadow">
            {/* restaurant navbar */}
            <nav className="flex text-reg border-b pb-2 capitalize">
              <Link href="/restaurant/milestones-grill" className="mr-7">
                overview
              </Link>
              <Link href="/restaurant/milestones-grill/menu">menu</Link>
            </nav>
            {/* restaurant navbar */} {/* menu */}
            <main className="bg-white mt-5">
              <div>
                <div className="mt-4 pb-1 mb-1">
                  <h1 className="font-bold text-4xl">Menu</h1>
                </div>
                <div className="flex flex-wrap justify-between">
                  {/* menu card */}
                  <div className="border rounded p-3 w-[49%] mb-3">
                    <h3 className="font-bold text-lg">Surf and Turf</h3>
                    <p className="font-light text-sm mt-1">
                      Excepteur sint occaecat cupidatat non proident, sunt in
                      culpa qui officia deserunt mollit anim id est laborum.
                    </p>
                    <p className="mt-7">$80.00</p>
                  </div>
                  {/* menu card */}
                </div>
              </div>
            </main>
            {/* menu */}
          </div>
          {/* description portion */}
        </div>
      </main>
    </main>
  );
}
