import Link from "next/link";
const RestaurantNavBar = ({ slug }: { slug: string }) => {
  return (
    <nav className="flex text-reg border-b pb-2 capitalize">
      <Link href={`/restaurant/${slug}`} className="mr-7">
        overview
      </Link>
      <Link href={`/restaurant/${slug}/menu`}>menu</Link>
    </nav>
  );
};

export default RestaurantNavBar;
