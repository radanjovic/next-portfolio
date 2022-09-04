
export default function Experience() {
    return <section id='education' className="p-2 pb-4 my-2 md:my-4 w-full md:w-[90%] lg:w-[80%] mx-auto border-b border-[#81afdd] text-white">
    <h2 className='text-center gradient-1 text-xl md:text-2xl lg:text-3xl font-bold mb-2'>Work Experience</h2>
    <div className="text-lg md:text-xl lg:text-2xl p-2 space-y-4 md:space-y-6 lg:space-y-8 text-center md:text-left">
        <div className="flex flex-col md:flex-row items-center gap-2">
            <p className="md:w-1/5 main-text">Jun 2022 - </p>
            <div>
                <h3>NOVA Media</h3>
                <p className="main-text">Full Stack Developer</p>
                <p className="main-text text-md md:text-lg lg:text-xl">- React, Node.js, MongoDB, ReactNative, Socket.io, Express.js, JavaScript, SASS, HTML</p>
            </div>
        </div>
        <div className="flex flex-col md:flex-row items-center gap-2">
            <p className="md:w-1/5 main-text">Feb 2022 - Jun 2022</p>
            <div>
                <h3>Freelance Web Developer</h3>
                <p className="main-text">Full Stack Developer</p>
                <p className="main-text text-md md:text-lg lg:text-xl">- Next.js, React, Node.js, MongoDB, Express.js, Django, SQL, JavaScript, Python, CSS, HTML</p>
            </div>
        </div>
    </div>
</section>
}