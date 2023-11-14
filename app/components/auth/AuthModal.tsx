"use client";

import { Alert, CircularProgress } from "@mui/material";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";

import { useContext, useEffect, useState } from "react";
import useAuth from "../../../hooks/useAuth";
import { AuthenticationContext } from "../../context/AuthContext";
import Inputs from "./Inputs";

const style = {
  position: "absolute" as "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  boxShadow: 24,
  p: 4,
};

const AuthModal = ({ isSignIn }: { isSignIn: boolean }) => {
  const [open, setOpen] = useState(false);
  const [inputs, setInputs] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    city: "",
    password: "",
  });
  const [disabled, setDisabled] = useState(true);
  const { signIn, signUp } = useAuth();
  const { loading, error, data } = useContext(AuthenticationContext);

  useEffect(() => {
    if (isSignIn) {
      if (inputs.email && inputs.password) {
        return setDisabled(false);
      }
    } else {
      if (
        inputs.firstName &&
        inputs.lastName &&
        inputs.email &&
        inputs.phone &&
        inputs.city &&
        inputs.password
      ) {
        return setDisabled(false);
      }
    }
    setDisabled(true);
  }, [inputs]);

  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const renderContent = (signInContent: string, signUpContent: string) => {
    return isSignIn ? signInContent : signUpContent;
  };

  const handleChangeInputs = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputs({ ...inputs, [e.target.name]: e.target.value });
  };

  const handleClick = () => {
    if (isSignIn) {
      signIn({ email: inputs.email, password: inputs.password }, handleClose);
    } else {
      signUp(inputs, handleClose);
    }
  };

  return (
    <div>
      <button
        onClick={handleOpen}
        className={`${renderContent(
          "bg-blue-400 text-white",
          ""
        )} border p-1 px-4 rounded mr-3 `}
      >
        {renderContent("Sign In", "Sign Up")}
      </button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <div className="p-2 h-[600px]">
            <div className="uppercase font-bold text-center pb-2 border-b mb-2">
              <p className="text-small">
                {renderContent("Sign In", "Create account")}
              </p>
            </div>
            <div className="m-auto">
              <h2 className="text-2xl font-light text-center">
                {renderContent(
                  "Log into your account",
                  "Create your OpenTable account"
                )}
              </h2>
              {loading ? (
                <div className="py-24 px-2 flex justify-center">
                  <CircularProgress />
                </div>
              ) : (
                <>
                  <Inputs
                    inputs={inputs}
                    handleChangeInputs={handleChangeInputs}
                    isSignIn={isSignIn}
                  />
                  <button
                    disabled={disabled}
                    onClick={handleClick}
                    className="uppercase bg-red-600 w-full text-white p-3 rounded text-sm mb-5 disabled:bg-gray-400"
                  >
                    {renderContent("Sign In", "Create Account")}
                  </button>
                </>
              )}
              {error && <Alert severity="error">{error}</Alert>}
            </div>
          </div>
        </Box>
      </Modal>
    </div>
  );
};

export default AuthModal;
