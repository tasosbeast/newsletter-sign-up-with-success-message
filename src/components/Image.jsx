import React from "react";
import { illustrationSignUpDesktop } from "../assets/images";

const Image = () => {
  return (
    <div className="w-[400px] h-[593px] overflow-hidden rounded-[16px]">
      <img
        src={illustrationSignUpDesktop}
        className="w-full h-full object-cover"
        alt="desktop"
      />
    </div>
  );
};

export default Image;
