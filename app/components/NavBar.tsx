import Link from "next/link";
import AuthModal from "./auth/AuthModal";

const Navbar = () => {
  return (
    <nav className="bg-white p-2 flex justify-between">
      <Link className="font-bold text-gray-700 text-2xl" href="/">
        OpenTable
      </Link>
      <div>
        <div className="flex">
          <AuthModal isSignIn={true} />
          <AuthModal isSignIn={false} />
        </div>
      </div>
    </nav>
  );
};
export default Navbar;
