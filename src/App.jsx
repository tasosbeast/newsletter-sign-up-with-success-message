import Attribution from "./components/Attribution";
import Content from "./components/Content";
import Image from "./components/Image";

function App() {
  return (
    <>
      <section className="bg-white mx-auto max-w-[904px] flex items-center gap-800 p-400 shadow-card rounded-[36px]">
        <Content />
        <Image />

        {/*

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
