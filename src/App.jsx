import Attribution from "./components/Attribution";
import { description } from "./constants";

function App() {
  return (
    <>
      <section className="bg-white mx-auto max-w-[904px] flex gap-800 p-400 shadow-card rounded-[36px]">
        <div>
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
          <form action="">
            <input type="email" className="w-full" />
            <button className="block">Subscribe to monthly newsletter</button>
          </form>
        </div>
        <div></div>

        {/* <!-- Sign-up form start -->


  Email address
  email@company.com

  Subscribe to monthly newsletter

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
