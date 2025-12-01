import Attribution from "./components/Attribution";
import { description } from "./constants";
import { illustrationSignUpDesktop } from "./assets/images";
import { useState } from "react";

const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

function App() {
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
    <>
      <section className="bg-white mx-auto max-w-[904px] flex items-center gap-800 p-400 shadow-card rounded-[36px]">
        <div className="">
          <h1 className="text-preset-1">Stay updated!</h1>
          <p className="text-preset-2-regular mt-400">
            Join 60,000+ product managers receiving monthly updates on:
          </p>
          <ul className="mt-400 flex flex-col gap-100">
            {description.map((item) => (
              <li key={item.value} className="flex gap-200">
                <img src={item.icon} alt="" />
                <p>{item.value}</p>
              </li>
            ))}
          </ul>
          <form action="" className="mt-400" onSubmit={handleSubmit} noValidate>
            <div className="flex justify-between">
              <label htmlFor="email" className="text-preset-3">
                Email address
              </label>
              {isEmailInvalid && (
                <span className="text-preset-3 text-red">
                  Valid email required
                </span>
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
            <button className="block bg-blue px-900 py-200 rounded-[8px] text-white text-preset-2-bold ">
              Subscribe to monthly newsletter
            </button>
          </form>
        </div>
        <div className="max-w-[400px] max-h-[593px]">
          <img
            src={illustrationSignUpDesktop}
            alt=""
            width={400}
            height={593}
          />
        </div>

        {/* <!-- Sign-up form start -->


  

  <!-- Sign-up form end -->

  <!-- Success message start -->

  Thanks for subscribing!

  A confirmation email has been sent to ash@loremcompany.com. 
  Please open it and click the button inside to confirm your subscription.

  Dismiss message

  <!-- Success message end -->
   */}
      </section>
      <Attribution />
    </>
  );
}

export default App;
