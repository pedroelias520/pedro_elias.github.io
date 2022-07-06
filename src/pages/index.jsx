import Head from "next/head";
import { About } from "../components/About";
import { Header } from "../components/Header";
import { Hero } from "../components/Hero";
import { Experiences } from "../components/Experiences";
import { Projects } from "../components/Projects";
import { Contact } from "../components/Contact";
import { ContactManutention } from "../components/ContactManutention";
import { ContactsCarrosel } from "../components/ContactsCarrosel";

export default function Home() {
  return (
    <>
      <Head>
        
        <meta charset="utf-8" />
        <meta
        name="Portfolio"
        content="Portfolio de projetos de Carlos Amorim, desenvolvedor Front-End"
        />
        <link rel="icon" href="/favicon.png" />
        <link rel="preconnect" href="https://fonts.googleapis.com"/>
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin/>
        <link href='https://fonts.googleapis.com/css2?family=Montserrat:wght@700&display=swap' rel="stylesheet"/>
        <title>Pedro Elias - Portifolio</title>

      </Head>

      <Header />

      <Hero />

      <About />

      <Experiences />

      <Projects />

      <Contact />
      <br></br>
      <ContactManutention/>
      

    </>
  )
}
