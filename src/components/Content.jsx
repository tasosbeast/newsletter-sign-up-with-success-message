import React from "react";
import { description } from "../constants";
import ListItem from "./ListItem";
import Form from "./Form";

const Content = () => {
  return (
    <div className="">
      <h1 className="text-preset-1">Stay updated!</h1>
      <p className="text-preset-2-regular mt-400">
        Join 60,000+ product managers receiving monthly updates on:
      </p>
      <ul className="mt-400 flex flex-col gap-100">
        {description.map((item) => (
          <ListItem key={item.value} {...item} />
        ))}
      </ul>
      <Form />
    </div>
  );
};

export default Content;
