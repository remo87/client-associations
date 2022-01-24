import { GET_ASSOCIATIONLIST } from "../../graphql/queries";

export const mockData = {
  request: {
    query: GET_ASSOCIATIONLIST,
  },
  result: {
    data: {
      associations: [
        {
          target: {
            geneInfo: {
              symbol: "TFPI",
              name: "tissue factor pathway inhibitor",
            },
            id: "ENSG00000003436",
          },
          associationScore: {
            overall: 0.5827636456183956,
          },
        },
        {
          target: {
            geneInfo: {
              symbol: "GATAD2B",
              name: "GATA zinc finger domain containing 2B",
            },
            id: "ENSG00000143614",
          },
          associationScore: {
            overall: 0.637625,
          },
        },
      ],
    },
  },
};

export const mockSingleData = {
  request: {
    query: GET_ASSOCIATIONLIST,
  },
  result: {
    data: {
      associations: [
        {
          target: {
            geneInfo: {
              symbol: "TFPI",
              name: "tissue factor pathway inhibitor",
            },
            id: "ENSG00000003436",
          },
          associationScore: {
            overall: 0.5827636456183956,
          },
        },
      ],
    },
  },
};

export const mockEmptyData = {
  request: {
    query: GET_ASSOCIATIONLIST,
  },
  result: {
    data: {
      associations: [],
    },
  },
};
