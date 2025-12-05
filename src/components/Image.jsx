import React from "react";
import {
  illustrationSignUpDesktop,
  illustrationSignUpMobile,
  illustrationSignUpTablet,
} from "../assets/images";

const Image = () => {
  return (
    <div className="lg:order-2 order-1 overflow-hidden">
      <picture className="w-full h-full object-cover">
        <source
          media="(min-width: 1025px)"
          srcSet={illustrationSignUpDesktop}
        />
        <source media="(min-width: 640px)" srcSet={illustrationSignUpTablet} />
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
