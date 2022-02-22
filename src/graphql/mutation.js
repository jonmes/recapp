import gql from 'graphql-tag'

export const post_recipe = {
    mutation: gql`
        mutation MyQuery {
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