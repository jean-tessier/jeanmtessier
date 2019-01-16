import React, { ReactNode } from 'react';
import { IProject } from './interfaces';
import { Tag, Card, List } from 'antd';

import './Project.scss';

interface IProps {
    projectData: IProject;
}

class Project extends React.Component<IProps, {}> {
    render(): ReactNode {
        const { projectData } = this.props;
        return (
            <Card title={this.renderCardTitle(projectData)}>
                <Card type="inner" size="small">
                    <h3>Summary</h3>
                    <div>
                        {projectData.summary}
                    </div>
                </Card>
                <Card type="inner" size="small">
                    <h3>Achievements</h3>
                    <List
                        dataSource={projectData.achievements}
                        renderItem={(achievement: string) => (
                            <List.Item>
                                {achievement}
                            </List.Item>
                        )}
                    />
                </Card>
                <Card type="inner" size="small">
                    <h3>What I Learned:</h3>
                    <List
                        dataSource={projectData.knowledgeGained}
                        renderItem={(knowledge: string) => (
                            <List.Item>
                                {knowledge}
                            </List.Item>
                        )}
                    />
                </Card>
            </Card>
        )
    }

    private renderCardTitle = (projectData: IProject): ReactNode => {
        return (
            <div>
                <h2 id="project-name">
                    {projectData.name}
                </h2>
                <h5>Project Length: {projectData.length}</h5>
                <div id="project-tech-stack">
                    {projectData.techStack.map((tech: string) => <Tag>{tech}</Tag>)}
                </div>
            </div>
        );
    }
}

export default Project;