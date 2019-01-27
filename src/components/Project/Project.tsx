import React, { ReactNode } from 'react';
import { IProject } from './interfaces';
import { Tag, Card, List } from 'antd';
import _ from 'lodash';

import './Project.scss';

interface IProps {
    projectData: IProject;
    // customSummary: ReactNode; <- to handle extensive HTML/CSS formatted summaries
}

class Project extends React.Component<IProps, {}> {
    render(): ReactNode {
        const { projectData } = this.props;
        return (
            <Card title={this.renderCardTitle(_.pick(projectData, ['name', 'length', 'techStack']))}>
                {this.renderSummary(projectData.summary)}
                {this.renderAchievements(projectData.achievements)}
                {this.renderKnowledgeGained(projectData.knowledgeGained)}
            </Card>
        )
    }

    private renderCardTitle = (projectData: { name: string, length?: string, techStack?: string[] }): ReactNode => {
        return (
            <div>
                <h2 id="project-name">
                    {projectData.name}
                </h2>
                {!!projectData.length && <h5>Project Length: {projectData.length}</h5>}
                {!!projectData.techStack && (
                    <div id="project-tech-stack">
                        {projectData.techStack.map((tech: string) => <Tag>{tech}</Tag>)}
                    </div>
                )}
            </div>
        );
    }

    private renderSummary = (summary?: string): ReactNode => {
        return !!summary && (
            <Card type="inner" size="small">
                <h3>Summary</h3>
                <div>
                    {summary}
                </div>
            </Card>
        );
    }

    private renderAchievements = (achievements?: string[]): ReactNode => {
        return !!achievements && (
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
        );
    }

    private renderKnowledgeGained = (knowledgeGained?: string[]): ReactNode => {
        return !!knowledgeGained && (
            <Card type="inner" size="small">
                <h3>What I Learned:</h3>
                <List
                    dataSource={knowledgeGained}
                    renderItem={(knowledge: string) => (
                        <List.Item>
                            {knowledge}
                        </List.Item>
                    )}
                />
            </Card>
        );
    }
}

export default Project;