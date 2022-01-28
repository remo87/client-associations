import { config } from "../config";
import { IScores } from "../interfaces/graphql";
import { useRequest } from "./request";

export const useGetScoreById = (targeId: String) => {
  const { data, error, loading } = useRequest(
    `${config.apiUri}${config.associationsEndpoint}/${targeId}`
  );

  const scores = data as IScores

  return { scores, error, loading };
};
