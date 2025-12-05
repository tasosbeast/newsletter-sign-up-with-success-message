import { useState } from "react";

import Content from "./components/Content";
import Image from "./components/Image";
import SuccessMessage from "./components/SuccessMessage";

function App() {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [submittedEmail, setSubmittedEmail] = useState("");

  const handleEmailSubmit = (email) => {
    setSubmittedEmail(email);
    setIsSubmitted(true);
  };

  return (
    <>
      {!isSubmitted ? (
        <section className="bg-white mx-auto max-w-[608px] lg:max-w-[904px] flex lg:flex-row flex-col lg:items-center items-start gap-500 lg:gap-800 lg:p-400 sm:p-500 shadow-card rounded-none sm:rounded-[36px]">
          <Content onEmailSubmit={handleEmailSubmit} />
          <Image />
        </section>
      ) : (
        <section className="bg-white mx-auto flex items-start p-800 shadow-card rounded-[36px] flex-col gap-400 max-w-[504px] max-h-[520px]">
          <SuccessMessage
            email={submittedEmail}
            setIsSubmitted={setIsSubmitted}
          />
        </section>
      )}
    </>
  );
}

export default App;
