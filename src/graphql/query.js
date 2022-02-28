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
                created_at
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
                ingrediants
                users {
                    name
                }
            }
        }
    `,
}

export const get_user_recipe = {
    query: gql`
        query ($user_id: String!) {
            recipes(where: { user_id: { _eq: $user_id } }) {
                image
                title
                created_at
                avg_rating
                id
            }
        }
    `,
}

export const get_user_data = {
    query: gql`
        query ($user_id: String!) {
            users_by_pk(id: $user_id) {
                name
                avatar
                Bio
            }
        }
    `,
}

export const get_favorite_recipe = {
    query: gql`
        query ($user_id: String!) {
            favorites(where: { user_id: { _eq: $user_id } }) {
                recipe {
                    avg_rating
                    category
                    description
                    id
                    image
                    review
                    title
                    created_at
                    users {
                        name
                    }
                }
            }
        }
    `,
}

export const get_comment = {
    query: gql`
        query ($id: Int!) {
            comments(where: { recipe_id: { _eq: $id } }) {
                id
                comment
                users {
                    name
                    avatar
                }
            }
        }
    `,
}

export const search_recipe = {
    query: gql`
        query ($search: String!) {
            search_recipes(args: { search: $search }) {
                title
                category
                image
                users {
                    name
                }
                description
                avg_rating
                prep_time
                id
            }
        }
    `,
}

export const get_recipe_by_category = {
    query: gql`
        query ($category: String!) {
            recipes(where: { category: { _eq: $category } }) {
                title
                category
                image
                users {
                    name
                }
                description
                avg_rating
                prep_time
                id
            }
        }
    `,
}
