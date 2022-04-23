import {LocationMarkerIcon, ExternalLinkIcon} from '@heroicons/react/outline';
import GitHubProjectHolder from './GitHubProjectHolder';

export default function GitHubCard() {
    return <div className="w-full sm:w-[80%] mx-auto roboto overflow-hidden rounded-lg text-left my-4 md:my-8 cursor-default bg-[#0D1117] p-2">
        <div className='flex flex-col md:flex-row items-center justify-around'>
            <div className="w-full md:w-[40%] px-2 flex flex-row md:flex-col items-center justify-between gap-2 md:gap-0 mb-4">
                <div className='w-[40%] md:w-full'>
                    <img loading='lazy' className="rounded-full object-contain md:mb-4" src='/images/contact/profile-pic2.jpg' alt='profile picture' />
                </div>

                <div>
                    <h3 className='text-white font-semibold text-base sm:text-lg lg:text-xl'>Radan Jovic</h3>
                    <p className='text-gray-500 text-xs sm:text-sm lg:text-base'>radanjovic</p>
                    <p className='text-gray-300 text-sm md:text-base lg:text-lg'>React/Next.js/Node.js and Django Developer</p>
                    <div className='flex items-center text-gray-500 text-xs lg:text-base gap-1'>
                        <LocationMarkerIcon className='w-4 h-4' />
                        <span>Bijeljina, Bosnia and Herzegovina</span>
                    </div>
                </div> 
            </div>

            <div className='w-full md:w-[55%]'>
                <p className='text-sm md:text-base lg:text-lg py-2 text-gray-300'>Popular repositories</p>
                <GitHubProjectHolder title='next.js' description='Project made with Next.js.' tech='JavaScript' bg='bg-yellow-600' />
                <GitHubProjectHolder title='django' description='Project made with Django' tech='Python' bg='bg-blue-600' />
                <GitHubProjectHolder title='react' description='Project made with React.' tech='JavaScript' bg='bg-yellow-600' />
            </div>
            </div>
            <a className='flex font-mono items-center justify-center gap-1 md:gap-2 rounded-md cursor-pointer text-white font-semibold border my-1 lg:m-2 md:mx-1 p-2 md:py-3 lg:py-4 text-sm sm:text-base md:text-lg lg:text-xl transition ease-linear hover:text-[#0D1117] hover:bg-white' href='https://github.com/radanjovic' target='_blank' title="Open Radan's GitHub Profile in New Tab">
            <ExternalLinkIcon className='w-4 sm:w-5 md:w-6 lg:w-7' />
            View GitHub Profile</a>
        </div>
}