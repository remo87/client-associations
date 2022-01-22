import { Data } from "./associations";

export interface IFilter {
  take: Number;
  skip: Number;
}

export interface IScoreParms {
  id: String;
}

export interface IAssociations {
  associations: Data[];
}
