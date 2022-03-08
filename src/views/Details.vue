<template>
    <div class="bg-gradient-to-br from-transparent to-green-100">
        <!-- <h2>{{ id }}</h2> -->
        <p v-if="recipeError">Something Went Wrong</p>
        <p v-if="recipeLoading">
            <RotateSquare2 />Loading ...
        </p>
        <template v-else>
            <div class="max-w-screen-xl items-center py-6 px-6 mx-auto md:px-12 lg:px-16 xl:px-24">
                <div class="py-6 w-full">
                    <!-- Router Links -->
                    <div class="max-w-7xl mx-auto">
                        <div class="flex items-center space-x-2 text-gray-400 text-sm">
                            <router-link
                                :to="{ name: 'Home' }"
                                class="hover:underline hover:text-gray-600"
                            >Home</router-link>
                            <span>
                                <svg
                                    class="h-5 w-5 leading-none text-gray-300"
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    stroke="currentColor"
                                >
                                    <path
                                        stroke-linecap="round"
                                        stroke-linejoin="round"
                                        stroke-width="2"
                                        d="M9 5l7 7-7 7"
                                    />
                                </svg>
                            </span>
                            <router-link
                                :to="{
                                    name: 'Browse',
                                }"
                                class="hover:underline hover:text-gray-600"
                            >Category</router-link>
                            <span>
                                <svg
                                    class="h-5 w-5 leading-none text-gray-300"
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    stroke="currentColor"
                                >
                                    <path
                                        stroke-linecap="round"
                                        stroke-linejoin="round"
                                        stroke-width="2"
                                        d="M9 5l7 7-7 7"
                                    />
                                </svg>
                            </span>
                            <span class="hover:underline hover:text-gray-600">{{ recipe.category }}</span>
                            <!-- <span>{{ recipe[0].category }}</span> -->
                        </div>
                    </div>
                </div>
                <h1 class="w-full font-black font-great text-6xl mb-5">{{ recipe.title }}</h1>
                <div class="mb-10">
                    <vue3starRatings
                        class="stars"
                        id="stars"
                        v-model="recipe.avg_rating"
                        starSize="25"
                        starColor="#71B214"
                        inactiveColor="#e6ebdf"
                        :showControl="false"
                        :disableClick="true"
                        controlSize="0"
                    />
                    <div class="ml-5 inline-block">
                        <div class="mr-10 inline-block">
                            {{ recipe.review.toFixed(0) }}
                            Ratings
                        </div>
                        <Popper arrow class="inline-block">
                            <button
                                class="bg-green sm:w-auto h-8 px-8 font-large text-white rounded-xl whitespace-nowrap hover:shadow-xl transition-shadow duration-300"
                            >Rate</button>
                            <template #content="{ close }">
                                <div class="flex justify-center w-full">
                                    <vue3starRatings
                                        v-model="ratingVal"
                                        starSize="25"
                                        starColor="#71B214"
                                        inactiveColor="#e6ebdf"
                                        :step="0.2"
                                        controlBg="grey"
                                        :disableClick="true"
                                        class="w-full"
                                    />
                                </div>
                                <div class="flex justify-center">{{ ratingVal }} Stars</div>
                                <button
                                    class="bg-green mr-5 sm:w-auto h-8 px-10 font-large text-white rounded-xl whitespace-nowrap hover:shadow-xl transition-shadow duration-300"
                                    @click="addrateRecipe(); close();"
                                >Rate</button>
                                <button
                                    class="bg-green sm:w-auto h-8 px-10 font-large text-white rounded-xl whitespace-nowrap hover:shadow-xl transition-shadow duration-300"
                                    @click="close"
                                >Close</button>
                            </template>
                        </Popper>
                    </div>
                </div>
                <div
                    class="w-full sm:mb-32 lg:mb-10 xl:mb-0 grid sm:grid-cols-1 lg:grid-cols-3 xl:grid-cols-3 gap-x-4 gap-y-0"
                >
                    <div
                        class="relative col-span-4 sm:col-span-3 lg:col-span-2 xl:col-span-2 h-0 lg:pb-1/3 xl:pb-1/3 sm:pt-1/3 lg:pt-2/3"
                    >
                        <transition name="slide" mode="out-in">
                            <img
                                class="absolute inset-0 w-full h-128 object-cover shadow-lg rounded-lg"
                                :src="recipe.image[imgToShow]"
                                alt="recipeImage"
                            />
                        </transition>

                        <!-- Image Selection -->

                        <div
                            class="w-full h-full mt-128 pt-2 sm:mt-80 md:mt-72 lg:mt-32 xl:mt-10 grid grid-cols-6 sm:grid-cols-6 lg:grid-cols-4 xl:grid-cols-6 gap-x-1 gap-y-28 sm:gap-x-1 sm:gap-y-20 md:gap-x-1 md:gap-y-16 lg:gap-x-0 lg:gap-y-2 xl:gap-x-1 xl:gap-y-6"
                        >
                            <div
                                v-for="(imageP, index) in recipe.image"
                                :key="index"
                                tabindex="0"
                                class="relative h-0 pb-8 sm:pt-1/3 lg:pt-24"
                            >
                                <img
                                    class="absolute inset-0 w-32 h-32 object-cover shadow-lg rounded-lg"
                                    :src="imageP"
                                    alt="recipeImage"
                                    @click="showImage(index)"
                                />
                            </div>
                        </div>
                    </div>

                    <div
                        class="relative h-0 mt-96 pt-10 sm:pt-0 sm:mt-48 md:mt-128 lg:mt-0 xl:mt-0 pb-0 md:mb-72"
                    >
                        <div class="px-4">
                            <h2
                                class="mb-2 leading-tight tracking-tight font-bold text-gray-800 text-2xl md:text-3xl"
                            >{{ recipe.description }}</h2>
                            <p class="text-gray-500 text-sm mt-5">
                                By
                                <a
                                    href="#"
                                    class="text-indigo-600 hover:underline"
                                >{{ recipe.users.name }}</a>
                            </p>
                            <h4 class="text-gray-500 mt-5">Category: {{ recipe.category }}</h4>
                            <h4 class="text-gray-500 mt-5">
                                Preparation Time:
                                {{ recipe.prep_time }} Min
                            </h4>
                            <h4 class="text-gray-500 mt-5">
                                Calories:
                                {{ recipe.calories }} KCal
                            </h4>
                            <h4 class="text-gray-500 mt-5">Servings: {{ recipe.serving }}</h4>
                            <h4 class="text-gray-500 mt-5">
                                Posted at:
                                {{
                                    convertTime(
                                        recipe.created_at
                                    )
                                }}
                            </h4>

                            <div class="flex xl:mt-20 lg:pt-10 space-x-4">
                                <button
                                    type="button"
                                    class="h-14 px-20 py-2 font-semibold flex rounded-xl bg-green hover:bg-gradient-to-r from-green-500 to-pink-500 hover:shadow-2xl text-white items-center"
                                    @click="addFavorite()"
                                >
                                    <i class="bx bxs-heart bx-md"></i>
                                    <span>add to favorite</span>
                                </button>
                            </div>
                        </div>
                    </div>
                    <!-- <div class="relative col-span-2 h-0 pb-2/3 sm:pg-1/3 lg:pg-2/3">
                        <h1>Hello Guys</h1>
                    </div>-->
                </div>
                <div class="w-full mb-32 lg:mt-60 xl:mt-0">
                    <h2 class="w-full font-black font-great text-4xl mb-5">Ingredients</h2>
                    <ul
                        v-for="(ing, index) in recipe.ingrediants"
                        :key="index"
                        class="text-2xl ml-10 pb-3"
                    >
                        <li>{{ index + 1 }}. &nbsp;{{ ing }}</li>
                    </ul>
                    <div class="mt-10">
                        <h2 class="w-full font-black font-great text-4xl mb-5">Steps</h2>
                        <ul
                            v-for="(step, index) in recipe.steps"
                            :key="index"
                            class="text-2xl ml-10 pb-3"
                        >
                            <li>
                                <span>
                                    <img
                                        src="https://img.icons8.com/ios-glyphs/30/000000/left-footprint--v2.png"
                                        class="inline-block"
                                    />
                                    Step {{ index + 1 }}
                                </span>

                                <br />

                                <span class="ml-10">{{ step }}</span>
                                <br />
                            </li>
                        </ul>
                    </div>
                </div>

                <!-- ============== Comments ====================== -->

                <!-- <div
                    v-if="reg_show_alert"
                    class="text-white bg-green-400 text-2xl text-center font-bold p-5 mb-4"
                    :class="reg_alert_variant"
                >{{ reg_alert_msg }}</div>-->
                <h2 class="w-full font-black font-great text-4xl mb-5">Comments</h2>
                <vee-form :validation-schema="schema" @submit="register">
                    <!-- <input type="hidden" /> -->
                    <vee-field
                        type="text"
                        name="comment"
                        class="w-full shadow-inner shadow-green-200 p-4 mb-4 rounded-lg focus:outline-none focus:border-green focus:ring-green focus:ring-1 text-2xl"
                        v-model="newComment"
                        placeholder="Comment..."
                        id="comment_content"
                    ></vee-field>
                    <ErrorMessage class="text-red-600 ml-5" name="comment" />
                    <button
                        class="font-bold mb-10 py-2 px-4 w-full bg-green text-lg text-white shadow-md rounded-lg"
                        type="submit"
                    >Comment</button>
                </vee-form>

                <div
                    class="bg-white rounded-lg p-3 flex flex-col justify-center items-center md:items-start shadow-lg mb-4"
                    v-for="comment in comments"
                    :key="comment"
                >
                    <div class="flex flex-row justify-center mr-2">
                        <img
                            alt="avatar"
                            width="48"
                            height="48"
                            class="rounded-full w-10 h-10 mr-4 shadow-lg mb-4"
                            :src="comment.users.avatar"
                        />
                        <h3
                            class="text-green-600 font-semibold text-lg text-center md:text-left"
                        >{{ comment.users.name }}</h3>
                    </div>

                    <p
                        style="width: 90%"
                        class="text-gray-600 text-lg text-center md:text-left"
                    >{{ comment.comment }}</p>
                </div>
            </div>
        </template>
    </div>
