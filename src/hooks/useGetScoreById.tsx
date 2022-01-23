import { useQuery } from "@apollo/client";
import { IScoreByIdResponse } from "../interfaces/graphql";
import { IScoreParms } from "../interfaces/graphql";
import { GET_CORE_BY_ID } from "../graphql/queries";

export const useGetScoreById = (targeId: String) => {
  const resp = useQuery<IScoreByIdResponse, IScoreParms>(
    GET_CORE_BY_ID,
    {
      variables: {
        id: targeId,
      },
    }
  );
  
  const { data, error, loading } = resp;

  return { data, error, loading };
};
