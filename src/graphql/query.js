import gql from 'graphql-tag'

export const get_all_recipe = {
    query: gql`
        query MyQuery {
            recipes {
                avg_rating
                category
                description
                id
                image
                review
                title
            }
        }
    `,
}

export const get_recipe_detail = {
    query: gql`
        query recipe_details($id: Int!) {
            recipes(where: { id: { _eq: $id } }) {
                id
                title
                image
                description
                review
                avg_rating
                steps
                category
                serving
                created_at
                prep_time
                calories
            }
        }
    `,
}
