import { useState } from "react";
const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const Form = () => {
  const [email, setEmail] = useState("");
  const [isEmailInvalid, setIsEmailInvalid] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();

    const isValid = emailRegex.test(email);
    setIsEmailInvalid(!isValid);

    if (!isValid) return; // stop submit if invalid

    // submit logic here
  };

  const handleBlur = () => {
    if (email === "") return; // optional: don't show error on empty
    setIsEmailInvalid(!emailRegex.test(email));
  };

  return (
    <form
      action=""
      className="mt-400 max-w-[376px]"
      onSubmit={handleSubmit}
      noValidate
    >
      <div className="flex justify-between">
        <label htmlFor="email" className="text-preset-3">
          Email address
        </label>
        {isEmailInvalid && (
          <span className="text-preset-3 text-red">Valid email required</span>
        )}
      </div>
      <div className="mt-100 mb-300 w-full max-w-[376px]">
        <input
          type="email"
          className={
            "text-preset-2-regular w-full placeholder:text-gray border border-gray rounded-[8px] px-300 py-200 transition duration-300 ease-in-out focus:outline-none focus:border-gray hover:border-gray " +
            (isEmailInvalid ? " border-red bg-[#ffe7e6] text-red" : "")
          }
          id="email"
          name="email"
          placeholder="email@company.com"
          onChange={(e) => {
            setEmail(e.target.value);
          }}
          onBlur={handleBlur}
          required
        />
      </div>
      <button className="block bg-blue w-full px-300 py-200 rounded-[8px] text-white text-preset-2-bold ">
        Subscribe to monthly newsletter
      </button>
    </form>
  );
};

export default Form;
