import React from "react";
import {
  illustrationSignUpDesktop,
  illustrationSignUpMobile,
  illustrationSignUpTablet,
} from "../assets/images";

const Image = () => {
  return (
    <div className="md:order-2 order-1  md:h-[593px] overflow-hidden rounded-[16px]">
      <picture className="w-full h-full object-cover">
        <source media="(min-width: 768px)" srcSet={illustrationSignUpDesktop} />
        <source media="(min-width: 348px)" srcSet={illustrationSignUpTablet} />
        <img
          src={illustrationSignUpMobile}
          className="w-full h-full object-cover"
          alt="desktop"
        />
      </picture>
    </div>
  );
};

export default Image;
