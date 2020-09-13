import React, { ReactNode } from 'react';
import { ApolloError } from '@apollo/client';

import { Project } from '../../../index';
import { IProject } from '../../../Project/interfaces';
import { usePersonalProjectsQuery, PersonalProjectsQuery } from '../../../../generated/graphql';

import './PersonalProjects.scss';

const renderProjectsFromQuery = (loading: boolean, error?: ApolloError, data?: PersonalProjectsQuery) => {
    if (loading)
    {
        return <div>Loading...</div>;
    }
    if (error)
    {
        return <div>Error!</div>
    }
    if (!!data && !!data.personalProjects)
    {
        return data.personalProjects.map((project, idx) => <Project key={'project'+idx} projectData={project}/>);
    }
}

const PersonalProjects = () => {
    const { loading, error, data } = usePersonalProjectsQuery();
    
    return (
        <div>
            <h1>Personal Projects</h1>
            {renderProjectsFromQuery(loading, error, data)}
        </div>
    )
}

export default PersonalProjects;