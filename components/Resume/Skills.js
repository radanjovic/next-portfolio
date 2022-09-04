
export default function Skills() {
    return <section id='skills' className="p-2 pb-4 my-2 md:my-4 w-full md:w-[90%] lg:w-[80%] mx-auto border-b border-[#81afdd] text-white">
    <h2 className='text-center gradient-1 text-xl md:text-2xl lg:text-3xl font-bold mb-2'>Skills</h2>
    <div className="text-lg md:text-xl lg:text-2xl p-2 space-y-2 md:space-y-3 lg:space-y-4">
        <div className="space-y-1 md:space-y-2">
            <h3>Programming (and Markup) Languages:</h3>
            <p className="main-text">- HTML, CSS, JavaScript, Python, Git, SQL</p>
        </div>
        <div className="space-y-1 md:space-y-2">
            <h3>Frameworks:</h3>
            <p className="main-text">- Next.js, Node.js React, React Native, Express, Socket.io, Django, Flask, jQuery, Bootstrap, TailwindCSS, Sass </p>
        </div>
        <div className="space-y-1 md:space-y-2">
            <h3>Databases:</h3>
            <p className="main-text">- SQL (SQLite), NoSQL(MongoDB, Firebase) </p>
        </div>
        <div className="space-y-1 md:space-y-2">
            <h3>Related Programming Technologies:</h3>
            <p className="main-text">- REST API, GraphQL, Server-side Template Rendering, Edge Networking + Serverless, Containers, Manual Testing, Operating Systems, Systemadministration, Networking, UI/UX Design Basics, IT Security, Wordpress, ... </p>
        </div>
    </div>
</section>
}