</template>

<script setup>

import { ref, computed } from 'vue'
import { useStore } from 'vuex'
import { signIn } from '../auth'
import { useRouter, useRoute } from 'vue-router'
import { useQuery, useResult, useMutation } from '@vue/apollo-composable'
import { get_recipe_detail, get_comment } from '../graphql/query'
import { create_comment, rate_recipe, user_favorite } from '../graphql/mutation'
import vue3starRatings from 'vue3-star-ratings'
import Popper from 'vue3-popper'
import { useHead } from '@vueuse/head'
useHead({
    title: 'Details',
});

const route = useRoute()
const router = useRouter()
const id = route.query.id // read parameter id (it is reactive)
const showControl = ref(false)
const disableClick = ref(true)
const ratingVal = ref(0)
const step = ref(0.2)
const newComment = ref(' ')
const reg_in_submission = ref(false)
const reg_show_alert = ref(false)
const reg_alert_variant = ref('bg-green-400')
const reg_alert_msg = ref('')
const schema = {
    comment: 'required'
}


const store = useStore()
const userData = computed(() => store.getters['main/user'])
console.log(userData.value, 'this is user data from detials page');

const register = (values) => {
    reg_show_alert.value = true
    reg_in_submission.value = true
    // reg_alert_variant.value = ref('bg-green-500')
    // reg_alert_msg.value = ref('Please wait! Your Comment!')
    // reg_alert_variant.value = ref('bg-green-500')
    // reg_alert_msg.value = ref('Success! Your Comment has been created.')
    if (userData.value) {
        createComment()
    } else {
        signIn()
    }
    // setTimeout(() => {
    //     reg_show_alert.value = false
    // }, 2000)
}


