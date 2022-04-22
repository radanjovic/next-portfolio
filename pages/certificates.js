import {certificates} from '../data';
import Head from "next/head";

import CertificatesSection from '../components/Certificates/CertificatesSection';
import CertificatesContainer from '../components/Certificates/CertificatesContainer';
import BackToTop from '../components/UI/BackToTop';

export default function CertificatesPage({certificates}) {
    const harvard = certificates.filter(cert => cert.group === 'Harvard');
    const fcc = certificates.filter(cert => cert.group === 'FCC');
    const udemy = certificates.filter(cert => cert.group === 'Udemy');
    const coursera = certificates.filter(cert => cert.group === 'Coursera');

    return <article id='certificates-page' className="FADE">
        <Head>
            <title>Certificates | Radan Jovic</title>
            <meta name='description' content='List featuring all certificates earned by Radan Jovic, including the ones from Harvard, Free Code Camp, Udemy, and Coursera' />
        </Head>

        <h1 className='page-heading'>Certificates</h1>

        <p className='main-text text-base md:text-lg lg:text-xl text-center md:text-justify px-1 md:px-2 lg:px-3 py-4 lg:py-5'>On my quest to become a successful programmer/web developer, I've taken multiple online courses in the field. Most of them include a certificate at the end, awarded to students able to complete them. Below is the collection of certificates that I've earned in the field so far, along with course descriptions and quick overviews of the technologies taught in them.</p>

        <CertificatesSection id='harvard-certificates' title='Harvard' description='Harvard University, one of the most reputable institutions in the world, offers a broad variety of their classes online, via their online learning platform - edX.'>
            {harvard.map(i => <CertificatesContainer key={i.name} certificate={i} harvard />)}
        </CertificatesSection>

        <CertificatesSection id='free-code-camp-certificates' title='Free Code Camp' description='Free Code Camp is a non-profit organization offering a bunch of online courses focused on programming to students, for free.'>
            {fcc.map(i => <CertificatesContainer key={i.name} certificate={i} />)}
        </CertificatesSection>

        <CertificatesSection id='udemy-certificates' title='Udemy' description='Udemy is an online learning platform offering students an enormous selection of courses. Courses are created and taught by knowledgeable instructors.'>
            {udemy.map(i => <CertificatesContainer key={i.name} certificate={i} />)}
        </CertificatesSection>

        <CertificatesSection id='coursera-certificates' title='Coursera' description='Coursera is an online learning platform that partners with more than 200 leading universities and companies to bring flexible, affordable, job-relevant online courses to individuals and organizations worldwide.'>
            {coursera.map(i => <CertificatesContainer key={i.name} certificate={i} />)}
        </CertificatesSection>

        <BackToTop />
    </article>
}

export function getStaticProps() {
    return {
        props: {
            certificates
        }
    }
}