import {BsYoutube, BsGithub} from 'react-icons/bs';

export default function ProjectContainer({project, mini}) {
    return <div>
        <div className="w-full md:w-[45%] md:float-left p-2 md:mr-4 md:mb-4 lg:mr-6 main-text">
            <img className="rounded-md object-contain border-2 border-blue-900" src={project.image} alt={project.name + ' Project Screenshot'} />
            {!mini && <a className='flex items-center justify-center gap-2 md:gap-3 font-mono cursor-pointer border border-white transition ease-linear text-white hover:bg-red-600 hover:border-red-600 rounded-md my-2 md:my-3 lg:my4 p-3 text-sm md:text-base lg:text-xl' href={project.youtube} title='Open Demo Video of Application on Youtube' target='_blank'>
            <BsYoutube />
            <span>View Demo Video</span>
            </a>}
            <a className='flex items-center justify-center gap-2 md:gap-3 font-mono cursor-pointer border border-white transition ease-linear text-white hover:bg-gray-800 hover:border-gray-800 rounded-md my-2 md:my-3 lg:my4 p-3 text-sm md:text-base lg:text-xl' href={project.github} title='View Source Code of App on GitHub' target='_blank'>
            <BsGithub />
            <span>View Source Code</span>
            </a>
            {!mini ? <p className='main-text text-xs md:text-sm '>&#x1F6C8; You can view a demo video of the working app on Youtube or view the source code on Github, by clicking on provided buttons. Alternatively, you can download code and run the app yourself, after installing all dependencies and replacing credentials, where needed.</p> : <p className='main-text text-xs md:text-sm '>&#x1F6C8; You can view the source code (and more details about the project) of this mini-project on Github, by clicking on provided button. After getting the source code, you can try out the app yourself, too.</p>}
        </div>


        <div className="w-full mt-4 md:mt-2 p-2 main-text text-sm md:text-base lg:text-lg">
            <h2 className='flex flex-col mb-2 md:mb-2'>
                {!mini ? <span className='text-white roboto'>Main Framework Used:</span> : 
                <span className='text-white roboto'>Programming Language Used:</span>}
                <span className='gradient-1 font-bold'>{project.tech === 'JS' ? 'JavaScript' : project.tech}</span>
            </h2>

            {!mini ? <p className='whitespace-pre-line'><span className='text-white roboto'>Project Description:</span> {project.description}</p> : 
            <div>
                <p className='text-white roboto'>Project Description:</p>
                <p className='main-text text-sm md:text-base lg:text-lg'>{project.description}</p>
            </div>}

        </div>
        </div>
}

{/* <div className='flex flex-col md:flex-row items-start justify-around my-2'>
        <div className="w-full md:w-[45%] p-2 main-text">
            <img className="rounded-md object-contain" src={project.image} alt={project.name + ' Project Screenshot'} />
            <a className='flex items-center justify-center gap-2 md:gap-3 font-mono cursor-pointer border border-white transition ease-linear text-white hover:bg-red-600 hover:border-red-600 rounded-md my-2 md:my-3 lg:my4 p-3 text-sm md:text-base lg:text-xl' href={project.youtube} title='Open Demo Video of Application on Youtube' target='_blank'>
            <BsYoutube />
            <span>View Demo Video</span>
            </a>
            <a className='flex items-center justify-center gap-2 md:gap-3 font-mono cursor-pointer border border-white transition ease-linear text-white hover:bg-black hover:border-black rounded-md my-2 md:my-3 lg:my4 p-3 text-sm md:text-base lg:text-xl' href={project.github} title='Open Demo Video of Application on Youtube' target='_blank'>
            <BsGithub />
            <span>View Source Code</span>
            </a>
            <p className='main-text text-xs md:text-sm lg:text-base'>&#x1F6C8; You can view a demo video of the working app on Youtube or view the source code on Github, by clicking on provided buttons. Alternatively, you can download code and run the app yourself, after installing all dependencies and replacing credentials, where needed.</p>
        </div>


        <div className="w-full md:w-[50%] p-2 main-text space-y-4 text-sm md:text-base lg:text-lg">
            <h2 className='flex gap-2'>
                <span className='text-white roboto'>Main Framework Used:</span>
                <span>{project.tech}</span>
            </h2>

            <p className='whitespace-pre-wrap'><span className='text-white roboto'>Project Description:</span> {project.description}</p>

        </div>
    </div> */}