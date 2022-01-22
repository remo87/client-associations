export type Maybe<T> = T | null
export type Exact<T extends { [key: string]: unknown }> = {
  [K in keyof T]: T[K]
}
export type MakeOptional<T, K extends keyof T> = Omit<T, K> &
  { [SubKey in K]?: Maybe<T[SubKey]> }
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> &
  { [SubKey in K]: Maybe<T[SubKey]> }
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string
  String: string
  Boolean: boolean
  Int: number
  Float: number
}

export type Antibody = {
  __typename?: "Antibody"
  topCategory?: Maybe<Scalars["String"]>
  categories?: Maybe<Categories>
  buckets?: Maybe<Array<Maybe<Scalars["Int"]>>>
}

export type AssociationScore = {
  __typename?: "AssociationScore"
  overall?: Maybe<Scalars["Float"]>
  datasources?: Maybe<Datasources>
  datatypes?: Maybe<Datatypes>
}

export type Categories = {
  __typename?: "Categories"
  predictedTractableMedLowConfidence?: Maybe<Scalars["Float"]>
  clinicalPrecedence?: Maybe<Scalars["Int"]>
  predictedTractableHighConfidence?: Maybe<Scalars["Float"]>
}

export type Data = {
  __typename?: "Data"
  isDirect?: Maybe<Scalars["Boolean"]>
  id?: Maybe<Scalars["String"]>
  evidenceCount?: Maybe<EvidenceCount>
  disease?: Maybe<Disease>
  associationScore?: Maybe<AssociationScore>
  target?: Maybe<Target>
}

export type Datasources = {
  __typename?: "Datasources"
  progeny?: Maybe<Scalars["Float"]>
  sysbio?: Maybe<Scalars["Float"]>
  expressionAtlas?: Maybe<Scalars["Float"]>
  europepmc?: Maybe<Scalars["Float"]>
  intogen?: Maybe<Scalars["Float"]>
  phewasCatalog?: Maybe<Scalars["Float"]>
  uniprotLiterature?: Maybe<Scalars["Float"]>
  phenodigm?: Maybe<Scalars["Float"]>
  eva?: Maybe<Scalars["Float"]>
  geneToPhenotype?: Maybe<Scalars["Float"]>
  gwasCatalog?: Maybe<Scalars["Float"]>
  slapenrich?: Maybe<Scalars["Float"]>
  genomicsEngland?: Maybe<Scalars["Float"]>
  postgap?: Maybe<Scalars["Float"]>
  uniprot?: Maybe<Scalars["Float"]>
  chembl?: Maybe<Scalars["Float"]>
  cancerGene_census?: Maybe<Scalars["Float"]>
  reactome?: Maybe<Scalars["Float"]>
  uniprotSomatic?: Maybe<Scalars["Float"]>
  evaSomatic?: Maybe<Scalars["Float"]>
  crispr?: Maybe<Scalars["Float"]>
}

export type Datatypes = {
  __typename?: "Datatypes"
  literature?: Maybe<Scalars["Int"]>
  rnaExpression?: Maybe<Scalars["Int"]>
  geneticAssociation?: Maybe<Scalars["Int"]>
  somaticMutation?: Maybe<Scalars["Int"]>
  knownDrug?: Maybe<Scalars["Int"]>
  animalModel?: Maybe<Scalars["Int"]>
  affectedPathway?: Maybe<Scalars["Int"]>
}

export type Disease = {
  __typename?: "Disease"
  id?: Maybe<Scalars["String"]>
  efoInfo?: Maybe<EfoInfo>
}

export type EfoInfo = {
  __typename?: "EfoInfo"
  label?: Maybe<Scalars["String"]>
  therapeuticArea?: Maybe<TherapeuticArea>
}

export type EvidenceCount = {
  __typename?: "EvidenceCount"
  total?: Maybe<Scalars["Int"]>
  datasources?: Maybe<Datasources>
  datatypes?: Maybe<Datatypes>
}

export type Filter = {
  take?: Maybe<Scalars["Int"]>
  skip?: Maybe<Scalars["Int"]>
}

export type GeneInfo = {
  __typename?: "GeneInfo"
  symbol?: Maybe<Scalars["String"]>
  name?: Maybe<Scalars["String"]>
}

export type Query = {
  __typename?: "Query"
  associations?: Maybe<Array<Maybe<Data>>>
  scoresById?: Maybe<AssociationScore>
}

export type QueryAssociationsArgs = {
  filter?: Maybe<Filter>
}

export type QueryScoresByIdArgs = {
  id?: Maybe<Scalars["String"]>
}

export type Smallmolecule = {
  __typename?: "Smallmolecule"
  topCategory?: Maybe<Scalars["String"]>
  smallMoleculeGenomeMember?: Maybe<Scalars["Boolean"]>
  highQualityCompounds?: Maybe<Scalars["Int"]>
  ensemble?: Maybe<Scalars["Float"]>
  categories?: Maybe<Categories>
  buckets?: Maybe<Array<Maybe<Scalars["Int"]>>>
}

export type Target = {
  __typename?: "Target"
  id?: Maybe<Scalars["String"]>
  geneInfo?: Maybe<GeneInfo>
  tractability?: Maybe<Tractability>
}

export type TherapeuticArea = {
  __typename?: "TherapeuticArea"
  codes?: Maybe<Array<Maybe<Scalars["String"]>>>
  labels?: Maybe<Array<Maybe<Scalars["String"]>>>
}

export type Tractability = {
  __typename?: "Tractability"
  antibody?: Maybe<Antibody>
  smallmolecule?: Maybe<Smallmolecule>
}