const addFavorite = () => {
    if (userData.value) {
        favorite()
    } else {
        signIn()
    }
}

const addrateRecipe = () => {
    if (userData.value) {
        rateRecipe()
    } else {
        signIn()
    }
}
//  =============  Queries ====================

const {
    result: recipeDetail,
    loading: recipeLoading,
    error: recipeError,
    onResult: detailOnResult,
    refetch
} = useQuery(get_recipe_detail.query,
    () => ({ id }))


detailOnResult(queryResult => {
    console.log(queryResult.data, 'this is queryy result right here')
})
refetch()

const recipe = useResult(recipeDetail, null, data => data.recipes[0])

const {
    result: getComment,
    loading: commentLoading,
    error: commentError,
    refetch: commentRefetch
} = useQuery(get_comment.query, { id })
commentRefetch()

const comments = useResult(getComment, null, data => data.comments)

console.log(comments, 'this are comments')

const imgToShow = ref(0)

//  =============  Mutations ====================

const {
    mutate: createComment,
    onDone
} = useMutation(create_comment.mutation,
    () => ({
        variables: {
            recipe_id: id,
            comment: newComment.value
        },
        update: (cache, { }) => {
            commentRefetch()
        },
    })
)


const {
    mutate: rateRecipe,
    loading: ratingLoading,
    error: ratingError
} = useMutation(rate_recipe.mutation,
    () => ({
        variables: {
            recipe_id: id,
            rating_val: ratingVal.value
        }
    })
)

const {
    mutate: favorite,
    loading: favLoading,
    error: favError
} = useMutation(user_favorite.mutation,
    () => ({
        variables: {
            recipe_id: id
        }
    })
)

onDone(() => {
    newComment.value = ' '
})

const showImage = (index) => {
    imgToShow.value = index
}

const convertTime = (apiTime) => {
    const date = new Date(apiTime)
    return date.toDateString()
}

</script>

<style scoped>
.vue3-star-ratings__wrapper[data-v-3d93c878] {
    padding: 0;
}
#stars.vue3-star-ratings__wrapper.stars {
    padding: 0;
    margin-left: 40px;
    margin-top: 20px;
}

:deep(.popper) {
    /*background: #797979;*/
    background: rgba(82, 117, 81, 0.99);
    padding: 20px;
    border-radius: 20px;
    color: #fff;
    font-weight: bold;
    text-transform: uppercase;
}
:deep(.popper #arrow::before) {
    background: rgba(82, 117, 81, 0.99);
    /*background: #797979;*/
}
:deep(.popper:hover),
:deep(.popper:hover > #arrow::before) {
    background: #627e5f;
}

.slide-enter-active,
.slide-leave-active {
    transition: opacity 0.5s, transform 0.5s;
}
.slide-enter-from,
.slide-leave-to {
    opacity: 0;
    transform: translateX(-10%);
}
</style>