import {
  mobile,
  backend,
  creator,
  web,
  javascript,
  typescript,
  html,
  css,
  reactjs,
  redux,
  tailwind,
  nodejs,
  mongodb,
  git,
  figma,
  docker,
  threejs,
  deqode,
  nmmun,
  soundStream,
  bicepsJim,
  gameSpace,
} from "../assets";

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "work",
    title: "Work",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const services = [
  {
    title: "Web Developer",
    icon: web,
  },
  {
    title: "React Native Developer",
    icon: mobile,
  },
  {
    title: "Backend Developer",
    icon: backend,
  },
  {
    title: "Content Creator",
    icon: creator,
  },
];

const technologies = [
  {
    name: "HTML 5",
    icon: html,
  },
  {
    name: "CSS 3",
    icon: css,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "TypeScript",
    icon: typescript,
  },
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "Redux Toolkit",
    icon: redux,
  },
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: "Node JS",
    icon: nodejs,
  },
  {
    name: "MongoDB",
    icon: mongodb,
  },
  {
    name: "Three JS",
    icon: threejs,
  },
  {
    name: "git",
    icon: git,
  },
  {
    name: "figma",
    icon: figma,
  },
  {
    name: "docker",
    icon: docker,
  },
];

const experiences = [
  {
    title: "Freelancer",
    company_name: "NMMUN",
    icon: nmmun,
    iconBg: "#383E56",
    date: "June 2021 - October 2021",
    points: [
      "Developed and implemented a full-fledged web application for event registration using the MERN (MongoDB,Express.js, React.js, Node.js) stack",
      "Created a comprehensive dashboard for administrators to access and analyze all registration-related data,enhancing the application’s usability and efficiency",
      "Integrated Razorpay as the payment gateway, ensuring secure and seamless transactions for users during the registration process",
      "Implemented custom authentication using Passport.js, providing a robust and reliable authentication system",
    ],
  },
  {
    title: "FrontEnd Developer",
    company_name: "Deqode",
    icon: deqode,
    iconBg: "#383E56",
    date: "November 2021 - September 2023",
    points: [
      "Developing and maintaining web applications using React.js and other related technologies.",
      "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Participating in code reviews and providing constructive feedback to other developers.",
      "Spearheaded full-stack development efforts for the MOWSSE project, demonstrating proficiency in both frontend and backend technologies",
      "Developed a REST API using NodeJs and MongoDB to store data from learning management systems",
      "Strengthened application security and eliminated potential points of failure in comparator applications.",
      "Engineered mobile app backup and restore functionality, seamlessly integrating Google Drive API and a local file picker, enhancing data security and user convenience.",
      " Developed and optimized multiple app modules to support a projected user base of 5 million.",
      " Collaborated with cross-functional teams, contributing to architectural discussions and enhancing the overall user experience",
    ],
  },
  // {
  //   title: "React Native Developer",
  //   company_name: "Tesla",
  //   icon: tesla,
  //   iconBg: "#E6DEDD",
  //   date: "Jan 2021 - Feb 2022",
  //   points: [
  //     "Developing and maintaining web applications using React.js and other related technologies.",
  //     "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
  //     "Implementing responsive design and ensuring cross-browser compatibility.",
  //     "Participating in code reviews and providing constructive feedback to other developers.",
  //   ],
  // },
  // {
  //   title: "Web Developer",
  //   company_name: "Shopify",
  //   icon: shopify,
  //   iconBg: "#383E56",
  //   date: "Jan 2022 - Jan 2023",
  //   points: [
  //     "Developing and maintaining web applications using React.js and other related technologies.",
  //     "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
  //     "Implementing responsive design and ensuring cross-browser compatibility.",
  //     "Participating in code reviews and providing constructive feedback to other developers.",
  //   ],
  // },
  // {
  //   title: "Full stack Developer",
  //   company_name: "Meta",
  //   icon: meta,
  //   iconBg: "#E6DEDD",
  //   date: "Jan 2023 - Present",
  //   points: [
  //     "Developing and maintaining web applications using React.js and other related technologies.",
  //     "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
  //     "Implementing responsive design and ensuring cross-browser compatibility.",
  //     "Participating in code reviews and providing constructive feedback to other developers.",
  //   ],
  // }
];

const projects = [
  {
    name: "Sound Stream",
    description:
      "A web application that redefines how music enthusiasts connect with their favorite tunes.A curated collection of tracks from various genres, showcasing the potential of a full-fledged streaming platform. where music enthusiasts can dive into an extensive library, curate playlists, and enjoy uninterrupted music streaming",
    tags: [
      {
        name: "next",
        color: "blue-text-gradient",
      },
      {
        name: "supabase",
        color: "green-text-gradient",
      },
      {
        name: "tailwind",
        color: "pink-text-gradient",
      },
    ],
    image: soundStream,
    source_code_link: "https://github.com/Manu-Gupta69/sound-stream",
    live_link: "https://sound-stream-manugupta.vercel.app/",
  },
  {
    name: "Game Space",
    description:
      "I've developed a web-based ecommerce platform specifically crafted for the buying and selling of Steam accounts. Our platform provides a safe and efficient marketplace for gamers to trade their Steam accounts. Users can easily browse listings, communicate with sellers, and make transactions with confidence.",
    tags: [
      {
        name: "nodejs",
        color: "blue-text-gradient",
      },
      {
        name: "ssr",
        color: "green-text-gradient",
      },
      {
        name: "css",
        color: "pink-text-gradient",
      },
      {
        name: "mongodb",
        color: "green-text-gradient",
      },
    ],
    image: gameSpace,
    source_code_link: "https://github.com/Manu-Gupta69/steamshop",
    live_link: "https://steam-shop.onrender.com/home",
  },
  {
    name: "Biceps Jim",
    description:
      "I have developed a web-based gym application that allows users to easily search for and access multiple workout guidance resources. This application provides a user-friendly interface for discovering exercises, and training tips, making it convenient for fitness enthusiasts to find the guidance they need to achieve their fitness goals.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "restapi",
        color: "green-text-gradient",
      },
      {
        name: "scss",
        color: "pink-text-gradient",
      },
    ],
    image: bicepsJim,
    source_code_link: "https://github.com/Manu-Gupta69/biceps-jim",
    live_link: "https://biceps-jim-6p5r.vercel.app",
  },
];

export { services, technologies, experiences, projects };
