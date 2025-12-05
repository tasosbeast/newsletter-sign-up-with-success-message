import React from "react";
import { description } from "../constants";
import ListItem from "./ListItem";
import Form from "./Form";

const Content = ({ onEmailSubmit }) => {
  return (
    <div className="flex flex-col gap-300 lg:gap-400 p-300 sm:p-[0px] order-2 lg:order-1">
      <h1 className="text-preset-1 text-blue">Stay updated!</h1>
      <p className="text-preset-2-regular">
        Join 60,000+ product managers receiving monthly updates on:
      </p>
      <ul className=" flex flex-col gap-100">
        {description.map((item) => (
          <ListItem key={item.value} {...item} />
        ))}
      </ul>
      <Form onEmailSubmit={onEmailSubmit} />
    </div>
  );
};

export default Content;
