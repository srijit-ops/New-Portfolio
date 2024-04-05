import Image from "next/image";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <>
      <Head>
        <title>{data.user.about.name}</title>
        <meta property="og:title" content={data.user.about.name} />
        <meta property="og:image" content={data.user.about.avatar.url} />
        <meta property="og:description" content={data.user.about.subTitle} />
        <meta name="description" content={data.user.about.subTitle}></meta>
        <link
          rel="shortcut icon"
          href={data.user.about.avatar.url}
          type="image/x-icon"
        />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
        <link
          href="https://fonts.googleapis.com/css2?family=Poppins&family=Caveat&display=swap"
          rel="stylesheet"
        />
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.1/css/all.min.css"
          integrity="sha512-DTOQO9RWCH3ppGqcWaEA1BIZOC6xxalwEsw9c2QQeAIftl+Vegovlnee1c9QX4TctnWMn13TZye+giMm8e2LwA=="
          crossorigin="anonymous"
          referrerpolicy="no-referrer"
        />
        {/* <script src="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.1/js/all.min.js" integrity="sha512-GWzVrcGlo0TxTRvz9ttioyYJ+Wwk9Ck0G81D+eO63BaqHaJ3YZX9wuqjwgfcV/MrB2PhaVX9DkYVhbFpStnqpQ==" crossorigin="anonymous" referrerpolicy="no-referrer"></script> */}
      </Head>
      <main className={`pb-8  bg-white dark:bg-black relative`}>
        <Header name={data.user.about.name} />
        <HeroSection heroData={data.user.about} />
        <AboutSection aboutData={data.user.about} />
        <ServiceSection serviceData={data.user.services} />
        <SkillSection skillData={data.user.skills} />
        <ProjectSection projectData={data.user.projects} />
        <TimelineSection timelineData={data.user.timeline} />
        <TestimonialSection testimonialData={data.user.testimonials} />
        <ContactSection
          email={data.user.about.contactEmail}
          location={data.user.about.address}
          phone={data.user.about.phoneNumber}
        />
        <Footer socials={data.user.social_handles} />
      </main>
    </>
  );
}

export const getStaticSideProps= async()=>{
  return{
    props:{
      
    }
  }
}