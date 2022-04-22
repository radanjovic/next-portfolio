import Link from "next/link";
import {BsYoutube, BsGithub, BsInfoCircle} from 'react-icons/bs';
import { useRouter } from "next/router";

export default function ProjectCard({project, mini}) {
    const router = useRouter();

    function handleClick(e) {
        e.preventDefault();
        router.push(`/projects/${project.slug}`)
    }

    return <div className="mx-4 flex flex-col items-center justify-center gap-1">
        <div className="p-container h-[200px] w-[300px]">
            <Link href={`/projects/${project.slug}`}><img loading="lazy" className="image object-fill w-full h-full" src={project.image} alt={project.name + ' Project Screenshot'} /></Link>
            <div className="middle hidden lg:block">
                <div className="flex flex-col justify-center gap-2">
                    {!mini && <a href={project.youtube} target='_blank' title='Open Demo Video of Application on Youtube' className="flex items-center gap-2 border py-2 px-20 rounded-md transition ease-linear hover:border-red-600 hover:bg-red-600">
                        <BsYoutube />
                        <span className="font-mono">Demo</span>
                    </a>}
                    <p onClick={handleClick} title='View Project Details' className="flex items-center gap-2 border py-2 px-20 rounded-md cursor-pointer transition ease-linear hover:border-blue-600 hover:bg-blue-600">
                        <BsInfoCircle />
                        <span className="font-mono">Info</span>
                    </p>
                    <a href={project.github} target='_blank' title='View Application Source Code on GitHub' className="flex items-center gap-2 border py-2 px-20 rounded-md transition ease-linear hover:border-gray-800 hover:bg-gray-800">
                        <BsGithub />
                        <span className="font-mono">Code</span>
                    </a>
                </div>
            </div>
        </div>
       <Link href={`/projects/${project.slug}`}><p className="main-text font-bold roboto hover:cursor-pointer hover:text-white">{project.name}</p></Link>
    </div>
}