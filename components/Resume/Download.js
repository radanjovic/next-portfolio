import {DownloadIcon} from '@heroicons/react/outline';

export default function Download() {
    return <section id='download-links' className="flex flex-col items-center gap-2 p-2 pb-4 my-2 md:my-4 w-full md:w-[90%] lg:w-[80%] mx-auto">
        <a className='flex items-center justify-center gap-2 w-full border py-2 md:py-3 text-base md:text-lg lg:text-xl transition ease-linear rounded-md hover:bg-white hover:border-white hover:text-blue-800' href='/files/CV.pdf' download title='Download CV of Radan Jovic'>
            <DownloadIcon className='w-5 md:w-6 lg:w-8' />
            <span>Download CV (PDF)</span>
        </a>
        <a className='flex items-center justify-center gap-2 w-full border py-2 md:py-3 text-base md:text-lg lg:text-xl transition ease-linear rounded-md hover:bg-white hover:border-white hover:text-blue-800' href='/files/CoverLetter.pdf' download title='Download Cover Letter of Radan Jovic'>
            <DownloadIcon className='w-5 md:w-6 lg:w-8' />
            <span>Download Cover Letter (PDF)</span>
        </a>
        <p className='main-text text-lg md:text-xl lg:text-2xl py-2 md:py-3'>Or Read Bellow</p>
    </section>
}