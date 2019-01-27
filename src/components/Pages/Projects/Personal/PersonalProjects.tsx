import React, { ReactNode } from 'react';
import projects from './projects.json';
import { IProject } from '../../../Project/interfaces';
import { Project } from '../../../index';

class PersonalProjects extends React.Component<{}, {}> {
    render(): ReactNode {
        return (
            <div>
                <h1>Personal Projects</h1>
                {projects.map((project: IProject) => <Project projectData={project} />)}
            </div>
        );
    }
}

export default PersonalProjects;