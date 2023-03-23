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
        <section className='min-h-screen'>

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
                <a href="https://github.com/thomasbalicki">
                  <Image src={github2} width={30} height={30} className="cursor-pointer hover:scale-105 transition-transform mx-1" />
                </a>
              </li>
              <li>
                <a href="https://www.linkedin.com/in/thomas-balicki-3105ba205/">
                  <Image src={linkedin2} width={30} height={30} className="cursor-pointer hover:scale-105 transition-transform mx-1" />
                </a>
              </li>
              <li>
                <a href="https://vmst.io/@ThomasTheTrainwreck">
                  <Image src={mastodonicon} width={30} height={30} className="cursor-pointer hover:scale-105 transition-transform mx-1" />
                </a>
              </li>
              <li>
                <a className="bg-gradient-to-r from-red-400 to-orange-400 text-white px-3 py-2 rounded-md mx-1" href="#">Resume</a>
              </li>
            </ul>
          </nav>

          {/*-------------------------------------------NAME AND INTRO------------------------------------------------------------------*/}
          <div className='flex flex-wrap items-center justify-center'>
            <div className='p-5 dark:text-white w-full md:w-1/2'>
              <h2 className='text-4xl py-2 text-red-500 font-medium md:text-6xl dark:text-red-500'>Thomas Balicki</h2>
              <h3 className='text-2xl py-2 md:text-3xl'>Software Developer.</h3>
              <p className='text-md py-2 leading-8 text-gray-800 md:text-xl max-w-xl dark:text-white'>Hi, I'm Tom, a programmer and web developer based in Milwaukee. I love the process of creating something from scratch and seeing it come to life online. I'm always seeking new opportunities to learn and improve my skills in this rapidly-evolving field. Thanks for reading about me and my work, and I look forward to sharing more with you!</p>
            </div>
            <div className="relative rounded-full w-80 h-80 mt-10 md:mt-0 overflow-hidden md:h-96 md:w-96 dark:outline outline-2 outline-red-500">
              <Image src={IMG_9164} layout="fill" objectFit="cover" className="rounded-full" />
            </div>
          </div>
        </section>
        <section>

          {/*-------------------------------------------Skills section & paragraph------------------------------------------------------------------*/}

          <div className='shadow-xl p-5 rounded-xl my-10 outline outline-2 outline-red-400 dark:bg-gray-500 dark:bg-opacity-10'>
            <button className='hover:bg-red-300 transition-transform bg-red-400 text-white text-1xl px-3 py-1 rounded-md mx-2' onClick={handleSkillsClick}>Skills</button>
            <button className='hover:bg-red-300 transition-transform bg-red-400 text-white text-1xl px-3 py-1 rounded-md mx-2' onClick={handleEducationClick}>Education</button>
            {showSkills ? (
              <p className='text-sm py-2 leading-8 text-gray-800 dark:text-white'>
                As a beginner with a fundamental understanding of various programming tools and technologies, I have a basic foundation in several programming languages and frameworks such as HTML, CSS with Tailwind, Python, JavaScript with React, and SQL. I am familiar with tools such as VS Code for coding and Github for version control, and am continuously increasing my proficiency.
                Furthermore, I have experience working with PostgresSQL and PGAdmin for managing databases and building APIs using both flask and Django frameworks. While my understanding of software development life cycle (SDLC) methodologies and continuous integration/continuous delivery (CI/CD) workflows is still limited, I am willing to learn more about them and apply them in my work.
                Lastly, I have a fundamental understanding of how to deploy applications on Amazon AWS, Microsoft Azure, and Google Cloud, and I am eager to deepen my knowledge in this area. I am committed to continuing my learning and expanding my skills in order to take on more complex programming projects in the future.
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
                <div className="flex flex-row items-center justify-start">
                  <Image src={scroll} width={30} height={30} />
                  <p className='mx-2 dark:text-white'><span className="text-red-500">Nucamp Coding Bootcamp</span> - Full Stack Web and Mobile App Developer</p>
                </div>
              </div>
            )}
          </div>
          <div className="lg:flex gap-10">

            {/*-------------------------------------------My Stack Div------------------------------------------------------------------*/}

            <div className="bg-white flex-1 text-center shadow-xl p-10 rounded-xl my-10 outline outline-2 outline-red-400 dark:bg-gray-400 dark:bg-opacity-10 dark:text-white">
              <div className="flex items-center justify-center">
                <Image src={languages} width={50} height={50} />
                <h3 className="text-2xl font-medium ml-4">My Stack</h3>
              </div>
              <h4 className="py-4 text-lg text-red-500">Languages & Frameworks</h4>
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

            <div className="bg-white flex-1 text-center shadow-xl p-10 rounded-xl my-10 outline outline-2 outline-red-400 dark:bg-gray-400 dark:bg-opacity-10 dark:text-white">
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

            <div className="bg-white flex-1 text-center shadow-xl p-10 rounded-xl my-10 outline outline-2 outline-red-400 dark:bg-gray-400 dark:bg-opacity-10 dark:text-white">
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
            <h3 className='text-3xl py-1 text-red-400'>My Projects</h3>
            <p className='text-md py-2 leading-8 text-gray-800 dark:text-white'>
              Hello! This section of my website is currently under development, but I'm putting in the effort to add more projects soon. You can view what I'm currently working on by clicking on the Github icon located at the top of the page which will direct you to my Github profile. There, you can explore all of my projects, browse through the code, and read the documentation for each one. Thank you for visiting my website, and I hope you enjoy my projects!
            </p>
          </div>
          <div className='shadow-xl p-5 rounded-xl my-10 outline outline-2 outline-red-400 dark:bg-gray-500 dark:bg-opacity-10 flex justify-between dark:text-white'>
            <div className='w-1/2'>
              <h3 className="text-2xl font-medium ml-4">Customer Feedback Form with Postgres Integration</h3>
              <p className='p-5'>This project involved building a feedback submission form using HTML and CSS, which allowed customers to submit their feedback. The form was then connected to a Postgres database, which stored the feedback for future analysis. By creating this feedback submission form, customers were able to easily provide feedback on their experiences, while the database allowed for easy tracking and analysis of this feedback. This project showcases my skills in web development, database integration, and user experience design.</p>
            </div>
            <div>
              <Image src={contactformscreenshot} width={450} height={450} className="rounded-xl" />
            </div>
          </div>

        </section>

        {/*-------------------------------------------Contact Me Section------------------------------------------------------------------*/}

        {/*<section>
          <div className='flex justify-end'>
            <h3 className='text-3xl pt-10 text-red-400'>Contact Me</h3>
          </div>
          <div className='flex justify-end'>
            <form action="/contact" method="POST" class="max-w-md bg-stone-100 flex-1 shadow-xl p-5 rounded-xl my-10 outline outline-2 outline-red-400 dark:bg-gray-500 dark:bg-opacity-10">
              <div class="mb-4">
                <label class="block text-red-400 text-sm font-bold mb-2" for="name">
                  Name
                </label>
                <input class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="name" type="text" placeholder="Your name" />
              </div>
              <div class="mb-4">
                <label class="block text-red-400 text-sm font-bold mb-2" for="email">
                  Email
                </label>
                <input class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="email" type="email" placeholder="Your email" />
              </div>
              <div class="mb-4">
                <label class="block text-red-400 text-sm font-bold mb-2" for="message">
                  Message
                </label>
                <textarea class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="message" placeholder="Your message"></textarea>
              </div>
              {/* Terms of service */}
        {/*<div class="mb-4">
                <div className="flex items-center gap-2">
                  <input type="checkbox" name="terms" value="checked" />
                  <p className="text-sm text-grey-500">I agree to be contacted via email</p>
                </div>
              </div>
              <div class="flex items-center justify-between">
                <button class="bg-red-400 hover:bg-red-300 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" type="submit">
                  Send
                </button>
              </div>
            </form>
          </div>
            </section>*/}


        {/*-------------------------------------------Footer Section------------------------------------------------------------------*/}

        <footer className="bg-stone-100 text-black py-10 dark:text-white dark:bg-gray-900">
          <div className="container mx-auto text-center">
            <p>&copy; 2023 My Website. All rights reserved.</p>
          </div>
        </footer>

      </main>
    </div >
  )
}
