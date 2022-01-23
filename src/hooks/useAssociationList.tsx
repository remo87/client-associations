import {  useQuery } from '@apollo/client'
import { IAssociationsResponse } from '../interfaces/graphql';
import { IFilter } from '../interfaces/graphql';
import { GET_ASSOCIATIONLIST } from '../graphql/queries';

export const useAssociationList = () => {
    const {data, error, loading} = useQuery<IAssociationsResponse, IFilter>(GET_ASSOCIATIONLIST,{
        variables: {
            skip: 0,
            take: 5
        }
    });

    return {data, error, loading};
}