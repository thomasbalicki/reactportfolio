import Head from 'next/head';
import Image from "next/image";
import languages from "../public/languages.png";
import technologies from "../public/technologies.png";
import methods from "../public/methods.png";
import { useState } from "react";
import IMG_9164 from "../public/IMG_9164.jpg";
import github2 from "../public/github2.png";
import linkedin2 from "../public/linkedin2.png";
import moon from "../public/moon.png";
import sun from "../public/sun.png";
import htmlicon from "../public/htmlicon.png";
import cssicon from "../public/cssicon.png";
import pythonicon from "../public/pythonicon.png";
import javascripticon from "../public/javascripticon.png";
import sqlicon from "../public/sqlicon.png";
import vscodeicon from "../public/vscodeicon.png";
import postgresicon from "../public/postgresicon.png";
import cicdicon from "../public/cicdicon.png";
import devopsicon from "../public/devopsicon.png";
import sdlcicon from "../public/sdlcicon.png";
import collegeicon from "../public/collegeicon.png"
import mastodonicon from "../public/mastodonicon.png";
import scroll from "../public/scroll.png";
import dockericon from "../public/dockericon.png";
import contactformscreenshot from "../public/contactformscreenshot.png";
import marstravelwebsite from "../public/marstravelwebsite.png";

