import React, { ReactNode } from 'react';
import { Project } from '../../../index';
import { IProject } from '../../../Project/interfaces';

import projects from './projects.json';

class ProfessionalProjects extends React.Component<{}, {}> {
    render(): ReactNode {
        return (
            <div>
                <h1>Professional Projects</h1>
                {projects.map((project: IProject, idx: number) => <Project key={'project'+idx} projectData={project} />)}
            </div>
        );
    }
}

export default ProfessionalProjects;