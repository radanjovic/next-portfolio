import {ExternalLinkIcon} from '@heroicons/react/outline';

export default function CertificatesContainer({certificate, harvard}) {
    return <div className='py-4 md:py-5 lg:py-6 mb-2 md:mb-3 lg:mb-4'>
        <div className="flex flex-col md:flex-row items-center justify-around">
            <div className="md:w-[40%] mx-auto px-2">
                <a className='cursor-default' href={certificate.link} target='_blank'>
                    <img loading='lazy' className='border-4 border-blue-900 object-contain rounded-md' src={certificate.image} alt={certificate.name + ' Certificate'} />
                </a>
                <a href={certificate.link} target='_blank' title='View Certificate in New Tab'>
                    <button className='flex items-center justify-center rounded-md text-sm md:text-base lg:text-lg gap-2 transition ease-linear hover:text-blue-700 hover:bg-white border border-white w-full py-2 my-2'><ExternalLinkIcon className='w-5 h-5' /> <span>View Certificate</span></button>
                </a>
            </div>

            <div className='md:w-[50%] mx-auto px-4 text-sm md:text-base lg:text-lg roboto'>
                <h3 className='flex flex-col py-2'>Certificate Name: <span className='roboto-slab main-text'>{certificate.name}</span></h3>
                <p className='flex flex-col py-2'>Issued by: <span className='roboto-slab main-text'>{certificate.issuer}</span></p>
                <p className='flex flex-col py-2'>Main Technologies taught: <span className='roboto-slab main-text'>{certificate.tech}</span></p>
            </div>
        </div>
        <details className='details-bg rounded-md text-sm md:text-base lg:text-lg'>
            <summary className='roboto details-bg cursor-pointer p-4 mt-2 rounded-md'>{certificate.name} - Course Overview</summary>
            <p className='whitespace-pre-wrap main-text px-2 md:px-4 lg:px-6'>{certificate.description}</p>
        </details>
    </div>
    
    
}