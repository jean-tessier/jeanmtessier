import React, { ReactNode } from 'react';
import { Project } from '../../../index';
import { IProject } from '../../../Project/interfaces';
import { useProfessionalProjectsQuery, ProfessionalProjectsQuery } from '../../../../generated/graphql';

import './ProfessionalProjects.scss';

import { ApolloError } from '@apollo/client';

const renderProjectsFromQuery = (loading: boolean, error: ApolloError | undefined, data: ProfessionalProjectsQuery | undefined) => {
    if (loading)
    {
        return <div>Loading...</div>;
    }
    if (error)
    {
        console.log(error);
        return <div>Error! {error.message}</div>;
    }
    
    if (!!data && !!data.professionalProjects)
    {
        return data.professionalProjects.map((project, idx) => <Project key={'project'+idx} projectData={project}/>);
    }

    return <div>No data found...</div>;
}

const ProfessionalProjects = () => {
    const { loading, error, data } = useProfessionalProjectsQuery();
    return (
        <div>
            <h1>Professional Projects</h1>
            {renderProjectsFromQuery(loading, error, data)}
        </div>
    )
}

export default ProfessionalProjects;