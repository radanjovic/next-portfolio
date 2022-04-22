import Link from "next/link";
import { IdentificationIcon, AcademicCapIcon, DesktopComputerIcon, MailIcon } from '@heroicons/react/outline';

export default function CTA() {
    return <section id='cta' className="home-page-section">
        {/* <div className="m-auto text-center main-text text-xl md:text-2xl lg:text-[1.75rem] space-y-6 lg:space-y-8 w-[80%]">
            <p>If you'd like to learn more about me, my life, and my skills, visit my <span className="underline hover:text-white"><Link href='/resume'>resume page</Link></span>.</p>
            <p>For a quick overview of all the certificates that I've collected in the programming and web development fields, go to the  <span className="underline hover:text-white"><Link href='/certificates'>certificates page</Link></span>.</p>
            <p>To see all the projects I've worked on and decided to display, visit the <span className="underline hover:text-white"><Link href='/projects'>projects page</Link></span>.</p>
            <p>And if you'd like to contact me, my social links and e-mail address are on the  <span className="underline hover:text-white"><Link href='/contact'>contact page</Link></span>.</p>
        </div> */}

        <div className="m-auto text-center main-text text-xl md:text-2xl lg:text-[1.75rem] space-y-6 lg:space-y-8 w-[80%]">

            <Link href='/resume'><div className="hp-links">

                <div className="w-[80%] px-2 md:px-4 text-left">Read more about me, my academic life, and my skills.</div>

                <div className="w-[20%] ">
                    <IdentificationIcon className="w-full" />
                </div>

            </div></Link>

            <Link href='/certificates'><div className="hp-links">

                <div className="w-[20%] ">
                    <AcademicCapIcon className="w-full" />
                </div>

                <div className="w-[80%]  px-2 md:px-4  text-right">Get an overview of all the certificates I've collected, so far. </div>

            </div></Link>

            <Link href='/projects'><div className="hp-links">

                <div className="w-[80%] text-left px-2 md:px-4 ">See all the projects I've worked on and decided to display.</div>

                <div className="w-[20%] ">
                    <DesktopComputerIcon className="w-full" />
                </div>

            </div></Link>

            <Link href='/contact'><div className="hp-links">

                <div className="w-[20%] ">
                    <MailIcon className="w-full" />
                </div>

                <div className="w-[80%] text-right px-2 md:px-4 ">Find out how to contact me, and how to find me online.</div>

            </div></Link>

        </div>
        
    </section>
}