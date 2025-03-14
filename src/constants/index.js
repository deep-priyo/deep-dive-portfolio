export const navLinks = [
    {
        id: 1,
        name: 'Home',
        href: '#home',
    },
    {
        id: 2,
        name: 'About',
        href: '#about',
    },
    {
        id: 3,
        name: 'Work',
        href: '#work',
    },
    {
        id: 4,
        name: 'Contact',
        href: '#contact',
    },
];

export const clientReviews = [
    {
        id: 1,
        name: 'Emily Johnson',
        position: 'Marketing Director at GreenLeaf',
        img: 'assets/review1.png',
        review:
            'Working with Adrian was a fantastic experience. He transformed our outdated website into a modern, user-friendly platform. His attention to detail and commitment to quality are unmatched. Highly recommend him for any web dev projects.',
    },
    {
        id: 2,
        name: 'Mark Rogers',
        position: 'Founder of TechGear Shop',
        img: 'assets/review2.png',
        review:
            'Adrian’s expertise in web development is truly impressive. He delivered a robust and scalable solution for our e-commerce site, and our online sales have significantly increased since the launch. He’s a true professional! Fantastic work.',
    },
    {
        id: 3,
        name: 'John Dohsas',
        position: 'Project Manager at UrbanTech ',
        img: 'assets/review3.png',
        review:
            'I can’t say enough good things about Adrian. He was able to take our complex project requirements and turn them into a seamless, functional website. His problem-solving abilities are outstanding.',
    },
    {
        id: 4,
        name: 'Ether Smith',
        position: 'CEO of BrightStar Enterprises',
        img: 'assets/review4.png',
        review:
            'Adrian was a pleasure to work with. He understood our requirements perfectly and delivered a website that exceeded our expectations. His skills in both frontend backend dev are top-notch.',
    },
];

