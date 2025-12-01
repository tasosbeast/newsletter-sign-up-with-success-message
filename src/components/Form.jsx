import { useState } from "react";
const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const Form = ({ onEmailSubmit }) => {
  const [email, setEmail] = useState("");
  const [isEmailTouched, setIsEmailTouched] = useState(false);
  const isEmailValid = emailRegex.test(email);
  const showError = isEmailTouched && !isEmailValid;
  const showSuccess = isEmailValid && isEmailTouched;

  const handleSubmit = (e) => {
    e.preventDefault();

    setIsEmailTouched(true);

    if (!isEmailValid) return; // stop submit if invalid

    // Call the parent callback with the email
    onEmailSubmit(email);
  };

  const handleBlur = () => {
    if (email === "") return; // optional: don't show error on empty
    setIsEmailTouched(true);
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
        {showError && (
          <span className="text-preset-3 text-red">Valid email required</span>
        )}
      </div>
      <div className="mt-100 mb-300 w-full max-w-[376px]">
        <input
          type="email"
          className={
            "text-preset-2-regular w-full placeholder:text-gray border border-gray rounded-[8px] px-300 py-200 transition duration-300 ease-in-out focus:outline-none focus:border-gray hover:border-gray" +
            (showError ? " border-red bg-[#ffe7e6] text-red" : "")
          }
          value={email}
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