export default function Home() {
  const [darkMode, setDarkMode] = useState(false);
  const [showSkills, setShowSkills] = useState(true);

  const handleSkillsClick = () => {
    setShowSkills(true);
  };
  const handleEducationClick = () => {
    setShowSkills(false);
  };


  return (

    <div className={darkMode ? "dark" : ""}>

      {/*-------------------------------------------Page Header------------------------------------------------------------------*/}
      <Head>
        <title>Thomas Balicki Portfolio</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/portfolioicon.png" />
      </Head>
      <main className='bg-stone-100 px-10 md:px-20 lg:px-40 dark:bg-gray-900'>
        <section className='my-0 py-0'>

          {/*-------------------------------------------My Nav Bar------------------------------------------------------------------*/}

          <nav className='py-10 mb-10 flex sm:flex-row justify-between'>
            <h1 className='text-xl font-burtons dark:text-white pb-1'>Portfolio</h1>
            <ul className='flex items-center'>
              <li>
                <Image
                  src={darkMode ? moon : sun}
                  width={40}
                  height={40}
                  onClick={() => setDarkMode(!darkMode)}
                  className="cursor-pointer hover:scale-105 transition-transform mx-1"
                />
              </li>
              <li>
                <a href="https://github.com/thomasbalicki" target="_blank">
                  <Image src={github2} width={30} height={30} className="cursor-pointer hover:scale-105 transition-transform mx-1" />
                </a>
              </li>
              <li>
                <a href="https://www.linkedin.com/in/thomas-balicki-3105ba205/" target="_blank">
                  <Image src={linkedin2} width={30} height={30} className="cursor-pointer hover:scale-105 transition-transform mx-1" />
                </a>
              </li>
              <li>
                <a className="bg-gradient-to-r from-red-400 to-orange-400 text-white px-3 py-2 rounded-md mx-1" href="https://drive.google.com/file/d/1Hik8KPe05DV1A3HUXIXhjc32IXd1JmmG/view?usp=share_link" target="_blank">Resume</a>
              </li>
            </ul>
          </nav>

          {/*-------------------------------------------NAME AND INTRO------------------------------------------------------------------*/}
          <div className='flex text-center flex-wrap items-center justify-center'>
            <div className='p-5 dark:text-white w-full md:w-1/2'>
              <h2 className='text-4xl py-2 text-red-500 font-medium md:text-6xl dark:text-red-500'>Thomas Balicki</h2>
              <h3 className='text-2xl text-center py-2 md:text-3xl'>Software Developer.</h3>
              <p className='text-md text-center py-2 leading-8 text-gray-800 md:text-xl max-w-xl dark:text-white'>Hi, I'm Tom, a programmer and web developer from Milwaukee. I love the process of creating something from scratch and seeing it come to life online. I'm always seeking new opportunities to learn and improve my skills in this rapidly-evolving field. Thanks for reading about me and my work, and I look forward to sharing more with you!</p>
            </div>
            <div className="relative rounded-full w-80 h-80 mt-10 md:mt-0 overflow-hidden md:h-96 md:w-96 ">
              <Image src={IMG_9164} layout="fill" objectFit="cover" className="rounded-full" />
            </div>
          </div>
        </section>
        <section>

          {/*-------------------------------------------Skills section & paragraph------------------------------------------------------------------*/}

          <div className='shadow-xl p-5 rounded-xl my-10  dark:bg-gray-500 dark:bg-opacity-10'>
            <button className='hover:bg-red-300 transition-transform bg-red-400 text-white text-1xl px-3 py-1 rounded-md mx-2' onClick={handleSkillsClick}>Skills</button>
            <button className='hover:bg-red-300 transition-transform bg-red-400 text-white text-1xl px-3 py-1 rounded-md mx-2' onClick={handleEducationClick}>Education</button>
            {showSkills ? (
              <p className='text-sm py-2 leading-8 text-gray-800 dark:text-white'>
                As a beginner, I have a fundamental understanding of several programming languages and frameworks like HTML, CSS with Tailwind, Python, JavaScript with React, and SQL. I'm also proficient in using VS Code and Github for coding and version control. Additionally, I have experience with PostgresSQL, PGAdmin, Flask, and Django for managing databases and building APIs. Although I have limited knowledge of SDLC methodologies and CI/CD workflows, I'm eager to learn and apply them to my work. I also have a basic understanding of deploying applications on AWS, Azure, and Google Cloud, and I'm motivated to deepen my knowledge in this area. Overall, I'm committed to continuous learning and skill development to tackle more complex programming projects in the future.
              </p>
            ) : (
              <div className="flex-1 p-5 text-lg items-center justify-start py-5 mx-2">
                <div className="flex flex-row items-center justify-start">
                  <Image src={collegeicon} width={30} height={30} />
                  <p className='mx-2 dark:text-white'><span className="text-red-500">University of Wisconsin Milwaukee</span> - Bachelors Business Marketing</p>
                </div>
                <div className="flex flex-row items-center justify-start py-5">
                  <Image src={scroll} width={30} height={30} />
                  <p className='mx-2 dark:text-white'><span className="text-red-500">Nucamp Coding Bootcamp</span> - Back End, SQL, and DevOps Developer with Python</p>
                </div>
              </div>
            )}
          </div>
          <div className="lg:flex gap-10">

            {/*-------------------------------------------My Stack Div------------------------------------------------------------------outline outline-2 outline-red-400*/}

            <div className="bg-white flex-1 text-center shadow-xl p-10 rounded-xl my-10 dark:bg-gray-400 dark:bg-opacity-10 dark:text-white">
              <div className="flex items-center justify-center">
                <Image src={languages} width={50} height={50} />
                <h3 className="text-2xl font-medium ml-4">My Stack</h3>
              </div>
              <h4 className="py-4 text-lg text-red-500">Languages</h4>
              <div className="flex flex-row items-center justify-start">
                <Image src={htmlicon} width={30} height={30} />
                <p className="text-gray-800 py-1 dark:text-white">HTML</p>
              </div>
              <div className="flex flex-row items-center justify-start py-1">
                <Image src={cssicon} width={30} height={30} />
                <p className="text-gray-800 py-1 dark:text-white">CSS</p>
              </div>
              <div className="flex flex-row items-center justify-start">
                <Image src={pythonicon} width={30} height={30} />
                <p className="text-gray-800 py-1 px-1 dark:text-white">Python</p>
              </div>
              <div className="flex flex-row items-center justify-start py-1">
                <Image src={javascripticon} width={30} height={30} />
                <p className="text-gray-800 py-1 px-1 dark:text-white">JavaScript</p>
              </div>
              <div className="flex flex-row items-center justify-start py-1">
                <Image src={sqlicon} width={30} height={30} />
                <p className="text-gray-800 py-1 px-1 dark:text-white">SQL</p>
              </div>
            </div>

            {/*-------------------------------------------My Technologies Div------------------------------------------------------------------*/}

            <div className="bg-white flex-1 text-center shadow-xl p-10 rounded-xl my-10 dark:bg-gray-400 dark:bg-opacity-10 dark:text-white">
              <div className="flex items-center justify-center">
                <Image src={technologies} width={50} height={50} />
                <h3 className="text-2xl font-medium ml-4">Technologies</h3>
              </div>
              <h4 className="py-4 text-lg text-red-500">Tools I use</h4>
              <div className="flex flex-row items-center justify-start">
                <Image src={vscodeicon} width={30} height={30} />
                <p className="text-gray-800 py-1 px-1 dark:text-white">VS Code</p>
              </div>
              <div className="flex flex-row items-center justify-start py-1">
                <Image src={postgresicon} width={30} height={30} />
                <p className="text-gray-800 py-1 px-1 dark:text-white">PostgresSQL/PGAdmin</p>
              </div>
              <div className="flex flex-row items-center justify-start py-1">
                <Image src={github2} width={30} height={30} />
                <p className="text-gray-800 py-1 px-1 dark:text-white">Github</p>
              </div>
              <div className="flex flex-row items-center justify-start py-1">
                <Image src={dockericon} width={30} height={30} />
                <p className="text-gray-800 py-1 px-1 dark:text-white">Docker</p>
              </div>
              <p className="text-gray-800 py-1 px-1 flex flex-row dark:text-white">And many more..</p>
            </div>

            {/*-------------------------------------------My Methods Div------------------------------------------------------------------*/}

            <div className="bg-white flex-1 text-center shadow-xl p-10 rounded-xl my-10 dark:bg-gray-400 dark:bg-opacity-10 dark:text-white">
              <div className="flex items-center justify-center">
                <Image src={methods} width={50} height={50} />
                <h3 className="text-2xl font-medium ml-4">Methods</h3>
              </div>
              <h4 className="py-4 text-lg text-red-500">My workflow</h4>
              <div className="flex flex-row items-center justify-start">
                <Image src={sdlcicon} width={30} height={30} />
                <p className="text-gray-800 py-1 px-1 dark:text-white">SDLC</p>
              </div>
              <div className="flex flex-row items-center justify-start py-1">
                <Image src={cicdicon} width={30} height={30} />
                <p className="text-gray-800 py-1 px-1 dark:text-white">CI/CD</p>
              </div>
              <div className="flex flex-row items-center justify-start py-1">
                <Image src={devopsicon} width={30} height={30} />
                <p className="text-gray-800 py-1 px-1 dark:text-white">DevOps</p>
              </div>
            </div>
          </div>
        </section>

        {/*-------------------------------------------My Portfolio Section------------------------------------------------------------------*/}
        {/*-------------------------------------------TODO:optimize for small screens------------------------------------------------------------------*/}

        <section>
          <div>
            <h3 className='text-3xl py-1 text-red-400'>My Projects 👇</h3>
            <p className='text-md py-2 leading-8 text-gray-800 dark:text-white'>
              Hello! This section of my website is currently under development, but I'm putting in the effort to add more projects soon. You can view what I'm currently working on by clicking on the Github icon located at the top of the page which will direct you to my Github profile. There, you can explore more of what's keeping me busy, browse through the code, and read the documentation for each one. Thank you for visiting my website, and I hope you enjoy my projects!
            </p>
          </div>
          <div className='flex flex-wrap lg:flex-nowrap shadow-xl p-5 rounded-xl my-10 dark:bg-gray-500 dark:bg-opacity-10 flex justify-between dark:text-white'>
            <div className='lg:w-1/2'>
              <h3 className="text-2xl font-medium ml-4">Customer Feedback Form with Postgres Integration</h3>
              <p className='p-5'>This project involved building a feedback submission form using HTML and CSS, which allowed customers to submit their feedback. The form was then connected to a Postgres database, which stored the feedback for future analysis. By creating this feedback submission form, customers were able to easily provide feedback on their experiences, while the database allowed for easy tracking and analysis of this feedback. This project showcases my skills in web development, database integration, and user experience design. See code <a className="text-red-500" href="https://github.com/thomasbalicki/PostgresForm" target="_blank">here</a>.</p>
            </div>
            <div className='sm:ml-5'>
              <Image src={contactformscreenshot} width={450} height={450} className="rounded-xl" />
            </div>
          </div>
          <div className='flex flex-wrap lg:flex-nowrap shadow-xl p-5 rounded-xl my-10 dark:bg-gray-500 dark:bg-opacity-10 flex justify-between dark:text-white'>
            <div className='lg:w-1/2'>
              <h3 className="text-2xl font-medium ml-4">Travel to Mars: A Three.js Project</h3>
              <p className='p-5'>I'm currently working on an interactive Mars travel page website using Three.js for my portfolio. Once completed, the website will be deployed on AWS. I'm in the process of modeling a 3D sphere of Mars to replace the current plane sphere, and visitors can currently maneuver the sphere around using their mouse. The website is still under development, and there will be many changes inluding more functionality before the official version is released. However, I'm thrilled to showcase my skills in 3D modeling and programming with this project. Be sure to check back for updates! See site <a className="text-red-500" href="https://mars-landing-page-kappa.vercel.app/" target="_blank">here</a>.</p>
            </div>
            <div className='sm:ml-5'>
              <Image src={marstravelwebsite} width={450} height={450} className="rounded-xl" />
            </div>
          </div>

        </section>

        <footer className="bg-stone-100 text-black py-10 dark:text-white dark:bg-gray-900">
          <div className="container mx-auto text-center">
            <p>&copy; 2023 My Website. All rights reserved.</p>
          </div>
        </footer>

      </main>
    </div >
  )
}
