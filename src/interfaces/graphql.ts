export interface IDataListItem {
  id: string;
  symbol: string;
  name: string;
  overall: number;
}

export interface IScores {
  literature: number
  rnaExpression: number
  geneticAssociation: number
  somaticMutation: number
  knownDrug: number
  animalModel: number
  affectedPathway: number
}
