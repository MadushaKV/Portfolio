export const MenuLinks = [
    {id: 1, title: "Hero", offset: -100, link: "hero"},
    {id: 2, title: "Skills", offset: -80, link: "skills"},
    {id: 3, title: "About", offset: -80, link: "about",},
    {id: 4, title: "Projects", offset: -80, link: "projects"},
    {id: 5, title: "Contact", offset: -80, link: "contact"}
];

export const STATS = [
    {id: "01", count: "00", label: `Year of \nExperiance.`},
    {id: "02", count: "00", label: `Certification \nEarned.`},
    {id: "03", count: "00", label: `Projects \nCompleted.`},
    {id: "04", count: "00", label: `Happy \nClients.`},
]

export const SKILLS_TAB = [
    {id: "01", label:"All", value:"all"},
    {id: "02", label:"Frontend", value:"frontend"},
    {id: "03", label:"Backend", value:"backend"},
    {id: "04", label:"Tools", value:"tools"},
    {id: "05", label:"AI/ML", value:"ml-ai"}
];


import { FaReact } from "react-icons/fa";
import { SiExpress, SiKaggle } from "react-icons/si"; 
import { SiBootstrap } from "react-icons/si";
import { FaAngular } from "react-icons/fa";
import { FaPython } from "react-icons/fa";
import { SiPytorch } from "react-icons/si";
import { SiTensorflow } from "react-icons/si";
import { CgFigma } from "react-icons/cg";
import { SiTailwindcss } from "react-icons/si";
import { SiPostman } from "react-icons/si";
import { SiCanva } from "react-icons/si";
import { SiDjango } from "react-icons/si";
import { RiNextjsFill } from "react-icons/ri";
import { TbBrandThreejs } from "react-icons/tb";

export const SKILLS = [
    {
        id: "01",
        icon: FaReact,
        skills: "React JS",
        progress: 80,
        type: "frontend",
        description: "Experience in building scalable, component-driven web applications using React JS. Familiar with hooks, reusable components, state management, and responsive UI development."
    },
    {
        id: "02",
        icon: FaAngular,
        skills: "Angular",
        progress: 90,
        type: "frontend",
        description: "Experience in developing dynamic single-page applications using Angular, including component-based architecture, services, routing, and form handling."
    },
    {
        id: "03",
        icon: RiNextjsFill,
        skills: "Next JS Front-End",
        progress: 80,
        type: "frontend",
        description: "Skilled in building modern front-end applications using Next.js with optimized performance, routing, and responsive UI design."
    },
    {
        id: "04",
        icon: TbBrandThreejs,
        skills: "Three JS",
        progress: 75,
        type: "frontend",
        description: "Basic experience in creating interactive 3D graphics and animations for the web using Three.js and integrating them into web projects."
    },
    {
        id: "05",
        icon: SiExpress,
        skills: "Express JS",
        progress: 80,
        type: "backend",
        description: "Hands-on experience in building RESTful APIs using Express JS, handling routing, middleware, authentication, and backend logic for web applications."
    },
    {
        id: "06",
        icon: SiDjango,
        skills: "Django",
        progress: 70,
        type: "backend",
        description: "Familiar with developing backend applications using Django, including models, views, authentication, and database integration."
    },
    {
        id: "07",
        icon: RiNextjsFill,
        skills: "Next JS Back-End",
        progress: 80,
        type: "backend",
        description: "Experience using Next.js API routes to handle backend logic, server-side rendering, and integration with databases and external APIs."
    },
    {
        id: "08",
        icon: FaPython,
        skills: "Python",
        progress: 100,
        type: "ml-ai",
        description: "Strong programming skills in Python for problem-solving, backend development, scripting, and implementing machine learning and data processing tasks."
    },
    {
        id: "09",
        icon: SiPytorch,
        skills: "PyTorch",
        progress: 80,
        type: "ml-ai",
        description: "Hands-on experience with PyTorch for building and training deep learning models, focusing on image processing and machine learning projects."
    },
    {
        id: "10",
        icon: SiTensorflow,
        skills: "TensorFlow",
        progress: 80,
        type: "ml-ai",
        description: "Experience in implementing and training machine learning and deep learning models using TensorFlow for academic and project-based applications."
    },
    {
        id: "11",
        icon: SiKaggle,
        skills: "Kaggle",
        progress: 70,
        type: "ml-ai",
        description: "Experience working with datasets, notebooks, and machine learning workflows on Kaggle for practice and academic projects."
    },
    {
        id: "12",
        icon: SiTailwindcss,
        skills: "Tailwind CSS",
        progress: 80,
        type: "tools",
        description: "Experience using Tailwind CSS to create modern, responsive, and customizable user interfaces with utility-first styling."
    },
    {
        id: "13",
        icon: SiBootstrap,
        skills: "Bootstrap",
        progress: 100,
        type: "tools",
        description: "Proficient in using Bootstrap to rapidly develop responsive and consistent user interfaces with prebuilt components and grid systems."
    },
    {
        id: "14",
        icon: CgFigma,
        skills: "Figma",
        progress: 80,
        type: "tools",
        description: "Skilled in designing clean and user-friendly UI/UX layouts using Figma, including wireframes, prototypes, and design collaboration."
    },
    {
        id: "15",
        icon: SiPostman,
        skills: "Postman",
        progress: 90,
        type: "tools",
        description: "Proficient in testing, debugging, and documenting REST APIs using Postman to ensure proper backend and frontend integration."
    },
    {
        id: "16",
        icon: SiCanva,
        skills: "Canva",
        progress: 75,
        type: "tools",
        description: "Experienced in creating visual content such as posters, presentations, and social media designs using Canva."
    }
];


