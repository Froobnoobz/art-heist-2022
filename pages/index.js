import Head from "next/head";
import Header from "@components/Header";
import Footer from "@components/Footer";
import FeedbackForm from "@components/FeedbackForm";

export default function Home() {
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
          Warning agent, inputting an incorrect password will still give you a passcode.
        </p>
        <FeedbackForm />
      </main>
      <Footer />
    </div>
  );
}
