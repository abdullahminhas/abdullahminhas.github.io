import { Icons } from "@/components/icons";
import Navbar from "@/components/navbar";
import { Testimonial10 } from "@/components/testimonials";
import { HomeIcon, FileText } from "lucide-react";

export const DATA = {
  name: "Abdullah Sajjad",
  initials: "AB",
  url: "https://abdullahminhas.io",
  location: "Southampton, UK",
  locationLink: "https://www.google.com/maps/place/sanfrancisco",
  description:
    "Web dev with 3+ years crafting fast, user-first websites. Obsessed with clean code & great UX. Building, learning, leveling up, one project at a time.",
  summary:
    "Full Stack JavaScript Developer with expertise in MERN Stack, Next.js, and TypeScript. I build scalable, high-performance web apps that blend clean code with seamless user experiences. From modernizing legacy systems to creating interactive dashboards and tools, I turn complex ideas into intuitive, impactful solutions. Currently pursuing an MSc in Computer Science at the University of Portsmouth.",
  avatarUrl: "./me.jpg",
  skills: [
    "React",
    "Next.js",
    "Express.js",
    "Node.js",
    "Python",
    "C++",
    "React Native",
    "Tailwind",
    "Shadcn",
    "Mongo DB",
  ],
  navbar: [
    // { href: "/", icon: HomeIcon, label: "Home" },
    { href: "./Abdullah Resume.pdf", icon: FileText, label: "Resume" },
    // { href: "/blog", icon: NotebookIcon, label: "Blog" },
  ],
  contact: {
    email: "aminhas1996@gmail.com",
    tel: "+447424947889",
    social: {
      GitHub: {
        name: "GitHub",
        url: "https://github.com/abdullahminhas",
        icon: Icons.github,
        navbar: true,
      },
      LinkedIn: {
        name: "LinkedIn",
        url: "https://www.linkedin.com/in/abdullahminhas/",
        icon: Icons.linkedin,
        navbar: true,
      },
      X: {
        name: "X",
        url: "https://x.com/mabdullahminhas",
        icon: Icons.x,
        navbar: false,
      },
      Youtube: {
        name: "Youtube",
        url: "https://www.youtube.com/@abdullahminhas7826",
        icon: Icons.youtube,
        navbar: false,
      },
      email: {
        name: "Send Email",
        url: "mailto:aminhas1996@gmail.com",
        icon: Icons.email,
        navbar: true,
      },
    },
  },

  work: [
    {
      company: "Defence Solutions & Systems",
      href: "https://dsstech.com.pk/",
      badges: [],
      location: "Islamabad, PK",
      title: "MERN Stack Engineer",
      logoUrl: "./dss.png",
      start: "2021",
      end: "2025",
      description:
        "Successfully led the migration of a legacy Knockout.js application to Angular.js, implementing reusable components that boosted performance, scalability, and maintainability while reducing development time. Designed and launched a dynamic React.js blog site with a responsive, user-focused interface, increasing engagement by nearly 30%. Delivered accurate, visually compelling stakeholder reports using Report.js, and built multiple real-time, interactive dashboards in Next.js to enhance data visualization and support data-driven decision-making. Thrived in an Agile environment, contributing to stand-ups, sprint planning, and code reviews, fostering a culture of collaboration, innovation, and continuous improvement.",
    },
    {
      company: "Buzzwaretech",
      badges: [],
      href: "https://buzzwaretech.com/",
      location: "Islamabad, PK",
      title: "Front End Engineer",
      logoUrl: "./buzzware.png",
      start: "2021",
      end: "2021",
      description:
        "Designed and developed fully responsive websites using HTML, CSS, and JavaScript, delivering clean, user-friendly interfaces that enhanced usability and accessibility. Partnered closely with UI/UX designers to translate concepts into intuitive layouts, ensuring seamless user journeys. Achieved cross-browser compatibility and mobile responsiveness, optimizing performance across devices. Integrated RESTful APIs to connect front-end applications with back-end services, enabling dynamic content and improved functionality.",
    },
    {
      company: "Al Qaim Foundation",
      href: "https://alqaimfoundation.com/",
      badges: [],
      location: "Gujranwala, PK",
      title: "Web Developer",
      logoUrl: "./alqaim.jpeg",
      start: "02/2020",
      end: "05/2020",
      description:
        "Created a responsive website and developed engaging content for social media campaigns, enhancing brand visibility and user interaction. ",
    },
    {
      company: "Perfect For Tech",
      href: "#",
      badges: [],
      location: "Remote",
      title: "MERN Developer",
      logoUrl: "./perfect-tech.png",
      start: "January 2019",
      end: "April 2019",
      description:
        "Utilized Next.js, Tailwind CSS, and Shadcn UI to develop multiple projects, including 'Toolar' which featured various tools such as word count and text formatting. ",
    },
    {
      company: "Adroit Light Solutions",
      href: "https://adroitlight.com/",
      badges: [],
      location: "Remote",
      title: "Front End Developer",
      logoUrl: "./als.jpeg",
      start: "January 2018",
      end: "April 2018",
      description:
        "Developed beautiful user interfaces as a Front-End Developer, focusing on creating responsive designs to enhance user experience.",
    },
    // {
    //   company: "Mitre Media",
    //   href: "https://mitremedia.com/",
    //   badges: [],
    //   location: "Toronto, ON",
    //   title: "Software Engineer",
    //   logoUrl: "/mitremedia.png",
    //   start: "May 2017",
    //   end: "August 2017",
    //   description:
    //     "Designed and implemented a robust password encryption and browser cookie storage system in Ruby on Rails. Leveraged the Yahoo finance API to develop the dividend.com equity screener",
    // },
  ],
  education: [
    {
      school: "University of Portsmouth",
      href: "https://www.port.ac.uk/",
      degree: "Master of Science in Computer Science",
      logoUrl: "./uop.png",
      start: "2025",
      end: "Present",
    },
    {
      school: "Bahria University",
      href: "https://uwaterloo.ca",
      degree: "Bachelors of Science in Information Technology",
      logoUrl: "./bahria.jpeg",
      start: "2016",
      end: "2020",
    },
    {
      school: "Punjab College",
      href: "https://pgc.edu/",
      degree: "Faculty of Science in Pre-Engineering",
      logoUrl: "./punjab.jpeg",
      start: "2013",
      end: "2015",
    },
    // {
    //   school: "International Baccalaureate",
    //   href: "https://ibo.org",
    //   degree: "IB Diploma",
    //   logoUrl: "/ib.png",
    //   start: "2012",
    //   end: "2016",
    // },
  ],
  certifications: [
    {
      school: "Udemy",
      href: "https://www.udemy.com/certificate/UC-c29d87ca-0b3f-4427-b4ca-c3a2de360d2b/",
      title: "React - The Complete Guide 2023 (incl. React Router & Redux)",
      logoUrl: "./udemy.svg",
      date: "12/2023",
    },
    {
      school: "Udemy",
      href: "https://www.udemy.com/certificate/UC-03ef238f-4990-48fa-9d0a-a7d3433cf9ec/",
      title: "Node With React - Full Stack Web Development",
      logoUrl: "./udemy.svg",
      date: "07/2023",
    },
    {
      school: "Udemy",
      href: "./SEO certificate.jpg",
      title: "Search Engine Optimization",
      logoUrl: "./udemy.svg",
      date: "03/2020",
    },
    {
      school: "Soft Solutions",
      href: "./oop.jpg",
      title: "Object Oriented Programming (C++)",
      logoUrl: "./softsolutions.jpeg",
      date: "09/2017",
    },
    // {
    //   school: "International Baccalaureate",
    //   href: "https://ibo.org",
    //   degree: "IB Diploma",
    //   logoUrl: "/ib.png",
    //   start: "2012",
    //   end: "2016",
    // },
  ],
  projects: [
    {
      title: "Materialix",
      href: "https://abdullahminhas.github.io/Materialix/",
      // dates: "Jan 2024 - Feb 2024",
      dates: "",
      active: true,
      description:
        "I built a frontend project using Tailwind CSS, Radix UI, and a Material 3 inspired component library. It delivers accessible, theme-able, and reusable UI components with a clean, modern aesthetic and consistent design principles.",
      technologies: [
        "Next.js",
        "React",
        "Tailwind CSS",
        "Radix UI",
        "Javascript",
        "Material Design 3 (M3)",
      ],
      links: [
        {
          type: "Website",
          href: "https://abdullahminhas.github.io/Materialix/",
          icon: <Icons.globe className="size-3" />,
        },
        {
          type: "Source",
          href: "https://github.com/abdullahminhas/Materialix",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "./website 3.png",
      video: "",
    },
    {
      title: "hussainabdullah.pk",
      href: "https://hussainabdullah.pk",
      // dates: "Jan 2024 - Feb 2024",
      dates: "",
      active: true,
      description:
        "Led a full-scale eCommerce project, creating a custom-designed Shopify website that perfectly matched the brand’s identity, managing social media presence, and running high-impact ad campaigns that boosted engagement and sales.",
      technologies: [
        "Shopify",
        "TailwindCSS",
        "Stripe",
        "Google Analytics",
        "Meta Pixel",
      ],
      links: [
        {
          type: "Website",
          href: "https://hussainabdullah.pk",
          icon: <Icons.globe className="size-3" />,
        },
      ],
      image: "./website 1.png",
      video: "",
    },
    {
      title: "FKS Building Services",
      href: "https://fksbuildingservice.com",
      dates: "",
      active: true,
      description:
        "Built the **FKS** website using **Next.js**, **Tailwind CSS**, and **Radix UI** for a fast, responsive, and accessible interface, and deployed it on a **cloud-based VPS** for reliable performance.",
      technologies: [
        "Next.js",
        "React",
        "Javascript",
        "TailwindCSS",
        "Shadcn UI",
        "Radix",
        "VPS",
      ],
      links: [
        {
          type: "Website",
          href: "https://fksbuildingservice.com",
          icon: <Icons.globe className="size-3" />,
        },
      ],
      image: "./website 2.png",
      video: "",
    },
    // {
    //   title: "llm.report",
    //   href: "https://llm.report",
    //   dates: "April 2023 - September 2023",
    //   active: true,
    //   description:
    //     "Developed an open-source logging and analytics platform for OpenAI: Log your ChatGPT API requests, analyze costs, and improve your prompts.",
    //   technologies: [
    //     "Next.js",
    //     "Typescript",
    //     "PostgreSQL",
    //     "Prisma",
    //     "TailwindCSS",
    //     "Shadcn UI",
    //     "Magic UI",
    //     "Stripe",
    //     "Cloudflare Workers",
    //   ],
    //   links: [
    //     {
    //       type: "Website",
    //       href: "https://llm.report",
    //       icon: <Icons.globe className="size-3" />,
    //     },
    //     {
    //       type: "Source",
    //       href: "https://github.com/dillionverma/llm.report",
    //       icon: <Icons.github className="size-3" />,
    //     },
    //   ],
    //   image: "",
    //   video: "https://cdn.llm.report/openai-demo.mp4",
    // },
    // {
    //   title: "Automatic Chat",
    //   href: "https://automatic.chat",
    //   dates: "April 2023 - March 2024",
    //   active: true,
    //   description:
    //     "Developed an AI Customer Support Chatbot which automatically responds to customer support tickets using the latest GPT models.",
    //   technologies: [
    //     "Next.js",
    //     "Typescript",
    //     "PostgreSQL",
    //     "Prisma",
    //     "TailwindCSS",
    //     "Shadcn UI",
    //     "Magic UI",
    //     "Stripe",
    //     "Cloudflare Workers",
    //   ],
    //   links: [
    //     {
    //       type: "Website",
    //       href: "https://automatic.chat",
    //       icon: <Icons.globe className="size-3" />,
    //     },
    //   ],
    //   image: "",
    //   video:
    //     "https://pub-83c5db439b40468498f97946200806f7.r2.dev/automatic-chat.mp4",
    // },
  ],
  hackathons: [
    {
      title: "Hack Western 5",
      dates: "November 23rd - 25th, 2018",
      location: "London, Ontario",
      description:
        "Developed a mobile application which delivered bedtime stories to children using augmented reality.",
      image:
        "https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/hack-western.png",
      mlh: "https://s3.amazonaws.com/logged-assets/trust-badge/2019/mlh-trust-badge-2019-white.svg",
      links: [],
    },
    {
      title: "Hack The North",
      dates: "September 14th - 16th, 2018",
      location: "Waterloo, Ontario",
      description:
        "Developed a mobile application which delivers university campus wide events in real time to all students.",
      image:
        "https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/hack-the-north.png",
      mlh: "https://s3.amazonaws.com/logged-assets/trust-badge/2019/mlh-trust-badge-2019-white.svg",
      links: [],
    },
    {
      title: "FirstNet Public Safety Hackathon",
      dates: "March 23rd - 24th, 2018",
      location: "San Francisco, California",
      description:
        "Developed a mobile application which communcicates a victims medical data from inside an ambulance to doctors at hospital.",
      icon: "public",
      image:
        "https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/firstnet.png",
      links: [],
    },
    {
      title: "DeveloperWeek Hackathon",
      dates: "February 3rd - 4th, 2018",
      location: "San Francisco, California",
      description:
        "Developed a web application which aggregates social media data regarding cryptocurrencies and predicts future prices.",
      image:
        "https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/developer-week.jpg",
      links: [
        {
          title: "Github",
          icon: <Icons.github className="h-4 w-4" />,
          href: "https://github.com/cryptotrends/cryptotrends",
        },
      ],
    },
    {
      title: "HackDavis",
      dates: "January 20th - 21st, 2018",
      location: "Davis, California",
      description:
        "Developed a mobile application which allocates a daily carbon emission allowance to users to move towards a sustainable environment.",
      image:
        "https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/hack-davis.png",
      win: "Best Data Hack",
      mlh: "https://s3.amazonaws.com/logged-assets/trust-badge/2018/white.svg",
      links: [
        {
          title: "Devpost",
          icon: <Icons.globe className="h-4 w-4" />,
          href: "https://devpost.com/software/my6footprint",
        },
        {
          title: "ML",
          icon: <Icons.github className="h-4 w-4" />,
          href: "https://github.com/Wallet6/my6footprint-machine-learning",
        },
        {
          title: "iOS",
          icon: <Icons.github className="h-4 w-4" />,
          href: "https://github.com/Wallet6/CarbonWallet",
        },
        {
          title: "Server",
          icon: <Icons.github className="h-4 w-4" />,
          href: "https://github.com/Wallet6/wallet6-server",
        },
      ],
    },
    {
      title: "ETH Waterloo",
      dates: "October 13th - 15th, 2017",
      location: "Waterloo, Ontario",
      description:
        "Developed a blockchain application for doctors and pharmacists to perform trustless transactions and prevent overdosage in patients.",
      image:
        "https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/eth-waterloo.png",
      links: [
        {
          title: "Organization",
          icon: <Icons.github className="h-4 w-4" />,
          href: "https://github.com/ethdocnet",
        },
      ],
    },
    {
      title: "Hack The North",
      dates: "September 15th - 17th, 2017",
      location: "Waterloo, Ontario",
      description:
        "Developed a virtual reality application allowing users to see themselves in third person.",
      image:
        "https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/hack-the-north.png",
      mlh: "https://s3.amazonaws.com/logged-assets/trust-badge/2017/white.svg",
      links: [
        {
          title: "Streamer Source",
          icon: <Icons.github className="h-4 w-4" />,
          href: "https://github.com/justinmichaud/htn2017",
        },
        {
          title: "Client Source",
          icon: <Icons.github className="h-4 w-4" />,
          href: "https://github.com/dillionverma/RTSPClient",
        },
      ],
    },
    {
      title: "Hack The 6ix",
      dates: "August 26th - 27th, 2017",
      location: "Toronto, Ontario",
      description:
        "Developed an open platform for people shipping items to same place to combine shipping costs and save money.",
      image:
        "https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/hack-the-6ix.jpg",
      mlh: "https://s3.amazonaws.com/logged-assets/trust-badge/2017/white.svg",
      links: [
        {
          title: "Source",
          icon: <Icons.github className="h-4 w-4" />,
          href: "https://github.com/ShareShip/ShareShip",
        },
        {
          title: "Site",
          icon: <Icons.globe className="h-4 w-4" />,
          href: "https://share-ship.herokuapp.com/",
        },
      ],
    },
    {
      title: "Stupid Hack Toronto",
      dates: "July 23rd, 2017",
      location: "Toronto, Ontario",
      description:
        "Developed a chrome extension which tracks which facebook profiles you have visited and immediately texts your girlfriend if you visited another girls page.",
      image:
        "https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/stupid-hackathon.png",
      links: [
        {
          title: "Source",
          icon: <Icons.github className="h-4 w-4" />,
          href: "https://github.com/nsagirlfriend/nsagirlfriend",
        },
      ],
    },
    {
      title: "Global AI Hackathon - Toronto",
      dates: "June 23rd - 25th, 2017",
      location: "Toronto, Ontario",
      description:
        "Developed a python library which can be imported to any python game and change difficulty of the game based on real time emotion of player. Uses OpenCV and webcam for facial recognition, and a custom Machine Learning Model trained on a [Kaggle Emotion Dataset](https://www.kaggle.com/c/challenges-in-representation-learning-facial-expression-recognition-challenge/leaderboard) using [Tensorflow](https://www.tensorflow.org/Tensorflow) and [Keras](https://keras.io/). This project recieved 1st place prize at the Global AI Hackathon - Toronto and was also invited to demo at [NextAI Canada](https://www.nextcanada.com/next-ai).",
      image:
        "https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/global-ai-hackathon.jpg",
      win: "1st Place Winner",
      links: [
        {
          title: "Article",
          icon: <Icons.globe className="h-4 w-4" />,
          href: "https://syncedreview.com/2017/06/26/global-ai-hackathon-in-toronto/",
        },
        {
          title: "Source",
          icon: <Icons.github className="h-4 w-4" />,
          href: "https://github.com/TinySamosas/",
        },
      ],
    },
    {
      title: "McGill AI for Social Innovation Hackathon",
      dates: "June 17th - 18th, 2017",
      location: "Montreal, Quebec",
      description:
        "Developed realtime facial microexpression analyzer using AI",
      image:
        "https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/ai-for-social-good.jpg",
      links: [],
    },
    {
      title: "Open Source Circular Economy Days Hackathon",
      dates: "June 10th, 2017",
      location: "Toronto, Ontario",
      description:
        "Developed a custom admin interface for food waste startup <a href='http://genecis.co/'>Genecis</a> to manage their data and provide analytics.",
      image:
        "https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/open-source-circular-economy-days.jpg",
      win: "1st Place Winner",
      links: [
        {
          title: "Source",
          icon: <Icons.github className="h-4 w-4" />,
          href: "https://github.com/dillionverma/genecis",
        },
      ],
    },
    {
      title: "Make School's Student App Competition 2017",
      dates: "May 19th - 21st, 2017",
      location: "International",
      description: "Improved PocketDoc and submitted to online competition",
      image:
        "https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/make-school-hackathon.png",
      win: "Top 10 Finalist | Honourable Mention",
      links: [
        {
          title: "Medium Article",
          icon: <Icons.globe className="h-4 w-4" />,
          href: "https://medium.com/make-school/the-winners-of-make-schools-student-app-competition-2017-a6b0e72f190a",
        },
        {
          title: "Devpost",
          icon: <Icons.globe className="h-4 w-4" />,
          href: "https://devpost.com/software/pocketdoc-react-native",
        },
        {
          title: "YouTube",
          icon: <Icons.youtube className="h-4 w-4" />,
          href: "https://www.youtube.com/watch?v=XwFdn5Rmx68",
        },
        {
          title: "Source",
          icon: <Icons.github className="h-4 w-4" />,
          href: "https://github.com/dillionverma/pocketdoc-react-native",
        },
      ],
    },
    {
      title: "HackMining",
      dates: "May 12th - 14th, 2017",
      location: "Toronto, Ontario",
      description: "Developed neural network to optimize a mining process",
      image:
        "https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/hack-mining.png",
      links: [],
    },
    {
      title: "Waterloo Equithon",
      dates: "May 5th - 7th, 2017",
      location: "Waterloo, Ontario",
      description:
        "Developed Pocketdoc, an app in which you take a picture of a physical wound, and the app returns common solutions or cures to the injuries or diseases.",
      image:
        "https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/waterloo-equithon.png",
      links: [
        {
          title: "Devpost",
          icon: <Icons.globe className="h-4 w-4" />,
          href: "https://devpost.com/software/pocketdoc-react-native",
        },
        {
          title: "YouTube",
          icon: <Icons.youtube className="h-4 w-4" />,
          href: "https://www.youtube.com/watch?v=XwFdn5Rmx68",
        },
        {
          title: "Source",
          icon: <Icons.github className="h-4 w-4" />,
          href: "https://github.com/dillionverma/pocketdoc-react-native",
        },
      ],
    },
    {
      title: "SpaceApps Waterloo",
      dates: "April 28th - 30th, 2017",
      location: "Waterloo, Ontario",
      description:
        "Developed Earthwatch, a web application which allows users in a plane to virtually see important points of interest about the world below them. They can even choose to fly away from their route and then fly back if they choose. Special thanks to CesiumJS for providing open source world and plane models.",
      image:
        "https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/space-apps.png",
      links: [
        {
          title: "Source",
          icon: <Icons.github className="h-4 w-4" />,
          href: "https://github.com/dillionverma/earthwatch",
        },
      ],
    },
    {
      title: "MHacks 9",
      dates: "March 24th - 26th, 2017",
      location: "Ann Arbor, Michigan",
      description:
        "Developed Super Graphic Air Traffic, a VR website made to introduce people to the world of air traffic controlling. This project was built completely using THREE.js as well as a node backend server.",
      image:
        "https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/mhacks-9.png",
      mlh: "https://s3.amazonaws.com/logged-assets/trust-badge/2017/white.svg",
      links: [
        {
          title: "Source",
          icon: <Icons.github className="h-4 w-4" />,
          href: "https://github.com/dillionverma/threejs-planes",
        },
      ],
    },
    {
      title: "StartHacks I",
      dates: "March 4th - 5th, 2017",
      location: "Waterloo, Ontario",
      description:
        "Developed at StartHacks 2017, Recipic is a mobile app which allows you to take pictures of ingredients around your house, and it will recognize those ingredients using ClarifAI image recognition API and return possible recipes to make. Recipic recieved 1st place at the hackathon for best pitch and hack.",
      image:
        "https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/starthacks.png",
      win: "1st Place Winner",
      mlh: "https://s3.amazonaws.com/logged-assets/trust-badge/2017/white.svg",
      links: [
        {
          title: "Source (Mobile)",
          icon: <Icons.github className="h-4 w-4" />,
          href: "https://github.com/mattBlackDesign/recipic-ionic",
        },
        {
          title: "Source (Server)",
          icon: <Icons.github className="h-4 w-4" />,
          href: "https://github.com/mattBlackDesign/recipic-rails",
        },
      ],
    },
    {
      title: "QHacks II",
      dates: "February 3rd - 5th, 2017",
      location: "Kingston, Ontario",
      description:
        "Developed a mobile game which enables city-wide manhunt with random lobbies",
      image:
        "https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/qhacks.png",
      mlh: "https://s3.amazonaws.com/logged-assets/trust-badge/2017/white.svg",
      links: [
        {
          title: "Source (Mobile)",
          icon: <Icons.github className="h-4 w-4" />,
          href: "https://github.com/dillionverma/human-huntr-react-native",
        },
        {
          title: "Source (API)",
          icon: <Icons.github className="h-4 w-4" />,
          href: "https://github.com/mattBlackDesign/human-huntr-rails",
        },
      ],
    },
    {
      title: "Terrible Hacks V",
      dates: "November 26th, 2016",
      location: "Waterloo, Ontario",
      description:
        "Developed a mock of Windows 11 with interesting notifications and functionality",
      image:
        "https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/terrible-hacks-v.png",
      links: [
        {
          title: "Source",
          icon: <Icons.github className="h-4 w-4" />,
          href: "https://github.com/justinmichaud/TerribleHacks2016-Windows11",
        },
      ],
    },
    {
      title: "Portal Hackathon",
      dates: "October 29, 2016",
      location: "Kingston, Ontario",
      description:
        "Developed an internal widget for uploading assignments using Waterloo's portal app",
      image:
        "https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/portal-hackathon.png",
      links: [
        {
          title: "Source",
          icon: <Icons.github className="h-4 w-4" />,
          href: "https://github.com/UWPortalSDK/crowmark",
        },
      ],
    },
  ],
  testimonials: [
    {
      quote:
        "An excellent professional with above-average knowledge, good English, and quick responses. Delivered very fast. I will definitely reach out to him again.",
      author: {
        name: "m_ahmad_shakeel",
        rating: 5,
        avatar: {
          src: "./m_ahmad_shakeel.webp",
          alt: "m_ahmad_shakeel",
        },
      },
      link: "https://www.fiverr.com/mabdullahminhas"
    },
    {
      quote:
        "Excellent MERN full-stack developer! Delivered custom full-stack web development exactly as requested—clean, responsive, and fully functional, frontend to backend. Completed on time with great communication and attention to detail. Highly recommend this MERN stack expert for scalable, high-performance web applications! 💯",
      author: {
        name: "apkators",
        rating: 5,
        avatar: {
          src: "./apkators.webp",
          alt: "apkators",
        },
      },
      link: "https://www.fiverr.com/mabdullahminhas"
    },
  ],
} as const;
