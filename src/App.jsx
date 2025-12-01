import { useState } from "react";
import Attribution from "./components/Attribution";
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
      <section className="bg-white mx-auto max-w-[904px] flex items-center gap-800 p-400 shadow-card rounded-[36px]">
        {!isSubmitted ? (
          <>
            <Content onEmailSubmit={handleEmailSubmit} />
            <Image />
          </>
        ) : (
          <SuccessMessage
            email={submittedEmail}
            setIsSubmitted={setIsSubmitted}
          />
        )}
      </section>
      <Attribution />
    </>
  );
}

export default App;
