import Link from "next/link";

const RestaurantCard = () => {
  return (
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
          <Link href="/restaurant/milestones">View more information</Link>
        </div>
      </div>
    </div>
  );
};

export default RestaurantCard;
