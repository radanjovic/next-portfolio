import Head from 'next/head';
import Header from "../components/Home/Header/Header";
import SvgContainer from "../components/Home/SVG/SvgContainer";
import CTA from '../components/Home/CTA/CTA';

export default function HomePage() {
    return <article id='home-page' className="FADE">
    <Head>
        <title>Home | Radan Jovic</title>
    </Head>

    <Header />    
    <SvgContainer />
    <CTA />
    </article>
}