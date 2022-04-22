import css from './SvgContainer.module.css';

export default function SvgContainer() {
    return <section id='svg-logos' className='home-page-section'>
        <div className='m-auto'>
            <h3 className='text-center text-4xl md:text-5xl lg:text-6xl gradient-1 font-semibold'>I'm currently working with and am proficient at:</h3>
            <ul className='list-none flex flex-col md:flex-row items-center justify-around my-4 py-4 px-2 lg:px-4'>
                <li><img src='/SVG/react.svg' alt='react-logo' className={`w-64 h-64 ${css.spin}`} />
                <span className="sr-only">React - JavaScript Frontend Library.</span></li>
                <li><img src='SVG/django.svg' alt='django-logo' className='animate-bounce pointer-events-none w-64 h-64 relative top-8' />
                <span className="sr-only">Django - Python Web Framework.</span></li>
                <li><img src='SVG/next.svg' alt='next-js-logo' className={`w-56 h-56 ${css.rotate}`} />
                <span className="sr-only">Next.js - Production Framework for React.</span></li>
            </ul>
        </div>
    </section>
}