<template>
    <div
        class="flex max-w-screen-xl justify-between items-center py-6 px-6 mx-auto md:px-12 lg:px-16 xl:px-24"
    >
        <div class="w-full grid grid-cols-3 gap-10">
            <div class="bg-white p-3 border-t-4 border-green-400">
                <div class="image overflow-hidden">
                    <div class="relative">
                        <!-- <box-icon
                            class="absolute right-0"
                            name="pencil"
                            type="solid"
                            animation="tada-hover"
                            color="green"
                        ></box-icon> -->
                    </div>
                    <img
                        class="h-auto w-full mx-auto rounded-full"
                        :src="user.avatar"
                        alt="profilePicture"
                    />
                </div>
                <p class="flex justify-between items-center pt-5">
                    <span class="text-gray-600 inline-block font-bold text-2xl leading-6">{{ user.name }}</span>
                    &nbsp;
                    <!-- <button
                        class="bg-green text-white text-xl px-4 py-1 rounded-md flex justify-between items-center shadow hover:shadow-xl"
                    >Edit Profile</button> -->
                </p>
                <!-- <h3 class="text-gray-600 font-bold text-2xl leading-6 pt-5">Bio</h3>

                <p class="text-sm text-gray-500 hover:text-gray-600 leading-6">
                    {{user.Bio}}
                </p> -->
            </div>
            <div class="col-span-2">
                <div class="flex justify-between font-bold items-center">
                    <h2 class="text-2xl leading-tight inline-block">Posts</h2>
                    <router-link
                        class="flex items-center justify-center bg-green px-4 py-2 space-x-3 text-white text-xl rounded-lg lg:w-auto hover:shadow-xl focus:outline-none"
                        :to="{ name: 'Cook' }"
                    >
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="24"
                            height="24"
                            viewBox="0 0 24 24"
                            style="fill: rgb(255, 255, 255)"
                        >
                            <path d="M19 11h-6V5h-2v6H5v2h6v6h2v-6h6z" />
                        </svg>
                        <span>Create Recipe</span>
                    </router-link>
                </div>
                <div class="-mx-4 sm:-mx-8 px-4 sm:px-8 py-4 overflow-x-auto">
                    <div class="inline-block min-w-full shadow rounded-lg overflow-y-scrool">
                        <table class="min-w-full leading-normal">
                            <thead>
                                <tr>
                                    <th
                                        class="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider"
                                    >Recipe</th>
                                    <th
                                        class="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider"
                                    >Rating</th>
                                    <th
                                        class="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider"
                                    >Created at</th>
                                    <th
                                        class="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider"
                                    >Edit</th>
                                    <th
                                        class="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider"
                                    >Delete</th>
                                </tr>
                            </thead>
                            <tbody>
                                <p v-if="recipesError">Something went wrong...</p>
                                <p v-if="recipesLoading">Loading...</p>
                                <template v-else v-for="(post, index) in recipe" :key="index">
                                    <tr>
                                        <td
                                            class="px-5 py-5 border-b border-gray-200 bg-white text-sm"
                                        >
                                            <div class="flex items-center">
                                                <div class="flex-shrink-0 w-20 h-20">
                                                    <img
                                                        class="w-full h-full rounded-md"
                                                        :src="post.image[0]"
                                                        alt="image"
                                                    />
                                                </div>
                                                <div class="ml-3">
                                                    <p
                                                        class="text-gray-900 whitespace-no-wrap"
                                                    >{{ post.title }}</p>
                                                </div>
                                            </div>
                                        </td>
                                        <td
                                            class="px-5 py-5 border-b border-gray-200 bg-white text-sm"
                                        >
                                            <p
                                                class="text-gray-900 whitespace-no-wrap"
                                            >{{ post.avg_rating }}</p>
                                        </td>
                                        <td
                                            class="px-5 py-5 border-b border-gray-200 bg-white text-sm"
                                        >
                                            <p class="text-gray-900 whitespace-no-wrap">
                                                {{
                                                    convertTime(
                                                        post.created_at
                                                    )
                                                }}
                                            </p>
                                        </td>
                                        <td
                                            class="px-5 py-5 border-b border-gray-200 bg-white text-sm"
                                        >
                                            <box-icon
                                                name="pencil"
                                                type="solid"
                                                animation="fade-right-hover"
                                                color="green"
                                            ></box-icon>
                                        </td>
                                        <td
                                            class="px-7 py-5 border-b border-gray-200 bg-white text-sm"
                                        >
                                            <box-icon
                                                class="cursor-pointer"
                                                type="solid"
                                                name="trash-alt"
                                                animation="tada-hover"
                                                color="green"
                                                @click="deleteAndUpdateCache(post.id)"
                                            ></box-icon>
                                        </td>
                                    </tr>
                                </template>
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
import { ref, computed } from 'vue'
import { useStore } from 'vuex'
import { useQuery, useResult, useMutation } from '@vue/apollo-composable'
import { get_user_recipe, get_user_data } from '../graphql/query'
import { delete_recipe } from '../graphql/mutation'
import { useHead } from '@vueuse/head'
useHead({
    title: 'Profile',
});


const store = useStore()
const userData = computed(() => store.getters['main/user'])

const {
    result: userResult,
    loading: userLoading,
    error: userError,
    refetch: refetchUser
} = useQuery(get_user_data.query,
    () => ({ user_id: userData.value.sub, })
)
refetchUser()
const user = useResult(userResult, null, data => data.users_by_pk)

console.log(user, 'this is user data')

const {
    result: userRecipe,
    loading: recipesLoading,
    error: recipesError,
    refetch: recipeFetch
} = useQuery(get_user_recipe.query, { user_id: userData.value.sub })

const recipe = useResult(userRecipe, null, data => data.recipes)
recipeFetch()


const {
    mutate: deleteRecipe,
    loading: deleteLoading,
    error: deleteError,
} = useMutation(delete_recipe.mutation)

function deleteAndUpdateCache(id) {
    deleteRecipe({ id }, {
        update: (cache, { }) => {
            const data = cache.readQuery({ query: get_user_recipe.query, variables: { user_id: userData.value.sub } })
            const updateData = data.recipes.filter(rec => rec.id !== id)
            cache.writeQuery({ query: get_user_recipe.query, variables: { user_id: userData.value.sub }, data: { recipes: updateData } })
        }
    })
}


const convertTime = (apiTime) => {
    const date = new Date(apiTime)
    return date.toDateString()
}
</script>

<style scoped>
</style>