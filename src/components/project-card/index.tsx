import { IProject } from '../../interfaces/project';
import TruncText from '../trunc-text';

import './project-card.css';

export default function ProjectCard({ project }: { project: IProject }) {
    return (
        <div className="project-card">
            <div className="project-card__header">
                <div className="project-card__header__title">
                    {project.title}
                </div>
                <div className="project-card__header__subtitle">
                    {project.subtitle}
                </div>
            </div>

            {project.imageSrc &&
            <div
                className="project-card__hero"
                style={{ backgroundImage: `url(${require('../../assets/images/' + project.imageSrc)})`}}
            >
            </div>
            }

            <div className="project-card__details">
                <p>
                    <TruncText
                        text={project.description}
                        max={75}
                    />
                </p>
            </div>

            <div className="project-card__actions">
                {project.demoUrl &&
                <div className="project-card__actions__buttons">
                    <a
                        className="btn text-blue-500"
                        href={project.demoUrl}
                        rel="noreferrer noopener"
                        target="_blank"
                    >
                        Demo
                    </a>
                </div>
                }

                <div className="project-card__actions__icons">
                    <a
                        href={project.sourceUrl}
                        rel="noreferrer noopener"
                        target="_blank"
                    >
                        <span
                            className={`mdi mdi-${project.sourceIcon} text-[32px]`}
                            title="source code"
                        ></span>
                    </a>
                </div>
            </div>
        </div>
    )
};
