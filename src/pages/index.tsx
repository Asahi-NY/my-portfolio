import type { NextPage } from "next";
import Head from "next/head";
import { Main } from "src/components/Main";
import { About } from "src/components/About";
import { Skills } from "src/components/Skills";
import { Projects } from "src/components/Projects";
import { Contact } from "src/components/Contact";
import { Footer } from "src/components/Footer";

const Home: NextPage = () => {
  return (
    <div>
      <Head>
        <title>Yusuke | Portfolio</title>
        <meta name="description" content="My Portfolio" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Main />
      <About />
      <Skills />
      <Projects />
      {/* <Contact /> */}
      <Footer />
    </div>
  );
};

export default Home;
