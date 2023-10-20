import Link from "next/link";
const RestaurantNavBar = () => {
  return (
    <nav className="flex text-reg border-b pb-2 capitalize">
      <Link href="/restaurant/milestones-grill" className="mr-7">
        overview
      </Link>
      <Link href="/restaurant/milestones-grill/menu">menu</Link>
    </nav>
  );
};

export default RestaurantNavBar;
