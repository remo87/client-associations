import { useQuery } from "@apollo/client";
import { IAssociationsResponse, IDataListItem } from "../interfaces/graphql";
import { IFilter } from "../interfaces/graphql";
import { GET_ASSOCIATIONLIST } from "../graphql/queries";

export const useAssociationList = () => {
  const { data, error, loading } = useQuery<IAssociationsResponse, IFilter>(
    GET_ASSOCIATIONLIST
  );

  let mappedData: IDataListItem[] = [];
  if (!error && !loading) {
    mappedData = data?.associations
      ? data?.associations.map((asso) => {
          const mapped: IDataListItem = {
            id: asso.target?.id,
            symbol: asso.target?.geneInfo?.symbol,
            name: asso.target?.geneInfo?.name,
            overall: asso.associationScore?.overall,
          };
          return mapped;
        })
      : [];
  }

  return { data: mappedData, error, loading };
};
