import Link from "next/link";
import Navbar from "../../components/NavBar";

export default function Reserve() {
  return (
    <main className="bg-gray-100 min-h-screen w-screen">
      <main className="max-w-screen-2xl m-auto bg-white">
        {/* navbar */}
        <Navbar />
        {/* navbar */}
        <div className="border-t h-screen">
          <div className="py-9 w-3/5 m-auto">
            {/* header */}
            <div>
              <h3 className="font-bold">You're almost done!</h3>
              <div className="mt-5 flex">
                <img
                  src="https://images.unsplash.com/photo-1574484284002-952d92456975?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2787&q=80"
                  alt=""
                  className="w-32 h-18 rounded"
                />
                <div className="ml-4">
                  <h1 className="text-3xl font-bold">Restaurant name</h1>
                  <div className="flex mt-3">
                    <p className="mr-6">Tues, 22, 2023</p>
                    <p className="mr-6">7:30 PM</p>
                    <p className="mr-6">3 people</p>
                  </div>
                </div>
              </div>
            </div>
            {/* header */} {/* form */}
            <div className="mt-10 flex flex-wrap justify-between w-[660px]">
              <input
                type="text"
                className="border rounded p-3 w-80 mb-4"
                placeholder="First name"
              />
              <input
                type="text"
                className="border rounded p-3 w-80 mb-4"
                placeholder="Last name"
              />
              <input
                type="text"
                className="border rounded p-3 w-80 mb-4"
                placeholder="Phone number"
              />
              <input
                type="text"
                className="border rounded p-3 w-80 mb-4"
                placeholder="Email"
              />
              <input
                type="text"
                className="border rounded p-3 w-80 mb-4"
                placeholder="Occasion (optional)"
              />
              <input
                type="text"
                className="border rounded p-3 w-80 mb-4"
                placeholder="Special request (optional)"
              />
              <button className="bg-red-600 w-full p-3 text-white font-bold rounded disabled:bg-gray-300">
                Complete reservation
              </button>
              <p className="mt-4 text-sm">
                Excepteur sint occaecat cupidatat non proident, sunt in culpa
                qui officia deserunt mollit anim id est laborum.
              </p>
            </div>
            {/* form */}
          </div>
        </div>
      </main>
    </main>
  );
}
