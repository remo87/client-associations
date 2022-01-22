import React from 'react'
import { gql, useQuery } from '@apollo/client'
import { IAssociations } from '../interfaces/graphql';
import { IFilter } from '../interfaces/graphql';
import { GET_ASSOCIATIONLIST } from '../graphql/queries';

export const useAssociationList = () => {
    const {data, error, loading} = useQuery<IAssociations, IFilter>(GET_ASSOCIATIONLIST,{
        variables: {
            skip: 0,
            take: 5
        }
    });

    return {data, error, loading};
}