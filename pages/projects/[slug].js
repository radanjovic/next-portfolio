import { projects, miniProjects } from "../../data";
import Head from "next/head";
import ProjectContainer from "../../components/Projects/ProjectContainer";


export default function ProjectPage({project, mini}) {
    return <article id={project.name} className="FADE">
    <Head>
        <title>{project.name} | Projects</title>
        <meta name='description' content={project.description} />
    </Head>
        <h1 className="page-heading">{project.name}</h1>

        <ProjectContainer project={project} mini={mini} />

    </article>
}

export function getStaticProps(ctx) {
    const slug = ctx.params.slug;
    let project;
    let mini;

    if (!slug.startsWith('mini')) {
        project = projects.find(project => project.slug === slug);
        mini = false;
    } else {
        project = miniProjects.find(project => project.slug === slug);
        mini = true;
    }
    

    return {
        props: {
            project,
            mini
        }
    }
}

export function getStaticPaths() {
    const projectPaths = projects.map(project => project.slug);
    const miniProjectPaths = miniProjects.map(project => project.slug);
    const paths = projectPaths.concat(miniProjectPaths);

    return {
        paths: paths.map( path => ({params: {slug: path}})),
        fallback: false
    }
}