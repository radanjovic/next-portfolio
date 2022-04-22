

export default function CertificatesSection({children, id, title, description}) {
    return <section id={id} className='border-b border-[#81afdd] p-4'>
        <h2 className='text-center gradient-1 text-xl md:text-2xl lg:text-3xl font-bold'>{title}</h2>
        <p className="md:w-[80%] text-center mx-auto py-4 md:py-6 lg:py-8 main-text text-base md:text-lg lg:text-xl">{description}</p>
        <div className="flex flex-col justify-around items-center">
            {children}
        </div>
    </section>
}