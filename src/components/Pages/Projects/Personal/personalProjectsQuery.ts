import { gql } from '@apollo/client';

export default gql`
    query PersonalProjects {
        personalProjects {
            name
            techStack
            length
            summary
            knowledgeGained
            achievements
        }
    }
`;