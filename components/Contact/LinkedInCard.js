import {LockClosedIcon, ExternalLinkIcon} from '@heroicons/react/outline';

export default function LinkedInCard() {
    return <div className="w-full sm:w-[80%] mx-auto roboto overflow-hidden rounded-lg text-left my-4 md:my-8 cursor-default">
        <div>
            <img loading='lazy' className='object-contain' src='/images/contact/profile-bg.jpg' alt='background profile photo' />
        </div>

        <div className='bg-gray-900 w-full pb-2 lg:pb-3'>
            <div className='flex items-center justify-between'>
                <img loading='lazy' className="rounded-full outline outline-gray-800 w-20 md:w-32 lg:w-48 relative bottom-12 left-4 md:bottom-[5rem] md:left-8 lg:bottom-[8rem] lg:left-12" src='/images/contact/profile-pic3.jfif' alt='profile pic' />
                <div className='relative bottom-3 right-2 md:bottom-6 md:right-6 lg:bottom-12 lg:right-12 text-sm md:text-base lg:text-xl flex items-center gap-1 md:gap-2 text-white'>
                <img src='/images/contact/uis.png' alt='university logo' className='w-6 h-6 md:w-7 md:h-7 lg:w-8 lg:h-8' />
                <span>University of East Sarajevo</span></div>
            </div>

            <div className='pl-4 md:pl-8 lg:pl-12 relative bottom-8 md:bottom-12 lg:bottom-20'>
                <h3 className='text-white font-bold text-lg md:text-2xl lg:text-3xl'>Radan Jovic</h3>
                <p className='text-white text-sm md:text-base lg:text-lg relative top-1 md:top-2 lg:top-3'>React/Next.js/Node.js and Django Developer</p>
                <div className='flex flex-col text-xs md:text-sm text-gray-500 relative top-2 md:top-4 lg:top-8'>
                    <span>Bijeljina, Serb Republic, Bosnia and Herzegovina</span>
                    <span className='text-blue-600 font-semibold'>XXX+ connections</span>
                </div>
                <div className='flex items-center gap-2 md:gap-4 text-xs md:text-sm lg:text-base text-white relative top-4 md:top-6 lg:top-12'>
                    <p className='rounded-full py-1 px-2 md:py-2 md:px-3 lg:px-4 bg-blue-400 text-gray-700'>Connect</p>
                    <p className='flex items-center gap-1 md:gap-2 rounded-full border py-1 px-2 md:py-2 md:px-3 lg:px-4 bg-gray-900'><LockClosedIcon className='w-4 h-4' />Message</p>
                    <p className='rounded-full border py-1 px-2 md:py-2 md:px-3 lg:px-4 bg-gray-900'>More</p>
                </div>
            </div>
            <a className='flex font-mono items-center justify-center gap-1 md:gap-2 rounded-md cursor-pointer text-white font-semibold border mx-2 md:mx-3 lg:mx-4 p-2 md:py-3 lg:py-4 text-xs sm:text-sm md:text-base lg:text-xl transition ease-linear hover:text-gray-900 hover:bg-white' href='https://linkedin.com/in/jovicradan' target='_blank' title="Open Radan's LinkedIn Profile in New Tab">
            <ExternalLinkIcon className='w-4 sm:w-5 md:w-6 lg:w-7' />
            View LinkedIn Profile</a>
        </div>
    </div>
}