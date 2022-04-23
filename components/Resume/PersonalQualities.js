

export default function PersonalQualities() {
    return <section id='personal-qualities' className="p-2 pb-4 my-2 md:my-4 w-full md:w-[90%] lg:w-[80%] mx-auto border-b border-[#81afdd] text-white">
    <h2 className='text-center gradient-1 text-xl md:text-2xl lg:text-3xl font-bold mb-2'>Personal Qualities</h2>
    <div className="text-lg md:text-xl lg:text-2xl p-2 space-y-2 md:space-y-3 lg:space-y-4">
        <div className="space-y-1 md:space-y-2">
            <h3>[Human] Languages:</h3>
            <p className="main-text">- English (C1/C2) - Full professional proficiency</p>
            <p className="main-text">- Serbian (C2) - Native proficiency (along with other similar languages from Balkan peninsula - Bosnian, Croatian, etc.)</p>
            <p className="main-text">- German (B2) - Professional working proficiency <a className="underline hover:text-white" href='https://www.docdroid.net/81hX6g1/goethe-zertifikat-b2-radan-jovic-pdf' target='_blank' title='View Goethe Zertifikat in New Tab'>[view certificate]</a></p>
            <p className="main-text">- Spanish (A1/A2) - Elementary proficiency</p>
        </div>
        <div className="space-y-1 md:space-y-2">
            <h3>Those that know me, say that I'm:</h3>
            <p className="main-text">- Trustworthy and reliable, responsible, professional, diligent, creative, team player, ready to help, communicative, quick learner, pragmatic, etc. </p>
        </div>
    </div>
</section>
}