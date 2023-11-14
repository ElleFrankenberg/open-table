import axios from "axios";
import { useContext } from "react";
import { AuthenticationContext } from "../app/context/AuthContext";
import { deleteCookie } from "cookies-next";

const useAuth = () => {
  const { setAuthState } = useContext(AuthenticationContext);

  const signIn = async (
    {
      email,
      password,
    }: {
      email: string;
      password: string;
    },
    handleClose: () => void
  ) => {
    setAuthState({ data: null, error: null, loading: true });
    try {
      const response = await axios.post(
        "http://localhost:3000/api/auth/signin",
        {
          email,
          password,
        }
      );
      setAuthState({ data: response.data, error: null, loading: false });
      handleClose();
    } catch (error: any) {
      setAuthState({
        data: null,
        error: error.response.data.errorMessage,
        loading: false,
      });
    }
  };

  const signUp = async (
    {
      firstName,
      lastName,
      email,
      phone,
      city,
      password,
    }: {
      firstName: string;
      lastName: string;
      email: string;
      phone: string;
      city: string;
      password: string;
    },
    handleClose: () => void
  ) => {
    setAuthState({ data: null, error: null, loading: true });

    try {
      const response = await axios.post(
        "http://localhost:3000/api/auth/signup",
        {
          firstName,
          lastName,
          email,
          phone,
          city,
          password,
        }
      );

      setAuthState({ data: response.data, error: null, loading: false });
      handleClose();
    } catch (error: any) {
      setAuthState({
        data: null,
        error: error.response.data.errorMessage,
        loading: false,
      });
    }
  };

  const signOut = () => {
    deleteCookie("jwt");
    setAuthState({ data: null, error: null, loading: false });
  };

  return { signIn, signUp, signOut };
};

export default useAuth;
