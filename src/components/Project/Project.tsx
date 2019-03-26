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
                    {this.renderLinkToSourceCode(projectData.link)}
                </Card>
                {this.renderAchievements(projectData.achievements)}
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
                {this.renderProjectLength(projectData.length)}
                <div id="project-tech-stack">
                    {projectData.techStack.map((tech: string) => <Tag>{tech}</Tag>)}
                </div>
            </div>
        );
    }

    private renderProjectLength = (projectLength?: string): ReactNode => {
        return !!projectLength ? (
            <h5>Project Length: {projectLength}</h5>
        ) : null;
    }

    private renderLinkToSourceCode = (link?: string): ReactNode => {
        return !!link ? (
        <div>
            <br/>
            See the code <a href={link}>here</a>!
        </div>
        ) : null;
    }

    private renderAchievements = (achievements?: string[]): ReactNode => {
        return !!achievements ? (
            <Card type="inner" size="small">
                <h3>Achievements</h3>
                <List
                    dataSource={achievements}
                    renderItem={(achievement: string) => (
                        <List.Item>
                            {achievement}
                        </List.Item>
                    )}
                />
            </Card>
        ) : null;
    }
}

export default Project;