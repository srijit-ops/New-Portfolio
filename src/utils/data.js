import {
  faGithub,
  faLinkedinIn,
  faXTwitter,
} from "@fortawesome/free-brands-svg-icons";

export const defaultData = {
  about: {
    name: "Srijita",
    title: "A frontend developer",
    subtitle:
      "I develop visually stunning and cool websites that leave a lasting impression",
    about:
      "Hi, I'm Srijita, a techgeek, passionate about web development and programming. I'm always madly craving for learning new emerging technologies and building real-world applications. I want to create real impact on society by tech one day. Also I'm just a regular out of the box developer who knows the subtle art of not giving a bug.",
    image: "/Me.jpeg",
    quote: "They think I'm hiding in the shadows, but I'm the shadows.",
    lottie:
      "https://lottie.host/502b38fb-d4ef-4b92-a195-14e628ef540c/pM4dgPnehZ.json",
  },
  skills: [
    {
      skill: "Bootstrap",
      logo: "/Bootstrap.png",
      bg: "#EFE8FA",
      percentage: 90,
    },
    {
      skill: "Tailwind CSS",
      logo: "/tailwind.png",
      bg: "#ccf8ff",
      percentage: 80,
    },
    {
      skill: "Figma",
      logo: "/figma.png",
      bg: "#FCECE7",
      percentage: 60,
    },
    {
      skill: "shadcn/ui",
      logo: "/shadcnui.png",
      bg: "#d4d4d4",
      percentage: 60,
    },
    {
      skill: "Chakra UI",
      logo: "/chakra.png",
      bg: "#ECFCFF",
      percentage: 80,
    },
    {
      skill: "JavaScript",
      logo: "/javascript.png",
      bg: "#FDF7D1",
      percentage: 80,
    },
    {
      skill: "TypeScript",
      logo: "/typescript.png",
      bg: "#ccf8ff",
      percentage: 70,
    },
    {
      skill: "React JS",
      logo: "/react.png",
      bg: "#ECFCFF",
      percentage: 70,
    },
    {
      skill: "Next JS",
      logo: "/next.svg",
      bg: "#d4d4d4",
      percentage: 70,
    },
    {
      skill: "Storybook JS",
      logo: "/storybook.png",
      bg: "#ffe3ea",
      percentage: 40,
    },
    {
      skill: "React Native (Expo)",
      logo: "/react.png",
      bg: "#ECFCFF",
      percentage: 60,
    },
    {
      skill: "Redux",
      logo: "/redux.png",
      bg: "#EFE8FA",
      percentage: 70,
    },
    // {
    //   skill: "Zustand",
    //   logo: "/zustand.png",
    //   bg: "#FDF7D1",
    //   percentage: 70,
    // },
    {
      skill: "React Query",
      logo: "/react query.png",
      bg: "#ffe3ea",
      percentage: 70,
    },
    {
      skill: "Framer",
      logo: "/framer motion.svg",
      bg: "#F3DDE4",
      percentage: 50,
    },
    {
      skill: "Github",
      logo: "/github.png",
      bg: "#d4d4d4",
      percentage: 80,
    },
  ],
  education: [
    {
      name: "B.Tech (ECE)",
      place: "Bengal Institute of Technology",
      grade: "8.5",
      gradeUnit: "YGPA",
      timeline: "2020-2024",
    },
    {
      name: "Higher Secondary",
      place: "Dum Dum Baidyanath Institution",
      grade: "87.4",
      gradeUnit: "%",
      timeline: "2018-2020",
    },
    {
      name: "Secondary",
      place: "Dum Dum Baidyanath Institution for Girls",
      grade: "94.7",
      gradeUnit: "%",
      timeline: "2017-2018",
    },
  ],
  experience: [
    {
      link: "https://www.karya.in/",
      place: "Karya",
      timeline: "July 2024 - Present",
      name: "Software Engineer",
      bulletPoints: [
        "Integrated Strapi CMS into Karya's official website, and handled its maintenance, revamp, and updates.",
        "Developed the End of The Year Report website, showcasing key organizational insights.",
        "Building Platform V2, an AI-integrated task station, using Storybook, Chakra UI, TypeScript, React, and Redux.",
        "Integrated an AI powered interactive canvas with React Flow in the Karya Platform, streamlining the task creation process for non-techies.",
        "Collaborating with the Operations team to implement new features and resolve bugs in the existing product."
      ],
    },
    {
      link: "https://freeflow.zone/",
      place: "Freeflow Ventures",
      timeline: "March 2023 - February 2024",
      name: "Frontend Developer and Designer Intern",
      bulletPoints: [
        "Developed the UI & implemented functionalities in an interior materials & service providing website with Next JS.",
        "Built 2 cross platform apps for sellers & buyers forthe interior materials & service providing website with React Native & integrated 3rd party libraries.",
        "Developed the UI of a website focused on enhancing brain power & productivity with React JS.",
        "Created designs & prototypes for an event management app & it’s admin panel, a debate management platform incl. audience, host, speakers screens, a bike & cab booking app incl. drivers & customers screens in Figma."
      ],
    },
    {
      link: "#",
      place: "OkayG Softwares LLP",
      timeline: "May 2022 - August 2022",
      name: "Frontend Developer Intern",
      bulletPoints: [
        "Created the Frontend of an E-Learning website & social media website from scratch using HTML,Bootstrap & JavaScript",
        "Created responsive & user engaging websites with userfacing features & reusable components & optimized websites’ performance.",
      ],
    },
    {
      link: "#",
      place: "Doorstep Delhi",
      timeline: "May 2021 - August 2021",
      name: "Technical Writing Intern",
      bulletPoints: [
        "Built projects using Python, SQL, Machine Learning & Computer Vision.",
        "Brainstormed & created tech blogs related to the projects.",
      ],
    },
  ],
  projects: [
    {
      name: "Spend Smart",
      img: "/spend-smart.png",
      techstack: ["Next JS", "Tailwind CSS", "shadcn/ui", "Next Auth", "React Hook Form", "Yup"],
      github: "https://github.com/srijit-ops/spend-smart",
      liveLink: "https://spend-smart-drab.vercel.app/",
      about:
        "A smart expense tracker where one can set monthly savings target based on salary & achieve this goal seamlessly with features like categorized daily transaction details, interactive data visualizations & insightful analytics. Integrated Google Map & Google Places Autocomplete to track the expense location, Next Auth for user authentication, React hook form & Yup forforms.",
    },
    {
      name: "Quiz Combat",
      img: "/quiz-combat.png",
      techstack: ["React JS", "Tailwind CSS", "React Query"],
      github: "https://github.com/srijit-ops/QuizCombat",
      liveLink: "https://quiz-combat.netlify.app/",
      about:
        "A website to solve different types of quiz with timer. Integrated Trivia API & used React Query for fetching live data"
    },
    {
      name: "Crypto Saga",
      img: "/crypto-saga.png",
      techstack: ["React JS", "Tailwind CSS", "React Query"],
      github: "https://github.com/srijit-ops/Crypto-Saga",
      liveLink: "https://cryptosaga.netlify.app/",
      about:
        "A responsive website for exploring real-time data on various cryptocurrencies. Users can delve into live price updates, market cap, market rank, valuations, performance metrics, other details presented in an intuitive graphical interface. I’ve integrated Coingecko API & used React Query forfetching live data.",
    },
    {
      name: "Netflix Clone",
      img: "/movie-hub.png",
      techstack: ["React JS", "Bootstrap", "Firebase"],
      github: "https://github.com/srijit-ops/Netflix-Clone",
      liveLink: "https://its-netflix-clone.netlify.app/",
      about:
        "Clone of Netflix made with React JS forthe frontend & Firebase for user authentication. I used TMDB API to get movie data, react-router-dom forrouting, react-youtube & movie-trailer packages to show trailers from YouTube.",
    },
    {
      name: "Weather Forecaster",
      img: "/weather-app.png",
      techstack: ["React JS", "Bootstrap"],
      github: "https://github.com/srijit-ops/Weather-Forecaster",
      liveLink: "https://weather-forecasterr.netlify.app/",
      about:
        "A platform, built using weather API, to check weatherforecasts incl. humidity, wind speed, highest, lowest & real felt temperature, sunrise, sunset times, hourly forecast & it’s graphical representation",
    },
    {
      name: "Task Tracker",
      img: "/task-tracker.png",
      techstack: ["React JS", "Tailwind CSS", "Redux"],
      github: "https://github.com/srijit-ops/easy-search-assignment",
      liveLink: "https://redux-task-tracker.netlify.app/",
      about:
        "A responsive task tracking website where you can add tasks, due time and date through popups. You can also mark them as Done and delete the tasks as per requirements, filter the tasks based on completed or uncompleted. And don't get afraid!! this site won't lose your previous tasks after page refresh or after closing the browser until or unless you delete the tasks.",
    },
    {
      name: "Melodify",
      img: "/melodify.png",
      techstack: ["JavaScript", "CSS"],
      github: "https://github.com/srijit-ops/Melodify",
      liveLink: "https://melodify-music-player.netlify.app/",
      about:
        "Welcome to the Melodify music player where you can play music stored in assets folder using HTML5 audio API. It has features like- play and pause the song , changing to next and previous song with a progress bar, library where you can find all the songs, search pannel to search a song in the playlist. Also you can mark songs as your favourite and get them in the favourite songs panel.",
    },
    {
      name: "Snake Game",
      img: "/snake-game.png",
      techstack: ["JavaScript", "CSS"],
      github: "https://github.com/srijit-ops/Snake-game",
      liveLink: "https://vanilla-snake-game.netlify.app/",
      about:
        "A basic snake game made with HTML, CSS and Vanilla JS. Use arrow keys to move the snake. Testing testing just testing!",
    },
    {
      name: "Image Wrapper",
      img: "/wrapper.png",
      techstack: ["JavaScript", "CSS"],
      github: "https://github.com/srijit-ops/wrap_it_up",
      liveLink: "https://wrap-it-up.netlify.app/",
      about:
        "A responsive website where you can upload any background removed picture and can convert it to a beautiful text-portrait with the help of Edit button and also you can download the editted pic by the Download button.",
    },
  ],
  testimonials: [
    {
      name: "Parveen Kumar",
      job: "ODI Associate Consultant",
      img: "/parveen.jfif",
      detail:
        "Srijita has done internship technical content writer in doorstepdelhi. She has attitude of never giving up. She will definitely be an asset for the company she would join.",
    },
    {
      name: "Shaista Anjum",
      job: "Full Stack Developer",
      img: "/Shaista.jpeg",
      detail:
        "I've had the pleasure of working closely with Srijita at Freeflow, where she showcased exceptional skills as a React Native developer. Srijita's dedication to her craft, combined with her strong problem-solving abilities, consistently contributed to the success of our projects. Her proactive approach and collaborative mindset make her a valuable asset to any team. I highly recommend Srijita for her technical expertise and professionalism.",
    },
  ],
  contactDetails: {
    location: "Kolkata, India",
    email: "srijitasengupta23@gmail.com"
  },
  socialLinks: [
    {
      path: "https://www.linkedin.com/in/srijita-sengupta-0561a81b5/",
      icon: faLinkedinIn,
    },
    {
      path: "https://twitter.com/srijita_11",
      icon: faXTwitter,
    },
    {
      path: "https://github.com/srijit-ops",
      icon: faGithub,
    },
  ],
};
