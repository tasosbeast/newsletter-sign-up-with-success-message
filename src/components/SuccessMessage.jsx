import React from "react";
import { iconSuccess } from "../assets/images";

const SuccessMessage = ({ email, setIsSubmitted }) => {
  return (
    <div className="p-800 flex flex-col gap-400 max-w-[504px]">
      <img src={iconSuccess} alt="" width={64} height={64} />
      <h1 className="text-preset-1">Thanks for subscribing!</h1>
      <p className="text-preset-2-regular mt-400">
        A confirmation email has been sent to <strong>{email}</strong>. Please
        open it and click the button inside to confirm your subscription.
      </p>
      <button
        onClick={() => setIsSubmitted(false)}
        className="mt-400 block bg-blue w-full px-300 py-200 rounded-[8px] text-white text-preset-2-bold"
      >
        Dismiss message
      </button>
    </div>
  );
};

export default SuccessMessage;
