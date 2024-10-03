export const navItems = [
  { name: "About", link: "#about" },
  { name: "Projects", link: "#projects" },
  { name: "Testimonials", link: "#testimonials" },
  { name: "Contact", link: "#contact" },
];

export const gridItems = [
  {
    id: 1,
    title: "I am committed to collaboration and open communication for successful development",
    description: "",
    className: "lg:col-span-2 lg:row-span-2 md:col-span-1 md:row-span-1 lg:min-h-[60vh]",
    imgClassName: "w-full h-full opacity-20",
    titleClassName: "justify-start text-left",
    img: "/b1.jpg",
    spareImg: "",
  },
  {
    id: 2,
    title: "I'm flexible with time zones, ensuring a smooth workflow",
    description: "",
    className: "lg:col-span-1 lg:row-span-2 md:col-span-2 md:row-span-1",
    imgClassName: "",
    titleClassName: "justify-start",
    img: "",
    spareImg: "",
  },
  {
    id: 3,
    title: "My tech stack",
    description: "I'm constantly improving",
    className: "lg:col-span-1.5 lg:row-span-1 md:col-span-2 md:row-span-1",
    imgClassName: "opacity-20 h-full w-full",
    titleClassName: "flex justify-between items-start w-full ",
    img: "/stack.jpg",
    spareImg: "",
  },
  {
    id: 4,
    title: "Tech enthusiast driven by a passion for development",
    description: "",
    className: "lg:col-span-1 lg:row-span-1 md:col-span-1 md:row-span-1",
    imgClassName: "w-full h-full opacity-20",
    titleClassName: "justify-start",
    img: "/dev.jpeg",
    spareImg: "bg.svg",
  },
  {
    id: 5,
    title: "Let's team up and bring a project to life!",
    description: "",
    className: "lg:col-span-3 lg:row-span-1 md:col-span-3 md:row-span-1",
    imgClassName: "",
    titleClassName: "justify-center md:max-w-full max-w-60 text-center",
    img: "",
    spareImg: "",
  },
];


export const projects = [
  {
    id: 1,
    title: "PortfolioPilot",
    des: "Desktop tracker for cryptocurrencies and B3 stocks, integrating Web3 and market metrics with dynamic data visualization.",
    img: "/p1.png",
    iconLists: ["/ruby.svg", "/rails.svg", "/js.svg", "/sass.svg", "/postgres.svg", "heroku.svg"],
    link: "https://github.com/adrianhajdin?tab=repositories",
  },
  {
    id: 2,
    title: "Fictional E-Commerce App",
    des: "An e-commerce platform for buying and selling goods, built to demonstrate full CRUD functionality.",
    img: "/p2.png",
    iconLists: ["/ruby.svg", "/rails.svg", "/js.svg", "/sass.svg", "/postgres.svg", "heroku.svg"],
    link: "https://github.com/adrianhajdin/ai_saas_app",
  },
  {
    id: 3,
    title: "Inspirational Web Page",
    des: " homepage with real-time weather, dynamic background, inspirational quotes, and interactive to-do list.",
    img: "/p3.png",
    iconLists: ["/re.svg", "/redux.svg", "/js.svg", "netlify.svg"],
    link: "https://github.com/adrianhajdin/zoom-clone",
  },
];

export const testimonials = [
  {
    quote:
      "Collaborating with Adrian was an absolute pleasure. His professionalism, promptness, and dedication to delivering exceptional results were evident throughout our project. Adrian's enthusiasm for every facet of development truly stands out. If you're seeking to elevate your website and elevate your brand, Adrian is the ideal partner.",
    name: "Michael Johnson",
    title: "Director of AlphaStream Technologies",
  },
  {
    quote:
      "Collaborating with Adrian was an absolute pleasure. His professionalism, promptness, and dedication to delivering exceptional results were evident throughout our project. Adrian's enthusiasm for every facet of development truly stands out. If you're seeking to elevate your website and elevate your brand, Adrian is the ideal partner.",
    name: "Michael Johnson",
    title: "Director of AlphaStream Technologies",
  },
  {
    quote:
      "Collaborating with Adrian was an absolute pleasure. His professionalism, promptness, and dedication to delivering exceptional results were evident throughout our project. Adrian's enthusiasm for every facet of development truly stands out. If you're seeking to elevate your website and elevate your brand, Adrian is the ideal partner.",
    name: "Michael Johnson",
    title: "Director of AlphaStream Technologies",
  },
  {
    quote:
      "Collaborating with Adrian was an absolute pleasure. His professionalism, promptness, and dedication to delivering exceptional results were evident throughout our project. Adrian's enthusiasm for every facet of development truly stands out. If you're seeking to elevate your website and elevate your brand, Adrian is the ideal partner.",
    name: "Michael Johnson",
    title: "Director of AlphaStream Technologies",
  },
  {
    quote:
      "Collaborating with Adrian was an absolute pleasure. His professionalism, promptness, and dedication to delivering exceptional results were evident throughout our project. Adrian's enthusiasm for every facet of development truly stands out. If you're seeking to elevate your website and elevate your brand, Adrian is the ideal partner.",
    name: "Michael Johnson",
    title: "Director of AlphaStream Technologies",
  },
];

export const companies = [
  {
    id: 1,
    name: "cloudinary",
    img: "/cloud.svg",
    nameImg: "/cloudName.svg",
  },
  {
    id: 2,
    name: "appwrite",
    img: "/app.svg",
    nameImg: "/appName.svg",
  },
  {
    id: 3,
    name: "HOSTINGER",
    img: "/host.svg",
    nameImg: "/hostName.svg",
  },
  {
    id: 4,
    name: "stream",
    img: "/s.svg",
    nameImg: "/streamName.svg",
  },
  {
    id: 5,
    name: "docker.",
    img: "/dock.svg",
    nameImg: "/dockerName.svg",
  },
];

export const workExperience = [
  {
    id: 1,
    title: "Frontend Engineer Intern",
    desc: "Assisted in the development of a web-based platform using React.js, enhancing interactivity.",
    className: "md:col-span-2",
    thumbnail: "/exp1.svg",
  },
  {
    id: 2,
    title: "Mobile App Dev - JSM Tech",
    desc: "Designed and developed mobile app for both iOS & Android platforms using React Native.",
    className: "md:col-span-2", // change to md:col-span-2
    thumbnail: "/exp2.svg",
  },
  {
    id: 3,
    title: "Freelance App Dev Project",
    desc: "Led the dev of a mobile app for a client, from initial concept to deployment on app stores.",
    className: "md:col-span-2", // change to md:col-span-2
    thumbnail: "/exp3.svg",
  },
  {
    id: 4,
    title: "Lead Frontend Developer",
    desc: "Developed and maintained user-facing features using modern frontend technologies.",
    className: "md:col-span-2",
    thumbnail: "/exp4.svg",
  },
];

export const socialMedia = [
  {
    id: 1,
    img: "/git.svg",
  },
  {
    id: 2,
    img: "/twit.svg",
  },
  {
    id: 3,
    img: "/link.svg",
  },
];
