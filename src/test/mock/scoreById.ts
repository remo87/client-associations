import { GET_CORE_BY_ID } from "../../graphql/queries";

export const scoreData = {
  request: {
    query: GET_CORE_BY_ID,
    variables: {
      id: "ENSG00000003436",
    },
  },
  result: {
    data: {
      scoresById: {
        datatypes: {
          literature: 0.19517772984514156,
          rnaExpression: 0.07211524912501942,
          geneticAssociation: 0.22628011248337543,
          somaticMutation: 0,
          knownDrug: 0,
          animalModel: 0,
          affectedPathway: 0.5,
        },
      },
    },
  },
};
