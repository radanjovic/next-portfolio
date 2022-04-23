import Link from "next/link"

export default function Education() {
    return <section id='education' className="p-2 pb-4 my-2 md:my-4 w-full md:w-[90%] lg:w-[80%] mx-auto border-b border-[#81afdd] text-white">
    <h2 className='text-center gradient-1 text-xl md:text-2xl lg:text-3xl font-bold mb-2'>Education</h2>
    <div className="text-lg md:text-xl lg:text-2xl p-2 space-y-4 md:space-y-6 lg:space-y-8 text-center md:text-left">
        <div className="flex flex-col md:flex-row items-center gap-2">
            <p className="md:w-1/5 main-text">2021 - </p>
            <div>
                <h3>Online Programming and Computer Science Courses</h3>
                <Link href='/certificates'><span className="cursor-pointer main-text underline hover:text-white">View Certificates</span></Link>
            </div>
        </div>
        <div className="flex flex-col md:flex-row items-center gap-2">
            <p className="md:w-1/5 main-text">2017 - 2019</p>
            <div>
                <h3>University of East Sarajevo</h3>
                <p className="main-text">Master of Laws</p>
            </div>
        </div>
        <div className="flex flex-col md:flex-row items-center gap-2">
            <p className="md:w-1/5 main-text">2013 - 2017</p>
            <div>
                <h3>University of East Sarajevo</h3>
                <p className="main-text">Bachelor of Laws</p>
            </div>
        </div>
    </div>
</section>
}