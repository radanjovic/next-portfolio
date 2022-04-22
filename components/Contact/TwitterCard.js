import {LocationMarkerIcon, CalendarIcon, DotsCircleHorizontalIcon, ExternalLinkIcon} from '@heroicons/react/outline';

export default function TwitterCard() {
    return <div className="w-full sm:w-[80%] mx-auto roboto overflow-hidden cursor-default rounded-lg text-left my-4 md:my-8">
        <div>
            <img loading='lazy' className='object-contain' src='/images/contact/profile-bg.jpg' alt='background profile photo' />
        </div>

        <div className='bg-[#243447] w-full pb-2 lg:pb-3'>
            <div className='flex items-center justify-between'>
                <img loading='lazy' className="rounded-full outline outline-gray-800 w-20 md:w-32 lg:w-48 relative bottom-10 left-4 md:bottom-16 md:left-8 lg:bottom-24 lg:left-12" src='/images/contact/profile-pic.jpg' alt='profile pic' />
                <div className='md:px-5 lg:py-4 lg:px-8 relative bottom-2 right-2 md:bottom-6 lg:bottom-12 text-sm md:text-base lg:text-xl flex items-center gap-2'>
                    <DotsCircleHorizontalIcon className='text-gray-600 w-8 h-8 md:w-9 md:h-9 lg:w-14 lg:h-14' />
                    <span className='rounded-full font-semibold bg-gray-200 text-[#243447] py-1 px-3 lg:py-2 lg:px-4'>Follow</span>
                </div>
            </div>

            <div className='pl-4 md:pl-8 lg:pl-12 relative bottom-6 md:bottom-10 lg:bottom-16'>
                <div>
                    <h3 className='text-white font-bold text-lg md:text-2xl lg:text-3xl'>Radan Jovic</h3>
                    <p className='text-gray-500 text-sm md:text-base'>@radanjovic</p>
                </div>
                
                <p className='text-white text-sm md:text-base lg:text-lg relative top-1 md:top-2 lg:top-4'>React/Next.js/Node.js and Django Developer</p>
                <div className='flex items-center gap-3 text-xs md:text-sm text-gray-500 relative top-2 md:top-4 lg:top-8'>
                    <div className='flex items-center gap-1'>
                        <LocationMarkerIcon className='w-4 h-4' />
                        <span>Bijeljina</span>
                    </div>
                    <div className='flex items-center gap-1'>
                        <CalendarIcon className='w-4 h-4' />
                        <span>September 21, 1994</span>
                    </div>
                </div>
                <p className='text-xs md:text-sm lg:text-lg space-x-2 relative top-3 md:top-6 lg:top-10'>
                    <span className='text-gray-500'><span className='text-white'>XX</span> Following</span>
                    <span className='text-gray-500'><span className='text-white'>XX</span> Followers</span>
                </p>
            </div>
            <a className='flex font-mono items-center justify-center gap-1 md:gap-2 rounded-md cursor-pointer text-white font-semibold border mx-2 md:mx-3 lg:mx-4 p-2 md:py-3 lg:py-4 text-xs sm:text-sm md:text-base lg:text-xl transition ease-linear hover:text-[#243447] hover:bg-white' href='https://twitter.com/radanjovic' target='_blank' title="Open Radan's Twitter Profile in New Tab">
            <ExternalLinkIcon className='w-4 sm:w-5 md:w-6 lg:w-7' />
            View Twitter Profile</a>
        </div>
    </div>
}