export const myProjects = [
    {
        title: 'E-Commerce Web App with Custom Admin Panel - Freelance Project ',
        desc: 'Welcome to the E-Commerce Application! This web application, built using Flask and SQLAlchemy, is designed to provide a full-featured e-commerce experience.',
        skill:
            'The e-commerce web app features robust user authentication with secure login, registration, and session management using Flask-Login and Flask-Bcrypt for password hashing. Admins can manage products efficiently. Built with Flask, SQLAlchemy for database handling, Flask-WTF for form management, and Flask-Bootstrap for responsive design, ensuring a seamless user experience.',
        href: 'https://github.com/deep-priyo/E_Commerce-Web-App',
        texture: '/textures/project/project1.mp4',
        logo: '/assets/img_4.png',
        logoStyle: {
            backgroundColor: '#2A1816',
            border: '0.2px solid #36201D',
            boxShadow: '0px 0px 60px 0px #AA3C304D',
        },
        spotlight: '/assets/spotlight1.png',
        tags: [
            {
                id: 1,
                name: 'Flask',
                path: '/assets/flask.svg',
            },
            {
                id: 2,
                name: 'TailwindCSS',
                path: 'assets/tailwindcss.png',
            },
            {
                id: 3,
                name: 'Sql',
                path: '/assets/sql.svg',
            },
            {
                id: 4,
                name: 'Bootstrap',
                path: '/assets/bootstrap.svg',
            },
        ],
    },
    {
        title: 'NLPBankWise - An Intelligent AI Banking Assistant',
        desc: 'With this project I secured 2nd place in NLP Hackathon organised by IIT Kgp, competing against 100+ teams from top institutions. Developed a \n' +
            'Conversational Banking Chatbot using HTML, CSS, Flask, Flask-RESTful, Flask-Session, Flask-SQLAlchemy, \n' +
            'Flask-Bcrypt, OpenAI API, Gemini LLM, and JSON-based REST APIs, implementing query classification, \n' +
            'multilingual support, and secure transaction handling.',
        skill:'Built with Flask, Flask-RESTful, I gained expertise in backend development, API design, and OpenAI API and Gemini LLM to implement NLP-based query classification, multilingual processing, and conversational AI. ',
        href: 'https://github.com/deep-priyo/NLP_Bank_Wise',
        texture: '/textures/project/project2.mp4',
        logo: '/assets/img_9.png',
        logoStyle: {
            backgroundColor: '#13202F',
            border: '0.2px solid #17293E',
            boxShadow: '0px 0px 60px 0px #2F6DB54D',
        },
        spotlight: '/assets/spotlight2.png',
        tags: [
            {
                id: 1,
                name: 'React.js',
                path: '/assets/react.svg',
            },
            {
                id: 2,
                name: 'Rest-API',
                path: '/assets/rest.svg',
            },
            {
                id: 3,
                name: 'JSON',
                path: '/assets/img_10.png',
            },
            {
                id: 4,
                name: 'Flask',
                path: '/assets/img_11.png',
            },
        ],
    },
    {
        title: 'Refokus Reinterpret',
        desc: 'Refokus Clone is a modern web platform that showcases elegant UI/UX design and seamless user interactions. It serves as an engaging portfolio website template, designed to highlight projects, achievements, and professional skills. The project emphasizes interactive elements and smooth animations using ReactJS and advanced libraries like Locomotive Scroll and Framer Motion, ensuring a visually appealing experience. Ideal for developers looking to present their work or build an online presence with an aesthetic that combines functionality and creative flair.',
        skill: 'Gained experience working with React, Tailwind CSS, Framer Motion, Locomotive Scroll, and React Icons, along with deploying on Netlify and utilizing Git for version control.',
        href: 'https://refokusreinterpret.netlify.app/',
        texture: '/textures/project/refokus.mp4',
        logo: '/assets/project-logo3.png',
        logoStyle: {
            backgroundColor: '#000', // Set a solid black background as the base
            background:
                'linear-gradient(0deg, rgba(0, 0, 0, 0.9), rgba(0, 0, 0, 0.9)), linear-gradient(180deg, rgba(255, 255, 255, 0.2) 0%, rgba(255, 255, 255, 0.8) 100%)',
            border: '0.2px solid rgba(208, 213, 221, 1)',
            boxShadow: '0px 0px 60px 0px rgba(35, 131, 96, 0.3)',
        },
        spotlight: '/assets/spotlight3.png',
        tags: [
            {
                id: 1,
                name: 'React.js',
                path: '/assets/react.svg',
            },
            {
                id: 2,
                name: 'TailwindCSS',
                path: 'assets/tailwindcss.png',
            },
            {
                id: 3,
                name: 'Locomotive Scroll',
                path: '/assets/locomotivescroll.jpeg',
            },
            {
                id: 4,
                name: 'Framer Motion',
                path: '/assets/framer.png',
            },
        ],
    },
    {
        title: 'MediSyncAI, An AI Powered Medical Analysis Platform Built in 24 hours ',
        desc: 'MediSync is an AI-driven healthcare platform that enhances medical diagnostics by deciphering hard-to-read prescriptions, diagnosing diseases based on current and past symptoms, and analyzing lab reports for deeper insights. Built in 24 hours, it leverages cutting edge AI and ML to improve diagnostic accuracy, and assist patients and doctors in faster, data-driven decision-making. MediSync seamlessly integrates with EHRs and healthcare systems, providing real-time AI-powered medical insights for efficient and precise healthcare solutions. 🚀🩺',
        skill:'Built with React.js, Flask, and RESTful APIs, I developed expertise in frontend-backend integration, API handling, and secure authentication (OAuth, JWT). Additionally, I implemented interactive UI animations, ensuring a seamless and engaging user experience',
        href: 'https://medi-sync-frontend-beta.vercel.app/',
        texture: '/textures/project/project4.mp4',
        logo: '/assets/meidsync.png',
        logoStyle: {
            backgroundColor: '#0E1F38',
            border: '0.2px solid #0E2D58',
            boxShadow: '0px 0px 60px 0px #2F67B64D',
        },
        spotlight: '/assets/spotlight4.png',
        tags: [
            {
                id: 1,
                name: 'React.js',
                path: '/assets/react.svg',
            },
            {
                id: 2,
                name: 'TailwindCSS',
                path: 'assets/tailwindcss.png',
            },
            {
                id: 3,
                name: 'Flask',
                path: '/assets/flask.svg',
            },
            {
                id: 4,
                name: 'Open AI',
                path: '/assets/img.png',
            },
        ],
    },
    {
        title: 'SecureAuth – Flask User Authentication & Password Recovery',
        desc: 'SecureAuth is a Flask-based user authentication system designed for secure registration, login, and password recovery. It features hashed password storage (PBKDF2 + SHA-256), email-based password recovery (SMTP), session management (Flask-Login), and protected routes for secure user access. The system also includes file download restrictions for authenticated users, showcasing access control techniques. Built using Flask, SQLAlchemy, and SMTP, SecureAuth provides a comprehensive guide to implementing secure authentication in web applications. ',
        skill: 'Built with Flask, SQLAlchemy, and Flask-Login, I gained expertise in secure authentication, session management, and password hashing. Implemented email-based password recovery (SMTP) and protected routes, ensuring role-based access control.',
        href: 'https://github.com/deep-priyo/SecureAuth',
        texture: '/textures/project/project5.mp4',
        logo: '/assets/img_3.png',
        logoStyle: {
            backgroundColor: '#1C1A43',
            border: '0.2px solid #252262',
            boxShadow: '0px 0px 60px 0px #635BFF4D',
        },
        spotlight: '/assets/spotlight5.png',
        tags: [
            {
                id: 1,
                name: 'Flask',
                path: '/assets/flask.svg',
            },
            {
                id: 2,
                name: 'SQLAlchemy',
                path: '/assets/sql.svg',
            },
            {
                id: 3,
                name: 'Authentication',
                path: '/assets/img_2.png',
            },

        ],
    },
];

