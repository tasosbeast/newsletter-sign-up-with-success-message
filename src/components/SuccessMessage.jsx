import React from "react";
import { iconSuccess } from "../assets/images";
import Button from "./Button";

const SuccessMessage = ({ email, setIsSubmitted }) => {
  return (
    <>
      <img src={iconSuccess} alt="" width={64} height={64} />
      <h1 className="text-preset-1-mobile sm:text-preset-1">
        Thanks for subscribing!
      </h1>
      <p className="text-preset-2-regular">
        A confirmation email has been sent to <strong>{email}</strong>. Please
        open it and click the button inside to confirm your subscription.
      </p>
      <Button onClick={() => setIsSubmitted(false)}>Dismiss message</Button>
    </>
  );
};

export default SuccessMessage;
