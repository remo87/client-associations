import { gql } from "@apollo/client";

export const GET_ASSOCIATIONLIST = gql`
  query GetAssociationList($filter: Filter) {
    associations(filter: $filter) {
        target {
        geneInfo {
          symbol
          name
        }
        id
      }
      associationScore {
        overall
      }
    }
  }
`;

export const GET_CORE_BY_ID = gql`
  query GetScoresById($id: String) {
    scoresById(id: $id) {
      datatypes {
        literature
        rnaExpression
        geneticAssociation
        somaticMutation
        knownDrug
        animalModel
        affectedPathway
      }
    }
  }
`;
