import {ChevronDoubleUpIcon} from '@heroicons/react/outline';

export default function BackToTop() {
    return <div className='w-full py-4 md:py-8'>
        <a href='#navbar' id='back-to-top' className='flex items-center justify-center gap-2 font-bold font-mono border outline-none transition hover:bg-white hover:text-blue-800 mx-auto w-fit cursor-pointer rounded-md py-1 px-2 text-base md:py-2 md:px-4 md:text-lg text-white'>
        <ChevronDoubleUpIcon className='w-8 h-8' /> <span className='flex-grow text-lg md:text-xl'>Back To Top</span>
    </a>
    </div>
    
}