import Link from "next/link"

export default function FourOFourPage() {
    return <article id='404' className="FADE">
    <section className="home-page-section">
        <div className="mb-12">
            <h1 className="logo text-center my-4 text-5xl md:text-8xl lg:text-9xl font-bold">404: Not Found</h1>
        </div>
        <div className="flex flex-col gap-4">
            <p className="text-center my-4 text-2xl md:text-4xl lg:text-5xl gradient-2 font-semibold">It seems that you've typed in a wrong path, or that you've followed a dead link.</p>
            <p className="text-center my-4 text-2xl md:text-4xl lg:text-5xl font-semibold"><span className="gradient-2">Go back Home by clicking</span> <Link href='/'><span className="cursor-pointer main-text hover:text-white">here</span></Link><span className="gradient-2">, or explore other pages by following the links above.</span></p>
        </div>
    </section>
    </article>
}