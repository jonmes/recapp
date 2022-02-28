import gql from 'graphql-tag'

export const post_recipe = {
    mutation: gql`
        mutation (
            $title: String
            $image: _text
            $category: String
            $prep_time: Int
            $calories: Int
            $serving: Int
            $ingrediants: _text
            $steps: _text
            $description: String
        ) {
            insert_recipes_one(
                object: {
                    title: $title
                    image: $image
                    category: $category
                    prep_time: $prep_time
                    calories: $calories
                    serving: $serving
                    ingrediants: $ingrediants
                    steps: $steps
                    description: $description
                }
            ) {
                id
                title
                image
                category
                prep_time
                calories
                serving
                ingrediants
                steps
                description
            }
        }
    `,
}

export const delete_recipe = {
    mutation: gql`
        mutation ($id: Int!) {
            delete_recipes_by_pk(id: $id) {
                id
            }
        }
    `,
}

export const create_comment = {
    mutation: gql`
        mutation ($recipe_id: Int, $comment: String) {
            insert_comments_one(
                object: { recipe_id: $recipe_id, comment: $comment }
            ) {
                id
                recipe_id
                comment
            }
        }
    `,
}

export const user_favorite = {
    mutation: gql`
        mutation ($recipe_id: Int, $user_id: String) {
            insert_favorites_one(
                object: { recipe_id: $recipe_id}
            ) {
                recipe_id
            }
        }
    `,
}

export const rate_recipe = {
    mutation: gql`
        mutation ($recipe_id: Int, $rating_val: Float) {
            insert_ratings_one(
                object: { recipe_id: $recipe_id, rating_val: $rating_val }
            ) {
                rating_val
                recipe_id
            }
        }
    `,
}
