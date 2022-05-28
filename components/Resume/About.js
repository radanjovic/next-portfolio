import Link from "next/link"

export default function About() {
    return <section id='about' className="p-2 pb-4 my-2 md:my-4 w-full md:w-[90%] lg:w-[80%] mx-auto border-b border-[#81afdd] text-white">
    <h2 className='text-center gradient-1 text-xl md:text-2xl lg:text-3xl font-bold mb-2'>About</h2>
    <div className="text-lg md:text-xl lg:text-2xl p-2 md:p-3 lg:p-4">
        <p>Hi, I'm Radan, a lawyer (by education) turned self-taught full-stack web developer proficient in technologies and frameworks like Next.js, React, and Django, skilled with both relational (SQL) and non-relational (MongoDB, Firebase) databases, experienced in HTML, CSS and basic design.</p>
    </div>
    <details className='details-bg rounded-md text-base md:text-lg lg:text-xl'>
        <summary className='details-bg cursor-pointer p-4 mt-2 rounded-md'>In a few more words...</summary>
        <div className='main-text px-2 md:px-4 lg:px-6 py-2 md:pb-3 lg:pb-4 space-y-2 md:space-y-3 lg:space-y-4'>
            <p>Hi, my name is Radan Jovic, I'm 27 years old, and I live in Bosnia and Herzegovina, a small messy country in the Balkans, in Europe. By education, I'm a lawyer, since back in 2017 I finished my 4-year Bachelor of Laws study. In 2019 I added the Master of Laws title to my name, too.  Even though I was the first in my class and one of the best students largely thanks to my love and appreciation for the law, somewhere along the way things changed and, soon enough, I found myself truly unhappy working in this field.</p>
            <p>Rather than staying unhappy for the rest of my life, back in 2021 (after a year or so of depression and living on the couch), I made the biggest decision of my life:  I decided to switch careers and learn to program. The transitioning and learning period was not easy. After all, I had a lot of catching up to do. But, I was always passionate about technology, and I always wanted to figure out how something works the way it works, so learning new things in this field was not a problem for me - I saw everything as a new challenge.  </p>
            <p>I've tackled many obstacles on the road to becoming a successful programmer, but I've also had a lot of help from the awesome programming community. Here I think mainly of the great courses available for newbies, online. I've completed many courses, learning a bunch of new stuff from each of them (you can see a list of my Certificates on <Link href='/certificates'><span className="underline cursor-pointer hover:text-white" > certificates page</span></Link>, or under the Licenses and Certifications section of my <a href='https://linkedin.com/in/jovicradan' target='_blank' title='Opens LinkedIn profile of Radan Jovic in a new tab' className="underline cursor-pointer hover:text-white">LinkedIn profile</a>).  And I don't plan to stop here.</p>
            <p>I'm really comfortable with both Python and JavaScript programming languages, as I see different use cases for both of them. I'm also very knowledgeable in HTML and CSS. In terms of frameworks, I like working with both Django and React, but lately, I've been getting more and more into Next.js, which has the potential to be the only framework I'll ever need. Additionally, I'm familiar with technologies like Git and GitHub, Flask, Express, jQuery, both relational (SQL) and non-relational databases (MongoDB, Firebase), and many more... You can browse all the projects I've created so far, using the said technologies, on my <Link href='/projects'><span className="underline cursor-pointer hover:text-white" >projects page</span></Link>.</p>
            <p>Currently, I'm gaining my first experience in the programming and web development fields, in the real world working on real projects, but I plan to continue learning along the way too. If you want to connect online with me, check out my social media links on the <Link href='/contact'><span className="underline cursor-pointer hover:text-white" >contact page</span></Link>.</p>
        </div>
        
    </details>
</section>
}