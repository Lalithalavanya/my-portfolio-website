import quizapp from "../assets/projects/quizapp.png";
import portfolio from "../assets/projects/portfolio.png";
import medconnect from "../assets/projects/medconnect.png";
import keeper from "../assets/projects/keeper.png";
import authorisation from "../assets/projects/authorisation.png";
import emr from "../assets/projects/emr.png"
import expense from "../assets/projects/expense.png"

export const ProjectList = [
    // {
    //     id: 1,
    //     name: "Portfolio",
    //     description:
    //         "My portfolio website is a testament to my expertise in web development, showcasing my skills in React, Tailwind CSS, and dynamic animations powered by Framer Motion. Through a seamless blend of technology and creativity, I've crafted a platform that not only highlights my work but also reflects my dedication to crafting immersive user experiences. Explore the synergy of innovation and design in this portfolio.",
    //     img: portfolio,
    //     //max 6 tech stack
    //     tech: ["React", "Framer Motion", "Tailwind CSS", "Material UI"],
    //     source: "https://github.com/aashish-dhiman/portfolio-website",
    //     demo: "https://portfolio-aashish.netlify.app/",
    // },
    {
        id: 2,
        name: "Quiz-Appication",
        description:
            "Developed an interactive Quiz Application to engage users in a dynamic question-answering expe-rience, providing users with their total earned points,Utilized React-Redux for efficient state management and enhancing application performance",
        img: quizapp,
        //max 6 tech stack
        tech: [
            "React",
            "Node.js",
            "Express.js",
            "MongoDB",
            "Redux",
        ],
        source: "https://github.com/itsrathore15/Quiz-Application",
        // demo: "https://better-overcoat-fly.cyclic.cloud/",
    },
    {
        id: 3,
        name: "Embedded Systems and Robotics Club Website",
        description:
            "Developed a website for the Embedded Systems and Robotics Club (EmR) of NIT Kurukshetra, fa-cilitating effective communication and engagement within the club community.Website features event details, technical domains, and team information of the club",
        img: emr,
        //max 6 tech stack
        tech: ["HTML", "CSS","JavaScript","React"],
        source: "https://github.com/itsrathore15/EmrReactwebsite",
        demo: "https://itsrathore15.github.io/EmrReactwebsite/",
    },
    {
        id: 4,
        name: "Expense Tracker",
        description:
         "Built a React application to meticulously monitor personal expenses, employing React Hooks and the Context API for optimal state management Acquired valuable experience in state management, data flow, and component interaction patterns within the React ecosystem",
        img: expense,
        //max 6 tech stack
        tech: ["HTML", "CSS","JavaScript","React","ContextAPI"],
        source: "https://github.com/itsrathore15/Expense_Tracker",
        demo: "https://itsrathore15.github.io/Expense-tracker/",
    }
    // {
    //     id: 5,
    //     name: "Authorisation",
    //     description:
    //         "The Authorization-Secret Website, built with Node.js, Express.js, and Passport.js, provides a user-friendly platform for secure registration, secret sharing, and anonymous content viewing. It incorporates Google OAuth 2.0 for seamless login. With a focus on ease of use, it showcases modern web development in a straightforward manner, offering a safe and engaging online experience.",
    //     img: authorisation,
    //     //max 6 tech stack
    //     tech: ["Node.js", "Express.js", "EJS", "MongoDB", "Passport.js"],
    //     source: "https://github.com/aashish-dhiman/Authorisation",
    //     demo: null,
    // },
];
