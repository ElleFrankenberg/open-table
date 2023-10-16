import Link from "next/link";

const RestaurantCard = () => {
  return (
    <div className="w-64 h-72 m-3 rounded overflow-hidden border cursor-pointer">
      <Link href="/restaurant/milestones-grill">
        <img
          src="https://images.unsplash.com/photo-1504674900247-0877df9cc836?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2940&q=80"
          alt=""
          className="w-full h-36"
        />
        <div className="p-1">
          <h3 className="font-bold text-2xl mb-2">milestones grill</h3>
          <div className="flex items-start">
            <div className="flex mb-2">*****</div>
            <p className="ml-2">77 reviews</p>
          </div>
          <div className="flex text-reg font-light capitalize">
            <p className="mr-3 ">mexican</p>
            <p className="mr-3">$$$$$</p>
            <p>toronto</p>
          </div>
          <p className="text-sm mt-1 font-bold ">booked 3 times today</p>
        </div>
      </Link>
    </div>
  );
};

export default RestaurantCard;
