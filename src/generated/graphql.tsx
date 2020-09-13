import { gql } from '@apollo/client';
import * as Apollo from '@apollo/client';
export type Maybe<T> = T | null;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
};

export type Query = {
  __typename?: 'Query';
  _empty?: Maybe<Scalars['String']>;
  characters?: Maybe<Array<Character>>;
  personalProjects?: Maybe<Array<Project>>;
  professionalProjects?: Maybe<Array<Project>>;
};

export type Character = {
  __typename?: 'Character';
  name: Scalars['String'];
};

export type Project = {
  __typename?: 'Project';
  name: Scalars['String'];
  techStack: Array<Scalars['String']>;
  knowledgeGained: Array<Scalars['String']>;
  summary: Scalars['String'];
  link?: Maybe<Scalars['String']>;
  length?: Maybe<Scalars['String']>;
  achievements?: Maybe<Array<Scalars['String']>>;
};

export type PersonalProjectsQueryVariables = Exact<{ [key: string]: never; }>;


export type PersonalProjectsQuery = (
  { __typename?: 'Query' }
  & { personalProjects?: Maybe<Array<(
    { __typename?: 'Project' }
    & Pick<Project, 'name' | 'techStack' | 'length' | 'summary' | 'knowledgeGained' | 'achievements'>
  )>> }
);

export type ProfessionalProjectsQueryVariables = Exact<{ [key: string]: never; }>;


export type ProfessionalProjectsQuery = (
  { __typename?: 'Query' }
  & { professionalProjects?: Maybe<Array<(
    { __typename?: 'Project' }
    & Pick<Project, 'name' | 'techStack' | 'length' | 'summary' | 'knowledgeGained' | 'achievements'>
  )>> }
);


export const PersonalProjectsDocument = gql`
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

/**
 * __usePersonalProjectsQuery__
 *
 * To run a query within a React component, call `usePersonalProjectsQuery` and pass it any options that fit your needs.
 * When your component renders, `usePersonalProjectsQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = usePersonalProjectsQuery({
 *   variables: {
 *   },
 * });
 */
export function usePersonalProjectsQuery(baseOptions?: Apollo.QueryHookOptions<PersonalProjectsQuery, PersonalProjectsQueryVariables>) {
        return Apollo.useQuery<PersonalProjectsQuery, PersonalProjectsQueryVariables>(PersonalProjectsDocument, baseOptions);
      }
export function usePersonalProjectsLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<PersonalProjectsQuery, PersonalProjectsQueryVariables>) {
          return Apollo.useLazyQuery<PersonalProjectsQuery, PersonalProjectsQueryVariables>(PersonalProjectsDocument, baseOptions);
        }
export type PersonalProjectsQueryHookResult = ReturnType<typeof usePersonalProjectsQuery>;
export type PersonalProjectsLazyQueryHookResult = ReturnType<typeof usePersonalProjectsLazyQuery>;
export type PersonalProjectsQueryResult = Apollo.QueryResult<PersonalProjectsQuery, PersonalProjectsQueryVariables>;
export const ProfessionalProjectsDocument = gql`
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

/**
 * __useProfessionalProjectsQuery__
 *
 * To run a query within a React component, call `useProfessionalProjectsQuery` and pass it any options that fit your needs.
 * When your component renders, `useProfessionalProjectsQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useProfessionalProjectsQuery({
 *   variables: {
 *   },
 * });
 */
export function useProfessionalProjectsQuery(baseOptions?: Apollo.QueryHookOptions<ProfessionalProjectsQuery, ProfessionalProjectsQueryVariables>) {
        return Apollo.useQuery<ProfessionalProjectsQuery, ProfessionalProjectsQueryVariables>(ProfessionalProjectsDocument, baseOptions);
      }
export function useProfessionalProjectsLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<ProfessionalProjectsQuery, ProfessionalProjectsQueryVariables>) {
          return Apollo.useLazyQuery<ProfessionalProjectsQuery, ProfessionalProjectsQueryVariables>(ProfessionalProjectsDocument, baseOptions);
        }
export type ProfessionalProjectsQueryHookResult = ReturnType<typeof useProfessionalProjectsQuery>;
export type ProfessionalProjectsLazyQueryHookResult = ReturnType<typeof useProfessionalProjectsLazyQuery>;
export type ProfessionalProjectsQueryResult = Apollo.QueryResult<ProfessionalProjectsQuery, ProfessionalProjectsQueryVariables>;