import Head from "next/head";
import Header from "@components/Header";
import Footer from "@components/Footer";
import FeedbackForm from "@components/FeedbackForm";
import { useEffect } from "react";

export default function Home() {
  useEffect(() => {
    console.log(`you think you're funny huh looking at the console window for clues huh nerd ass, way ahead of you, have to get the right password to get this one soz`);
  }, [])

  return (
    <div className="container">
      <Head>
        <title>Mona Yanir code cracker</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <Header title="Mona Yanir Code Cracker" />
        <hr />
        <p className="description">
          Unscramble the clues and put in the password.
          <br /><br />
          The password is not case sensitive.
          <br /><br />
          Beware agent, inputting an incorrect password will still give you a combination for the safe! 
          So if you think you're right, approach the safe and try your luck.
          <br /><br />
          You're our best hope, good luck out there.
        </p>
        <FeedbackForm />
      </main>
      <Footer />
    </div>
  );
}