import { FaGithub, FaLinkedinIn, FaTwitter, FaFacebookF, FaInstagram, FaKaggle } from "react-icons/fa";

export const AboutMe = {
        content: `Hello! I am a passionate web developer with a strong foundation in both front-end and back-end technologies.
        My journey in web development has equipped me with the skills to create dynamic and responsive web applications. 
        I thrive on challenges and continuously seek opportunities to enhance my skills and knowledge in this ever-evolving field.`,

        socialLinks: [
            {id: "01", icon: FaGithub , link: "https://github.com/MadushaKV"},
            {id: "02", icon: FaLinkedinIn , link: "https://www.linkedin.com/in/madusha-kavinda"},
            //{id: "03", icon: FaTwitter , link: "https://twitter.com/MadushaKavinda"},
            {id: "03", icon: FaKaggle , link: "https://www.kaggle.com/madushakv"},
            //{id: "05", icon: FaInstagram , link: "https://www.instagram.com/madushakavinda/"},
        ],

        email: 'madushakv2002@gmail.com',
        phone: '071-1234567',
        webSite: 'https://github.com/MadushaKV',
};

import Project_img_01 from "../assets/Projects/Blog.jpg";
import Project_img_02 from "../assets/Projects/Cancer.jpg";
import Project_img_03 from "../assets/Projects/IOT.jpg";
import Project_img_04 from "../assets/Projects/Online-Shopping.jpg";
import Project_img_05 from "../assets/Projects/Hospital mng.jpg";
import Project_img_06 from "../assets/Projects/Cat n Dog.jpg";
import Project_img_07 from "../assets/Projects/Word Pred.jpg";


export const PROJECTS = [
    {
        id: 1,
        title: "Full stack notes App using Next JS | Mongo DB, Node JS",
        imgURL: Project_img_01,
        tags: ['Next JS', 'Node JS', 'Mongo DB', 'Firebase'],
    },
    {
        id: 2,
        title: "Breast Cancer Detection Module | Python, Tensorflow, ML, Deep Learning",
        imgURL: Project_img_02,
        tags: ['Python', 'Tensorflow', 'ML', 'Deep Learning'],
    },
    {
        id: 3,
        title: "Smart Car Parking System | Arduino, Sensors, IOT",
        imgURL: Project_img_03,
        tags: ['Arduino', 'IOT', 'Sensors'],
    },
    {
        id: 4,
        title: "Next Word Prediction Model | Python, Tensorflow, ML, Deep Learning",
        imgURL: Project_img_07,
        tags: ['Python', 'Tensorflow', 'ML', 'Deep Learning'],
    },
    {
        id: 5,
        title: "Hospital Website (Frontend) | React JS, Bootstrap, Css, Responsive Design",
        imgURL: Project_img_05,
        tags: ['React JS', 'Bootstrap', 'CSS'],
    },
    {
        id: 6,
        title: "Cat And Dog Clasification Module | Python, Tensorflow, ML, Deep Learning",
        imgURL: Project_img_06,
        tags: ['Python', 'Tensorflow', 'ML', 'Deep Learning'],
    },
     {
        id: 7,
        title: "Full Stack E-Commerce Website and Android App | Angular, Express JS, Mongo DB, Android Development",
        imgURL: Project_img_04,
        tags: ['Angular', 'Express JS', 'Mongo DB', 'Android Development'],
    }

]