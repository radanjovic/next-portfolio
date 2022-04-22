import Head from "next/head";
import LinkedInCard from "../components/Contact/LinkedInCard";
import GitHubCard from "../components/Contact/GitHubCard";
import TwitterCard from "../components/Contact/TwitterCard";
import BackToTop from '../components/UI/BackToTop';

export default function ContactPage() {
    return <article id='contact-page' className="FADE">
        <Head>
            <title>Contact | Radan Jovic</title>
            <meta name='description' content="Contact page with e-mails and social-media links for Radan Jovic." />
        </Head>
        
        <h1 className='page-heading'>Contact</h1>

        <section id='emails' className="main-text text-base md:text-lg lg:text-xl text-center px-1 md:px-2 lg:px-3 py-4 lg:py-6">
            <p className="pb-2">Would you like to contact me? The preferred way is e-mail. My e-mail addresses are:</p>
            <ul className="list-disc pt-2">
                <li className="w-fit mx-auto my-1 py-1 underline hover:text-white"><a href='mailto:radanjovic1994@gmail.com'>radanjovic1994@gmail.com</a></li>
                <li className="w-fit mx-auto my-1 py-1 underline hover:text-white"><a href='mailto:jovicradan1994@gmail.com'>jovicradan1994@gmail.com</a></li>
            </ul>
        </section>
        
        <section id='social-links' className="main-text text-base md:text-lg lg:text-xl text-center px-1 md:px-2 lg:px-3 py-4 lg:py-6">
            <p className="pb-4">Want to connect online? Find me here:</p>
            <LinkedInCard />
            <GitHubCard />
            <TwitterCard />
        </section>

        <BackToTop />
    </article>
}