/* Change this file to get your personal Portfolio */

// To change portfolio colors globally go to the  _globalColor.scss file

import emoji from "react-easy-emoji";
import splashAnimation from "./assets/lottie/splashAnimation"; // Rename to your file name for custom animation

// Splash Screen

const splashScreen = {
  enabled: true, // set false to disable splash screen
  animation: splashAnimation,
  duration: 2000 // Set animation duration as per your animation
};

// Summary And Greeting Section

const illustration = {
  animated: true // Set to false to use static SVG
};

const greeting = {
  username: "Trbuhozborac",
  title: "Hi all, I'm Nemanja Pilipović aka Trbuhozborac",
  subTitle: emoji(
    "A passionate Full Stack Software Developer 🚀 having an experience of building Web and Mobile applications with JavaScript / Reactjs / Nodejs / React Native and some other cool libraries and frameworks."
  ),
  resumeLink:
    "https://drive.google.com/file/d/1ofFdKF_mqscH8WvXkSObnVvC9kK7Ldlu/view?usp=sharing", // Set to empty to hide the button
  displayGreeting: true // Set false to hide this section, defaults to true
};

// Social Media Links

const socialMediaLinks = {
  github: "https://github.com/trbuhozborac",
  linkedin: "https://www.linkedin.com/in/nemanja-pilipovic/",
  gmail: "nemanjapilip@gmail.com",
  gitlab: "https://gitlab.com/trbuhozborac",
  // facebook: "https://www.facebook.com/saad.pasta7",
  medium: "https://medium.com/@trbuhozborac",
  stackoverflow: "https://stackoverflow.com/users/9711575/nemanja-pilipovi%c4%87",
  // Instagram, Twitter and Kaggle are also supported in the links!
  // To customize icons and social links, tweak src/components/SocialMedia
  display: true // Set true to display this section, defaults to false
};

// Skills Section

const skillsSection = {
  title: "What I do",
  subTitle: "CRAZY FULL STACK DEVELOPER WHO WANTS TO EXPLORE EVERY TECH STACK",
  skills: [
    emoji(
      "⚡ Develop highly interactive Front end / User Interfaces for your web and mobile applications"
    ),
    emoji("⚡ Progressive Web Applications ( PWA ) in normal and SPA Stacks"),
    emoji(
      "⚡ Integration of third party services such as Firebase / AWS / Digital Ocean"
    )
  ],

  /* Make Sure to include correct Font Awesome Classname to view your icon
https://fontawesome.com/icons?d=gallery */

  softwareSkills: [
    {
      skillName: "reactjs",
      fontAwesomeClassname: "fab fa-react"
    },
    {
      skillName: "nodejs",
      fontAwesomeClassname: "fab fa-node"
    },
    {
      skillName: "JavaScript",
      fontAwesomeClassname: "fab fa-js"
    },
    {
      skillName: "html-5",
      fontAwesomeClassname: "fab fa-html5"
    },
    {
      skillName: "css3",
      fontAwesomeClassname: "fab fa-css3-alt"
    },
    {
      skillName: "sql-database",
      fontAwesomeClassname: "fas fa-database"
    },
    {
      skillName: "docker",
      fontAwesomeClassname: "fab fa-docker"
    },
    {
      skillName: "npm",
      fontAwesomeClassname: "fab fa-npm"
    },
    {
      skillName: "git",
      fontAwesomeClassname: "fab fa-git"
    },
  ],
  display: true // Set false to hide this section, defaults to true
};

// Education Section

const educationInfo = {
  display: true, // Set false to hide this section, defaults to true
  schools: [
    {
      schoolName: "Higher technical school Novi Sad",
      logo: require("./assets/images/vtsLogo.png"),
      subHeader: "Information technologies",
      duration: "October 2015 - May 2018",
      desc: "Novi Sad",
    },
    {
      schoolName: "High school „22. Oktobar“",
      logo: require("./assets/images/srednjaLogo.png"),
      subHeader: "Economic technician",
      duration: "September 2011 - June 2015",
      desc: "Žabalj"     
    }
  ]
};

// Your top 3 proficient stacks/tech experience

const techStack = {
  viewSkillBars: true, //Set it to true to show Proficiency Section
  experience: [
    {
      Stack: "Frontend", //Insert stack or technology you have experience in
      progressPercentage: "90%" //Insert relative proficiency in percentage
    },
    {
      Stack: "Backend",
      progressPercentage: "75%"
    },
    {
      Stack: "UI / UX",
      progressPercentage: "70%"
    },
  ],
  displayCodersrank: false // Set true to display codersrank badges section need to changes your username in src/containers/skillProgress/skillProgress.js:17:62, defaults to false
};

// Work experience section

