import { IDataListItem } from "../interfaces/graphql";
import { config } from "../config";
import { useRequest } from "./request";

export const useAssociationList = () => {
  const { data, error, loading } = useRequest(
    `${config.apiUri}${config.associationsEndpoint}`
  );

  const listItems = data as IDataListItem[];

  let mappedData: IDataListItem[] = [];
  if (!error && !loading) {
    mappedData = listItems
      ? listItems.map((asso) => {
          const mapped: IDataListItem = {
            id: asso.id,
            symbol: asso.symbol,
            name: asso.name,
            overall: asso.overall,
          };
          return mapped;
        })
      : [];
  }

  return { data: mappedData, error, loading };
};
