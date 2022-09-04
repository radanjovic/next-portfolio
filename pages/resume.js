import Head from "next/head";
import BasicInfo from "../components/Resume/BasicInfo";
// import Download from "../components/Resume/Download";
import About from "../components/Resume/About";
import Skills from "../components/Resume/Skills";
import Education from "../components/Resume/Education";
import PersonalQualities from '../components/Resume/PersonalQualities';
import BackToTop from '../components/UI/BackToTop';
import Experience from "../components/Resume/Experience";

export default function ResumePage() {
    return <article id='resume-page' className="FADE">
        <Head>
            <title>Resume | Radan Jovic</title>
            <meta name='description' content="Radan Jovic's resume and CV page, with skills, experience, academic success so far, and more..." />
        </Head>
        
        <h1 className='page-heading'>Resume</h1>

        <BasicInfo />
        {/* <Download /> */}
        <About />
        <Skills />
        <Experience />
        <Education />
        <PersonalQualities />

        <BackToTop />
    </article>
}