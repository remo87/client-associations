import { Maybe } from "graphql/jsutils/Maybe";
import { Data, Datasources, Datatypes } from "./associations";

export interface IFilter {
  take: Number;
  skip: Number;
}

export interface IScoreParms {
  id: String;
}

export interface IAssociationsResponse {
  associations: Data[];
}

export interface IDataListItem {
  id: Maybe<string> | undefined,
  symbol: Maybe<string> | undefined,
  name: Maybe<string> | undefined,
  overall: Maybe<number> | undefined
}

export interface IScoreByIdResponse {
  scoresById: IScoreContent;
}

interface IScoreContent {
  datatypes: Datatypes;
}
