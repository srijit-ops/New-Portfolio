import { faGithub, faLinkedinIn, faXTwitter } from '@fortawesome/free-brands-svg-icons';

export const defaultData={
    about:{
        name:"Srijita",
        title:"A frontend developer",
        subtitle:"I develop bhah bhag bhag haha",
        about:"Hi, I'm Srijita, a techgeek, passionate about web development and programming. I'm always madly craving for learning new emerging technologies and building real-world applications. Yeah, got it right! I'm just a regular out of the box developer who knows the subtle art of not giving a bug.",
        image:"/Me.jpeg",
        quote:"They think I'm hiding in the shadows, but I'm the shadows.",
        lottie:"https://lottie.host/502b38fb-d4ef-4b92-a195-14e628ef540c/pM4dgPnehZ.json"
    },
    skills:[
        {
            skill:"HTML",
            logo:"/html.png",
            bg:"#FFF4F2",
            percentage: 90
        },
        {
            skill:"CSS",
            logo:"/css.png",
            bg:"#DDE8EE",
            percentage: 90
        },
        {
            skill:"Bootstrap",
            logo:"/Bootstrap.png",
            bg:"#EFE8FA",
            percentage: 90
        },
        {
            skill:"Tailwind CSS",
            logo:"/tailwind.png",
            bg:"#ccf8ff",
            percentage: 85
        },
        {
            skill:"Figma",
            logo:"/figma.png",
            bg:"#FCECE7",
            percentage: 70
        },{
            skill:"JavaScript",
            logo:"/javascript.png",
            bg:"#FDF7D1",
            percentage: 80
        },{
            skill:"React JS",
            logo:"/react.png",
            bg:"#ECFCFF",
            percentage: 70
        },{
            skill:"Next JS",
            logo:"/next.svg",
            bg:"#d4d4d4",
            percentage: 70
        },{
            skill:"React Native",
            logo:"/react.png",
            bg:"#ECFCFF",
            percentage: 60
        },{
            skill:"Redux",
            logo:"/redux.png",
            bg:"#EFE8FA",
            percentage: 75
        },{
            skill:"Zustand",
            logo:"/zustand.png",
            bg:"#FDF7D1",
            percentage: 70
        },{
            skill:"React Query",
            logo:"/react query.png",
            bg:"#ffe3ea",
            percentage: 70
        },{
            skill:"Framer",
            logo:"/framer motion.svg",
            bg:"#F3DDE4",
            percentage: 60
        },{
            skill:"Github",
            logo:"/github.png",
            bg:"#d4d4d4",
            percentage: 80
        }
    ],
    education:[
        {
            name: 'B.Tech (ECE)',
          place: 'Bengal Institute of Technology',
          grade: '8.5',
          gradeUnit: 'YGPA',
          timeline: '2020-2024',
        },
        {
          name: 'Higher Secondary',
          place: 'Dum Dum Baidyanath Institution',
          grade: '87.4',
          gradeUnit: '%',
          timeline: '2018-2020',
        },
        {
          name: 'Secondary',
          place: 'Dum Dum Baidyanath Institution for Girls',
          grade: '94.7',
          gradeUnit: '%',
          timeline: '2017-2018',
        },
    ],
    experience:[
        {
            place: 'Freeflow Ventures',
            timeline: 'March 2023 - February 2024',
            name: 'Frontend Developer and Designer Intern',
            bulletPoints:[
                    "Built 2 enquiry based E-Commerce apps with 3D visualizerfor sellers & buyerswith React Native & integrated 3rd party libraries"
                ,
                    "Developed the UI & implemented functionalities in their official venture building platform with ReactJS & integrated provided APIs."
                ,
                
                    "Created designs & prototypes for an event management app & it’s admin panel, a debate management platform incl. audience, host, speakers screens, a bike & cab booking app incl. drivers & customers screens in Figma."
                
            ]
          },
          {
            place: 'OkayG Softwares LLP',
            timeline: 'May 2022 - August 2022',
            name: 'Frontend Developer Intern',
            bulletPoints:[
                    "Created the Frontend of an E-Learning website & social media website from scratch using HTML,Bootstrap & JavaScript"
                ,
                    "Created responsive & user engaging websites with userfacing features & reusable components & optimized websites’ performance."
                
            ]
          },
          {
            place: 'Doorstep Delhi',
            timeline: 'May 2021 - August 2021',
            name: 'Technical Writing Intern',
            bulletPoints:[
                    "Built projects using Python, SQL, Machine Learning & Computer Vision."
                ,
                    "Brainstormed & created tech blogs related to the projects."
                
            ]
          }
    ],
    projects:[
        {
            name:"Crypto Saga",
            img:"/crypto-saga.png",
            techstack:["React JS", "Tailwind CSS", "React Query"],
            github:"https://github.com/srijit-ops/Crypto-Saga",
            liveLink:"https://cryptosaga.netlify.app/",
            about:"A responsive website for exploring real-time data on various cryptocurrencies. Users can delve into live price updates, market cap, market rank, valuations, performance metrics, other details presented in an intuitive graphical interface. I’ve integrated Coingecko API & used React Query forfetching live data."
        },
        {
            name:"Netflix Clone",
            img:"/movie-hub.png",
            techstack:["React JS", "Bootstrap", "Firebase"],
            github:"https://github.com/srijit-ops/Netflix-Clone",
            liveLink:"https://its-netflix-clone.netlify.app/",
            about:"Clone of Netflix made with React JS forthe frontend & Firebase for user authentication. I used TMDB API to get movie data, react-router-dom forrouting, react-youtube & movie-trailer packages to show trailers from YouTube."
        },
        {
            name:"Weather Forecaster",
            img:"/weather-app.png",
            techstack:["React JS", "Bootstrap"],
            github:"https://github.com/srijit-ops/Weather-Forecaster",
            liveLink:"https://weather-forecasterr.netlify.app/",
            about:"A platform, built using weather API, to check weatherforecasts incl. humidity, wind speed, highest, lowest & real felt temperature, sunrise, sunset times, hourly forecast & it’s graphical representation"
        },
        {
            name:"Task Tracker",
            img:"/task-tracker.png",
            techstack:["React JS", "Bootstrap"],
            github:"https://github.com/srijit-ops/Weather-Forecaster",
            liveLink:"https://weather-forecasterr.netlify.app/",
            about:"A platform, built using weather API, to check weatherforecasts incl. humidity, wind speed, highest, lowest & real felt temperature, sunrise, sunset times, hourly forecast & it’s graphical representation"
        },
        {
            name:"Melodify",
            img:"/melodify.png",
            techstack:["React JS", "Bootstrap"],
            github:"https://github.com/srijit-ops/Weather-Forecaster",
            liveLink:"https://weather-forecasterr.netlify.app/",
            about:"A platform, built using weather API, to check weatherforecasts incl. humidity, wind speed, highest, lowest & real felt temperature, sunrise, sunset times, hourly forecast & it’s graphical representation"
        },
        {
            name:"Snake Game",
            img:"/snake-game.png",
            techstack:["React JS", "Bootstrap"],
            github:"https://github.com/srijit-ops/Weather-Forecaster",
            liveLink:"https://weather-forecasterr.netlify.app/",
            about:"A platform, built using weather API, to check weatherforecasts incl. humidity, wind speed, highest, lowest & real felt temperature, sunrise, sunset times, hourly forecast & it’s graphical representation"
        },
        {
            name:"Image Wrapper",
            img:"/wrapper.png",
            techstack:["React JS", "Bootstrap"],
            github:"https://github.com/srijit-ops/Weather-Forecaster",
            liveLink:"https://weather-forecasterr.netlify.app/",
            about:"A platform, built using weather API, to check weatherforecasts incl. humidity, wind speed, highest, lowest & real felt temperature, sunrise, sunset times, hourly forecast & it’s graphical representation"
        }
    ],
    testimonials:[
        {
            name:"Parveen Kumar",
            job:"ODI Associate Consultant",
            img:"/parveen.jfif",
            detail:"Srijita has done internship technical content writer in doorstepdelhi. She has attitude of never giving up. She will definitely be an asset for the company she would join."
        },
        {
            name:"Shaista Anjum",
            job:"Full Stack Developer",
            img:"",
            detail:"I've had the pleasure of working closely with Srijita at Freeflow, where she showcased exceptional skills as a React Native developer. Srijita's dedication to her craft, combined with her strong problem-solving abilities, consistently contributed to the success of our projects. Her proactive approach and collaborative mindset make her a valuable asset to any team. I highly recommend Srijita for her technical expertise and professionalism."
        }
    ],
    contactDetails: {
        location: 'Kolkata, India',
        email: 'srijitasengupta23@gmail.com',
        mobile: '+918910896623',
      },
      socialLinks: [
        {
            path: 'https://www.linkedin.com/in/srijita-sengupta-0561a81b5/',
            icon: faLinkedinIn
        },
        {
            path: 'https://twitter.com/srijita_11',
            icon: faXTwitter
        }
        ,
        {
            path: 'https://github.com/srijit-ops',
            icon: faGithub
        }
      ],
}