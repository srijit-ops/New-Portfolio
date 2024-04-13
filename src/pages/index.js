import Image from "next/image";
import Head from "next/head";
import { defaultData } from "@/utils/data";
import Hero from "@/components/herosection/Hero";
import About from "@/components/aboutsection/About";
import Skills from "@/components/skillsection/Skills";
import Testimonials from "@/components/testimonialsection/Testimonials";
import Contact from "@/components/contactsection/Contact";
import Education from "@/components/educationsection/Education";
import Experience from "@/components/experiencesection/Experience";
import Projects from "@/components/projectsection/Projects";
import Attraction from "@/components/Attraction";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";

export default function Home({ data }) {
  // console.log(data, "data chek");
  return (
    <>
      <Head>
        <title>Srijita Sengupta portfolio</title>
        <meta property="og:title" content="Srijita Sengupta" />
        <meta property="og:image" content="/srijita logo.png" />
        <meta
          property="og:description"
          content="Just an out of the box developer who knows the subtle art of not giving a bug."
        />
        <meta
          name="description"
          content="Just an out of the box developer who knows the subtle art of not giving a bug. I love to create impact with tech."
        ></meta>
        <link
          rel="shortcut icon"
          href="/srijita logo.png"
          type="image/x-icon"
        />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin />
      </Head>
      <main className={`pb-8  bg-white dark:bg-black relative`}>
        <Header />
        <Hero heroData={data.about} socials={data.socialLinks} />
        <About aboutData={data.about} />
        <Skills skillData={data.skills} />
        <Attraction />
        <Projects projectData={data.projects} />
        <Education educationData={data.education} />
        <Experience experienceData={data.experience} />
        <Testimonials testimonialData={data.testimonials} />
        <Contact contactData={data.contactDetails} />
        <Footer socials={data.socialLinks} />
      </main>
    </>
  );
}

export const getStaticProps = () => {
  return {
    props: {
      data: defaultData,
    },
  };
};
