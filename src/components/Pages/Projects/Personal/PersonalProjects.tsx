import React, { ReactNode } from 'react';
import { Project } from '../../../index';
import { IProject } from '../../../Project/interfaces';

import projects from './projects.json';


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