const workExperiences = {
  display: true, //Set it to true to show workExperiences Section
  experience: [
    {
      role: "Front-End Developer",
      company: "Smile AI",
      companylogo: require("./assets/images/smileLogo.png"),
      date: "Mar 2024 – Present",
      descBullets: [
        `Led the implementation of AI-driven automation initiatives, integrating OpenAI APIs and AI
         agents, while experimenting with emerging technologies in a hands-on manner.`,
        `Served as the sole developer on multiple internal projects—independently creating new
         applications from scratch and maintaining two core systems.`,
        `Oversaw the full software development lifecycle, leveraging React.js on the front-end, NestJS
         on the back-end, and handling database management and deployment tasks single-handedly.`
      ]
    },
    {
      role: "Front-end developer",
      company: "SmaRF Solutions",
      companylogo: require("./assets/images/smarfLogo.png"),
      date: "Jun 2015 – Feb 2024",
      descBullets: [
        `Spearheaded the development of responsive and reusable components using React.js, ensuring
         a seamless and user-friendly frontend experience.`,
        `Executed backend tasks proﬁciently using C#, where I established API routes and seamlessly
         integrated them into the frontend. Implemented new database tables using Entity Framework
         Core and developed the requisite infrastructure utilizing the repository pattern.`,
        `Successfully developed, integrated and deployed two Shopify web shops with our internal
         company application using a Node.js application.`
      ]
    },
    {
      role: "Full-stack Developer",
      company: "Croative",
      companylogo: require("./assets/images/croativeLogo.png"),
      date: "Nov 2018 – May 2022",
      descBullets: [
        `Played a pivotal role in enhancing an existing MERN (MongoDB, Express, React, Node)
         application by introducing new features and meticulously addressing bugs, showcasing a
         commitment to continuous improvement and functionality reﬁnement.`,
        `Demonstrated agility in troubleshooting and resolving production bugs in a live React Native
         mobile application, ensuring seamless user experiences and application reliability.`,
        `Led the end-to-end development of a dynamic boat renting application, utilizing React for the
         front-end and Node.js for the back-end, showcasing proﬁciency in full-stack development.`
      ]
    },  
  ]
};

/* Your Open Source Section to View Your Github Pinned Projects
To know how to get github key look at readme.md */

const openSource = {
  showGithubProfile: "true", // Set true or false to show Contact profile using Github, defaults to true
  display: false // Set false to hide this section, defaults to true
};

// Some big projects you have worked on

const bigProjects = {
  title: "Big Projects",
  subtitle: "SOME STARTUPS AND COMPANIES THAT I HELPED TO CREATE THEIR TECH",
  projects: [
    {
      image: require("./assets/images/saayaHealthLogo.webp"),
      projectName: "Saayahealth",
      projectDesc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
      footerLink: [
        {
          name: "Visit Website",
          url: "http://saayahealth.com/"
        }
        //  you can add extra buttons here.
      ]
    },
    {
      image: require("./assets/images/nextuLogo.webp"),
      projectName: "Nextu",
      projectDesc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
      footerLink: [
        {
          name: "Visit Website",
          url: "http://nextu.se/"
        }
      ]
    }
  ],
  display: false // Set false to hide this section, defaults to true
};

// Achievement Section
// Include certificates, talks etc

const achievementSection = {
  title: emoji("Achievements And Certifications 🏆 "),
  subtitle:
    "Achievements, Certifications, Award Letters and Some Cool Stuff that I have done !",

  achievementsCards: [
    {
      title: "AI Engineering Specialization",
      subtitle:
        "Scrimba",
      image: require("./assets/images/scrimbaLogo.png"),
      imageAlt: "Scrimba Logo",
      footerLink: [
        {
          name: "Certification",
          url: "https://www.coursera.org/account/accomplishments/specialization/4AM3AKR2H4MY"
        },
      ]
    },
    {
      title: "Build AI Apps with LangChain.js",
      subtitle:
        "Scrimba",
      image: require("./assets/images/scrimbaLogo.png"),
      imageAlt: "Scrimba Logo",
      footerLink: [
        {
          name: "Certification",
          url: "https://www.coursera.org/account/accomplishments/records/7WJUAQW3HZMB"
        },
      ]
    },
    {
      title: "Learn AI Agents",
      subtitle:
        "Scrimba",
      image: require("./assets/images/scrimbaLogo.png"),
      imageAlt: "Scrimba Logo",
      footerLink: [
        {
          name: "Certification",
          url: "https://www.coursera.org/account/accomplishments/records/9ZVW3PHBCGAR"
        },
      ]
    },
    {
      title: "Learn Embeddings and Vector Databases",
      subtitle:
        "Scrimba",
      image: require("./assets/images/scrimbaLogo.png"),
      imageAlt: "Scrimba Logo",
      footerLink: [
        {
          name: "Certification",
          url: "https://www.coursera.org/account/accomplishments/records/TMGU8PCL49EV"
        },
      ]
    },
    {
      title: "Open-source AI Models",
      subtitle:
        "Scrimba",
      image: require("./assets/images/scrimbaLogo.png"),
      imageAlt: "Scrimba Logo",
      footerLink: [
        {
          name: "Certification",
          url: "https://www.coursera.org/account/accomplishments/records/2UBFLCVGQTF6"
        },
      ]
    },
    {
      title: "Complete React Native in 2021: Zero to Mastery",
      subtitle:
        "Udemy",
      image: require("./assets/images/udemyLogo.png"),
      imageAlt: "Udemy Logo",
      footerLink: [
        {
          name: "Course URL",
          url: "https://www.udemy.com/course/complete-react-native-course-from-zero-to-mastery/"
        },
      ]
    },
    {
      title: "Node with React: Fullstack Web Development",
      subtitle:
        "Udemy",
      image: require("./assets/images/udemyLogo.png"),
      imageAlt: "Udemy Logo",
      footerLink: [
        {
          name: "Course URL",
          url: "https://www.udemy.com/course/node-with-react-fullstack-web-development/"
        },
      ]
    },
    {
      title: "Advanced CSS and Sass: Flexbox, Grid, Animations and More!",
      subtitle:
        "Udemy",
      image: require("./assets/images/udemyLogo.png"),
      imageAlt: "Udemy Logo",
      footerLink: [
        {
          name: "Course URL",
          url: "https://www.udemy.com/course/advanced-css-and-sass/"
        },
      ]
    },
    {
      title: "The Complete ASP.NET MVC 5 Course",
      subtitle:
        "Udemy",
      image: require("./assets/images/udemyLogo.png"),
      imageAlt: "Udemy Logo",
      footerLink: [
        {
          name: "Course URL",
          url: "https://www.udemy.com/course/the-complete-aspnet-mvc-5-course/"
        },
      ]
    },
    {
      title: "Learn To Use APIs With Visual Studio, C#, ASP.Net",
      subtitle:
        "Udemy",
      image: require("./assets/images/udemyLogo.png"),
      imageAlt: "Udemy Logo",
      footerLink: [
        {
          name: "Course URL",
          url: "https://www.udemy.com/course/learn-to-use-apis-with-visual-studio-c-aspnet/"
        },
      ]
    },
  ],
  display: true // Set false to hide this section, defaults to true
};

