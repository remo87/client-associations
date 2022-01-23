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

export interface IScoreByIdResponse {
  scoresById: IScoreContent;
}

interface IScoreContent {
  datatypes: Datatypes;
}
