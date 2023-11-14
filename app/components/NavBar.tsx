"use client";

import Link from "next/link";
import AuthModal from "./auth/AuthModal";
import { useContext } from "react";
import { AuthenticationContext } from "../context/AuthContext";
import useAuth from "../../hooks/useAuth";

const Navbar = () => {
  const { data, loading } = useContext(AuthenticationContext);
  const { signOut } = useAuth();

  return (
    <nav className="bg-white p-2 flex justify-between">
      <Link className="font-bold text-gray-700 text-2xl" href="/">
        OpenTable
      </Link>
      <div>
        {loading ? null : (
          <div className="flex">
            {data ? (
              <button
                className="bg-blue-400 text-white border p-1 px-4 rounded mr-3"
                onClick={signOut}
              >
                Sign out
              </button>
            ) : (
              <>
                <AuthModal isSignIn={true} />
                <AuthModal isSignIn={false} />
              </>
            )}
          </div>
        )}
      </div>
    </nav>
  );
};
export default Navbar;
