import { gql } from "@apollo/client";

export const GET_ASSOCIATIONLIST = gql`
    query GetAssociationList($filter: Filter) {
        associations(filter: $filter) {
            id
            target {
                geneInfo {
                    symbol
                    name
                }
            }
            associationScore {
                overall
            }
        }
    }
`