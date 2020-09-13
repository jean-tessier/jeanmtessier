import { gql } from '@apollo/client';

export default gql`
    query ProfessionalProjects {
        professionalProjects {
            name
            techStack
            length
            summary
            knowledgeGained
            achievements
        }
    }
`;