export const calculateSizes = (isSmall, isMobile, isTablet) => {
    return {
        deskScale: isSmall ? 0.05 : isMobile ? 0.06 : 0.065,
        deskPosition: isMobile ? [0.5, -4.5, 0] : [0.25, -5.5, 0],
        cubePosition: isSmall ? [4, -5, 0] : isMobile ? [5, -5, 0] : isTablet ? [5, -5, 0] : [9, -5.5, 0],
        reactLogoPosition: isSmall ? [3, 4, 0] : isMobile ? [5, 4, 0] : isTablet ? [5, 4, 0] : [12, 3, 0],
        ringPosition: isSmall ? [-5, 7, 0] : isMobile ? [-10, 10, 0] : isTablet ? [-12, 10, 0] : [-24, 10, 0],
        targetPosition: isSmall ? [-5, -10, -10] : isMobile ? [-9, -10, -10] : isTablet ? [-11, -7, -10] : [-13, -13, -10],
    };
};

export const workExperiences = [
    {
        id: 1,
        name: 'StockMktEducation',
        pos: ' Full Stack Engineering Intern ',
        duration: ' Jan 2025 - Present',
        title: "Developed & deployed a fully responsive showcase website from scratch using React.js, Tailwind CSS optimized for \n" +
            "1,000+ monthly visitors, reducing initial load time by 35%. ",
        icon: '/assets/img_7.png',
        animation: 'victory',
    },
    {
        id: 2,
        name: 'The MMG',
        pos: 'Freelance Project ',
        duration: ' July 2024 – August 2024  ',
        title:"Spearheaded the end-to-end development of a fully responsive e-commerce platform using Flask, SQLAlchemy, \n" +
            "and SQLite with  secure admin panel increasing operational efficiency by 60%  .",
        icon: '/assets/img_6.png',
        animation: 'clapping',
    },
    {
        id: 3,
        name: 'Full-Time Problem Solver & Full-Stack Explorer',
        pos: 'Programmer & Developer',
        duration: 'Lifetime',
        title: "Programming has been more than just a skill—it's a lifelong journey of solving complex problems, building scalable applications, and continuously learning. I explore new technologies, refine my problem-solving skills, and turn ideas into reality.",
        icon: '/assets/img_8.png',
        animation: 'salute',

    },
];