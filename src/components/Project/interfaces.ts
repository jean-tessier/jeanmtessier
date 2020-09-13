export interface IProject {
    name: string;
    link?: string;
    techStack: string[];
    length?: string | null;
    summary: string;
    knowledgeGained: string[];
    achievements?: string[] | null;
}