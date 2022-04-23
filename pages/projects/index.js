import Head from "next/head";
import { projects, miniProjects } from "../../data";
import ProjectCard from "../../components/Projects/ProjectCard";
import BackToTop from '../../components/UI/BackToTop';

import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';

export default function ProjectsPage({projects, miniProjects}) {
    const next = projects.filter(project => project.tech === 'Next.js');
    const react = projects.filter(project => project.tech === 'React');
    const django = projects.filter(project => project.tech === 'Django');

    const python = miniProjects.filter(project => project.tech === 'Python');
    const javascript = miniProjects.filter(project => project.tech === 'JS');

    const responsive = {
        desktop: {
          breakpoint: { max: 4000, min: 1024 },
          items: 3,
        },
        tablet: {
          breakpoint: { max: 1024, min: 640 },
          items: 2,
        },
        mobile: {
          breakpoint: { max: 640, min: 0 },
          items: 1,
        },
      }

      const customLeftArrow = (
        <div className="z-20 arrow-btn absolute left-0 text-center p-1 md:p-2 lg:p-3 cursor-pointer rounded-full">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 text-white w-full" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 19l-7-7m0 0l7-7m-7 7h18" />
          </svg>
        </div>
      );
    
      const customRightArrow = (
        <div className="z-20 arrow-btn absolute right-0 text-center p-1 md:p-2 lg:p-3 cursor-pointer rounded-full">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 text-white w-full" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3" />
          </svg>
        </div>
      );

    return <article id='projects-page' className="FADE">
        <Head>
            <title>Projects | Radan Jovic</title>
            <meta name='description' content="All projects and mini-projects created by Radan Jovic, using JavaScript, Python, Next.js, React and Django" />
        </Head>

        <h1 className='page-heading'>Projects</h1>

        <p className='main-text text-base md:text-lg lg:text-xl text-center md:text-justify px-1 md:px-2 lg:px-3 py-2 lg:py-3'>Practice makes perfect! That's especially true for programming and computer science in general. While I learned to program, I've worked on multiple projects and mini-projects, some of which I'll showcase here. Below you can see and browse selected projects, grouped by the main technology used in making them. Here, also an <span className="text-white underline">important note:</span> The projects are posted as they were at the time they were made, meaning that no alterations were made afterward, even though I continued to learn more new things and even though I learned to write better code, later on. The goal of this is to show an evolution of knowledge, on my part. For example, Django projects were made to pass the CS50W course by Harvard, mostly in December 2021. At that time, the only programming language I truly knew was Python, and my knowledge of JavaScript (and also CSS) was slim (since courses I took by that time were mostly centered around Python). Today, the situation is different, and I'm much better at JS and CSS, and those projects would look much different if I were to make them today...</p>
        <p className='main-text text-sm md:text-base lg:text-lg text-center md:text-justify px-1 md:px-2 lg:px-3 py-2 lg:py-3'>&#x1F6C8; You can scroll horizontally to see all the projects in a particular group. To view project details (with details of all the technologies used in making it), along with links to a demo video (where available) and source code, click on the project screenshot or project name.</p>
        
        <section id='next-projects' className="my-12 lg:my-16">
          <h2 className='text-center gradient-1 text-2xl lg:text-3xl font-bold my-4'>Next.js</h2>
            <Carousel infinite autoPlay={false} shouldResetAutoplay={false} keyBoardControl responsive={responsive} customLeftArrow={customLeftArrow} customRightArrow={customRightArrow} >
                {next.map(i => <ProjectCard key={i.slug} project={i} />)}
            </Carousel>
        </section>
        
        <section id='react-projects' className="my-12 lg:my-16">
          <h2 className='text-center gradient-1 text-2xl lg:text-3xl font-bold my-4'>React</h2>
          <Carousel infinite autoPlay={false} shouldResetAutoplay={false} keyBoardControl responsive={responsive} customLeftArrow={customLeftArrow} customRightArrow={customRightArrow} >
            {react.map(i => <ProjectCard key={i.slug} project={i} />)}
          </Carousel>
        </section>
        
        <section id='django-projects' className="my-12 lg:my-16">
          <h2 className='text-center gradient-1 text-2xl lg:text-3xl font-bold my-4'>Django</h2>
          <Carousel infinite autoPlay={false} shouldResetAutoplay={false} keyBoardControl responsive={responsive} customLeftArrow={customLeftArrow} customRightArrow={customRightArrow} >
              {django.map(i => <ProjectCard key={i.slug} project={i} />)}
          </Carousel>
        </section>
        
        
        <section id='mini-projects' className="my-12 lg:my-16">
          <h2 className='text-center gradient-1 text-2xl lg:text-3xl font-bold my-4'>Mini-Projects</h2>
            <div id='javascript-projects'>
              <h3 className='text-center gradient-1 text-xl lg:text-2xl my-2 lg:my-3'>JavaScript</h3>
              <Carousel infinite autoPlay={false} shouldResetAutoplay={false} keyBoardControl responsive={responsive} customLeftArrow={customLeftArrow} customRightArrow={customRightArrow} >
                  {javascript.map(i => <ProjectCard key={i.slug} project={i} mini />)}
              </Carousel>
            </div>

            <div id='python-projects'>
              <h3 className='text-center gradient-1 text-xl lg:text-2xl my-2 lg:my-3'>Python</h3>
              <Carousel infinite autoPlay={false} shouldResetAutoplay={false} keyBoardControl responsive={responsive} customLeftArrow={customLeftArrow} customRightArrow={customRightArrow} >
                  {python.map(i => <ProjectCard key={i.slug} project={i} mini />)}
              </Carousel>
            </div>

        </section>

        <BackToTop />
    </article>
}

export function getStaticProps() {
    return {
        props: {
            projects,
            miniProjects
        }
    }
}