

export default function BasicInfo() {
    return <section id='basic-info' className="flex flex-col md:flex-row items-center justify-around p-2 pb-4 my-2 md:my-4 w-full md:w-[90%] lg:w-[80%] mx-auto">
    <div className="w-full md:w-[45%] m-auto p-2">
        <img src='/images/contact/profile-pic3.jfif' alt='Picture of Radan Jovic' className="w-full h-full rounded-full brightness-75" />
    </div>
    <div className="w-full md:w-[50%] m-auto text-lg md:text-xl lg:text-2xl md:pl-4">
        <div className="flex flex-col py-1 md:py-2 lg:py-3">
            <p>Full Name:</p>
            <p className="main-text ">Radan Jovic (Радан Јовић)</p>
        </div>
        <div className="flex flex-col py-1 md:py-2 lg:py-3">
            <p>Date of Birth:</p>
            <time dateTime="1994-09-21 00:00" className="main-text ">September 21, 1994</time>
        </div>
        <div className="flex flex-col py-1 md:py-2 lg:py-3">
            <p>Address:</p>
            <address className="not-italic main-text ">Kovacici, 76300 Bijeljina, Bosnia and Herzegovina</address>
        </div>
    </div>
</section>
}