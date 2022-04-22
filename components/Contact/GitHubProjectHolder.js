

export default function GitHubProjectHolder({title, description, tech, bg}) {
    return <div className='border w-full border-gray-600 p-3 rounded-md space-y-1 my-1 md:my-2'>
    <p className='px-2 rounded-full border border-gray-600 float-right text-xs md:text-sm text-gray-500'>Public</p>
    <p className='font-bold text-blue-500 text-xs md:text-sm lg:text-base'>{title}</p>
    <p className='text-gray-500 text-xs md:text-sm lg:text-base'>{description}</p>
    <p className='text-gray-500 text-xs md:text-sm lg:text-base flex items-center gap-1 md:gap-2'><span className={`w-2 h-2 md:w-3 md:h-3 lg:w-4 lg:h-4 rounded-full inline-block ${bg}`}></span> {tech}</p>
</div>
}