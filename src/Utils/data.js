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
import { SiFastapi } from "react-icons/si";
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
        icon: SiFastapi,
        skills: "FastAPI",
        progress: 75,
        type: "backend",
        description: "Experience in building fast, modern, and easy-to-use REST APIs using FastAPI and Python."
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
        id: "08",
        icon: FaPython,
        skills: "Python",
        progress: 100,
        type: "ml-ai",
        description: "Strong programming skills in Python for problem-solving, backend development, scripting, and implementing machine learning and data processing tasks."
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
    // {
    //     id: "16",
    //     icon: SiCanva,
    //     skills: "Canva",
    //     progress: 75,
    //     type: "tools",
    //     description: "Experienced in creating visual content such as posters, presentations, and social media designs using Canva."
    // }
];


import { FaGithub, FaLinkedinIn, FaKaggle } from "react-icons/fa";

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
        title: "Full stack Blogs App using Next JS | Mongo DB, Node JS",
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
        title: "E-Commerce Backend with Express JS",
        imgURL: Project_img_05,
        tags: ['Express JS', 'Node JS', 'MongoDB', 'JavaScript'],
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

export const PROJECT = [
    {
        id: 1,
        title: "Full stack Blogs App using Next JS",
        desc: "This project is a full-stack blogging platform that leverages the power of Next.js for server-side rendering (SSR) and static site generation (SSG). By combining MongoDB for flexible content storage and Firebase for robust authentication, the application provides a seamless experience for both content creators and readers. The UI is crafted with Tailwind CSS, ensuring a mobile-first, professional aesthetic with lightning-fast load times.",
        images: [
        ],
        features: [
            "Post creation, editing, and deletion with rich text formatting.", 
            "User authentication and authorization for secure access to features.", 
            "Responsive design for optimal user experience on various devices.",
            "Integration with MongoDB for efficient data storage and retrieval.",
            "Commenting system for user engagement and interaction on blog posts."
        ],
        technologies: ["Next JS", "Node JS", "JavaScript", "MongoDB", "Firebase", "Tailwind CSS"],
        github: "https://github.com/MadushaKV/Blog-App-FullStack-"
    },
        {
        id: 2,
        title: "Breast Cancer Detection Module",
        desc: "This project involves the development of a highly accurate diagnostic engine using TensorFlow and Python. Instead of analyzing raw images, the model processes structured clinical data-specifically, 30 key features extracted from digitized images of fine needle aspirates (FNA). By identifying subtle patterns in cell nuclei (such as radius, texture, and concavity), the model provides a secondary opinion for medical professionals to aid in early cancer detection.",
        images: [],
        features: [
            "Automatically evaluates morphological features of cell nuclei, including mean radius, perimeter area, smoothness, and fractal dimension.",
            "A built-in preprocessing script that scales disparate clinical measurements into a uniform range, preventing larger values (like 'Area') from dominating the learning process.",
            "Rather than a simple 'Yes/No', the model outputs a probability score, allowing clinicians to see how certain the AI is about its prediction.",
            "Integrated Matplotlib plotting to track Accuracy vs. Loss across training epochs, providing transparency into the model's convergence and stability.",
            "Utilizes Dropout layers and Early Stopping callbacks in TensorFlow to ensure the model generalizes well to new, unseen patient data."
        ],
        technologies: ["Python", "Tensorflow", "ML", "Deep Learning"],
        kaggle: "https://www.kaggle.com/datasets"
    },
        {
        id: 3,
        title: "Smart Car Parking System",
        desc: "This project focuses on building an automated, data-driven parking system that enhances security and operational efficiency. By utilizing an Arduino/Microcontroller ecosystem, the system processes real-time data from Ultrasonic, Load Cell, and LDR sensors to make autonomous decisions. The system not only manages vehicle entry based on specific physical constraints (weight) but also optimizes energy consumption through environment-aware lighting control, demonstrating a complete Smart Building application.",
        images: [],
        features: [
            "Automated Entry: The gate opens automatically when a vehicle is detected, removing the need for manual security or tickets.",
            "Safety Filter: The system blocks heavy vehicles from entering, ensuring only authorized light vehicles can use the parking space.",
            "Auto-Lighting: Users always have a well-lit environment because the lights turn on automatically as soon as it gets dark.",
            "Instant Verification: The system combines weight and presence detection to give an immediate Access Granted or Access Denied response."
        ],
        technologies: ["Arduino", "IOT", "Sensors"],
        github: ""
    },
        {
        id: 4,
        title: "Next Word Prediction Model",
        desc: "This project features a sophisticated Natural Language Processing (NLP) model built with TensorFlow and Keras. By leveraging LSTM (Long Short-Term Memory) layers, the model captures the temporal dependencies and semantic patterns within a text corpus. It transforms raw text into a mathematical representation, allowing it to understand the probability of a word appearing after a specific sequence, effectively mimicking human-like text suggestions.",
        images: [],
        features: [
            "The model analyzes the immediate preceding context to provide the most likely next word.",
            "By recursively feeding the predicted word back into the model, it can complete entire sentences.",
            "To avoid repetitive or boring text, the model can be tuned using Temperature Scaling to provide different variants.",
            "Instead of just one answer, the model generates a probability distribution across the entire vocabulary, allowing it to suggest the Top 3 most likely words simultaneously."
        ],
        technologies: ["Python", "Tensorflow", "ML", "Deep Learning"],
        github: ""
    },
        {
        id: 5,
        title: "E-Commerce Backend with Express JS",
        desc: "A high-performance backend engine designed to power modern retail applications. Built with Node.js and Express, this API follows a RESTful architectural style to ensure scalability and ease of integration. It handles complex business logic, including secure transactional processing and relational-style data management within a flexible MongoDB environment. The system is engineered to provide a seamless bridge between a storefront and a secure database.",
        images: [],
        features: [
            "Robust User Management: Full CRUD operations for managing user accounts and roles.",
            "Secure Authentication: Stateless API protection using JSON Web Tokens (JWT) for secure login sessions.",
            "Comprehensive Product Catalog: Streamlined inventory management allowing administrators to add, update, and remove products.",
            "Advanced Shopping Cart Logic: Real-time logic for adding and removing items with automatic price calculation.",
            "Transactional Security: Optimized order processing flow to ensure data integrity during checkout."
        ],
        technologies: ["Node JS", "Express JS", "Mongo DB", "JWT"],
        github: "https://github.com/MadushaKV/E-Commerce---Backend"
    },
        {
        id: 6,
        title: "Cat And Dog Clasification Module",
        desc: "This project focuses on building an automated image classification system using TensorFlow and Keras. By implementing a multi-layered CNN architecture, the model learns to identify complex visual patterns—from simple edges to distinct anatomical shapes-enabling it to classify images of cats and dogs with a high degree of precision.",
        images: [],
        features: [
            "Real-time Image Prediction: A dedicated inference script that allows users to upload a custom image and receive an instant classification label (Cat or Dog) with a confidence score.",
            "Automated Data Pipeline: Utilized ImageDataGenerator for seamless data loading, automatic rescaling (pixel normalization), and on-the-fly augmentation.",
            "Dynamic Learning Optimization: Integrated the Adam Optimizer and Binary Cross-Entropy loss function to ensure fast convergence and stable training.",
            "Performance Visualization: Includes integrated plotting tools using Matplotlib to visualize training history, helping to identify the optimal number of epochs and monitor for bias/variance issues.",
            "Binary Probability Mapping: Uses a Sigmoid activation function in the final dense layer to output a precise probability, allowing for adjustable classification thresholds."
        ],
        technologies: ['Python', 'Tensorflow', 'ML', 'Deep Learning', 'Keras'],
        github: ""
    },
    {
        id: 7,
        title: "Full Stack E-Commerce Website",
        desc: "A full-stack e-commerce platform built with Angular and FastAPI, featuring a Neon PostgreSQL database. It includes a robust JWT-based 3-role authentication system (Admin, User, Guest) and comprehensive management tools for products, sales, and orders.",
        images: [],
        features: [
            "Roll-based authentication with Admin, User, and Guest roles.",
            "Admin allows product management, sales tracking, and order processing.",
            "User allows browsing products, managing cart, and placing orders.",
            "Guest allows browsing products with limited access to features(Login and Register)",
            "Password reset functionality for user convenience and security.",
        ],
        technologies: ["Angular", "FastAPI","Python","TypeScript","Node JS", "Neon DB | PostgreSQL"],
        github: "https://github.com/MadushaKV/E-Commerce-App-Angular-FastAPI-"
    }
]