// Blogs Section

const blogSection = {
  title: "Blogs",
  subtitle:
    "With Love for Developing cool stuff, I love to write and teach others what I have learnt.",
  displayMediumBlogs: "false", // Set true to display fetched medium blogs instead of hardcoded ones
  blogs: [
    {
      url: "https://smarfsolutions.com/login-form-with-mui-and-formik/",
      title: "Creating a Login Form with MUI and Formik in a React Application",
      description:
        "In this article, we’ll demonstrate how to create a login form in a React application using the Material User Interface (MUI) and Formik libraries."
    },
    {
      url: "https://smarfsolutions.com/fluent-validation/",
      title: "Fluent Validation in ASP.NET Core",
      description:
        "In this article, we’ll demonstrate how to use Fluent Validation in ASP.NET Core to validate incoming requests."
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Talks Sections

const talkSection = {
  title: "TALKS",
  subtitle: emoji(
    "I LOVE TO SHARE MY LIMITED KNOWLEDGE AND GET A SPEAKER BADGE 😅"
  ),

  talks: [
    {
      title: "Build Actions For Google Assistant",
      subtitle: "Codelab at GDG DevFest Karachi 2019",
      slides_url: "https://bit.ly/saadpasta-slides",
      event_url: "https://www.facebook.com/events/2339906106275053/"
    }
  ],
  display: false // Set false to hide this section, defaults to true
};

// Podcast Section

const podcastSection = {
  title: emoji("Podcast 🎙️"),
  subtitle: "I LOVE TO TALK ABOUT MYSELF AND TECHNOLOGY",

  // Please Provide with Your Podcast embeded Link
  podcast: [
    "https://anchor.fm/codevcast/embed/episodes/DevStory---Saad-Pasta-from-Karachi--Pakistan-e9givv/a-a15itvo"
  ],
  display: false // Set false to hide this section, defaults to true
};

// Resume Section
const resumeSection = {
  title: "Resume",
  subtitle: "Feel free to download my resume",

  // Please Provide with Your Podcast embeded Link
  display: true // Set false to hide this section, defaults to true
};

const contactInfo = {
  title: emoji("Contact Me ☎️"),
  subtitle:
    "Discuss a project or just want to say hi? My Inbox is open for all.",
  number: "+381-655037556",
  email_address: "nemanjapilip@gmail.com"
};

// Twitter Section

const twitterDetails = {
  userName: "twitter", //Replace "twitter" with your twitter username without @
  display: false // Set true to display this section, defaults to false
};

const isHireable = false; // Set false if you are not looking for a job. Also isHireable will be display as Open for opportunities: Yes/No in the GitHub footer

export {
  illustration,
  greeting,
  socialMediaLinks,
  splashScreen,
  skillsSection,
  educationInfo,
  techStack,
  workExperiences,
  openSource,
  bigProjects,
  achievementSection,
  blogSection,
  talkSection,
  podcastSection,
  contactInfo,
  twitterDetails,
  isHireable,
  resumeSection
};
