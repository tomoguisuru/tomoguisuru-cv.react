import ProjectCard from '../components/project-card';
import { IProject } from '../interfaces/project';

import './projects.css';

export default function ProjectsIndex({ projects }: { projects: IProject[]}) {
    return (
        <>
            <div className="projects">
                {projects.map((p, i) => (<ProjectCard key={i} project={p}/>))}
            </div>
        </>
    );
}