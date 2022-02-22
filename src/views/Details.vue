<template>
    <div>
        <!-- <h2>{{ id }}</h2> -->
        <p v-if="recipeError">Something Went Wrong</p>
        <p v-if="recipeLoading">Loading...</p>
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
                            <router-link
                                :to="{
                                    name: 'Browse',
                                }"
                                class="hover:underline hover:text-gray-600"
                            >{{ recipe[0].category }}</router-link>
                            <!-- <span>{{ recipe[0].category }}</span> -->
                        </div>
                    </div>
                </div>
                <h1 class="w-full font-black font-great text-6xl mb-5">{{ recipe[0].title }}</h1>
                <div class="mb-10">
                    <vue3starRatings
                        class="stars"
                        id="stars"
                        v-model="recipe[0].avg_rating"
                        starSize="25"
                        starColor="#71B214"
                        inactiveColor="#e6ebdf"
                        :showControl="false"
                        :disableClick="true"
                        controlSize="0"
                    />
                    <div class="ml-5 inline-block">
                        <div class="mr-10 inline-block">
                            {{ recipe[0].review.toFixed(0) }}
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
                                        :step="0.1"
                                        controlBg="grey"
                                        :disableClick="true"
                                        class="w-full"
                                    />
                                </div>
                                <div class="flex justify-center">{{ ratingVal }} Stars</div>
                                <button
                                    class="bg-green mr-5 sm:w-auto h-8 px-10 font-large text-white rounded-xl whitespace-nowrap hover:shadow-xl transition-shadow duration-300"
                                    @click="rateRecipe(); close();"
                                >Rate</button>
                                <button
                                    class="bg-green sm:w-auto h-8 px-10 font-large text-white rounded-xl whitespace-nowrap hover:shadow-xl transition-shadow duration-300"
                                    @click="close"
                                >Close</button>
                            </template>
                        </Popper>
                    </div>
                </div>
                <div class="w-full sm:mb-32 lg:mb-10 xl:mb-0 grid sm:grid-cols-1 lg:grid-cols-3 xl:grid-cols-3 gap-x-4 gap-y-0">
                    <div
                        class="relative col-span-4 sm:col-span-3 lg:col-span-2 xl:col-span-2 h-0 lg:pb-1/3 xl:pb-1/3 sm:pt-1/3 lg:pt-2/3"
                    >
                        <img
                            class="absolute inset-0 w-full h-128 object-cover shadow-lg rounded-lg"
                            :src= recipe[0].image[imgToShow]
                            alt="recipeImage"
                        />
                        <!-- Image Selection -->
                        <div
                            class="w-full h-full mt-128 pt-2 sm:mt-80 md:mt-72 lg:mt-32 xl:mt-10 grid grid-cols-6 sm:grid-cols-6 lg:grid-cols-4 xl:grid-cols-6 gap-x-1 gap-y-28 sm:gap-x-1 sm:gap-y-20 md:gap-x-1 md:gap-y-16 lg:gap-x-0 lg:gap-y-2 xl:gap-x-1 xl:gap-y-6"
                        >
                            <div
                                v-for="(imageP, index) in recipe[0].image"
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
                    <div class="relative h-0 mt-96 pt-10 sm:pt-0 sm:mt-48 md:mt-24 lg:mt-0 xl:mt-0 pb-0">
                        <div class="px-4">
                            <h2
                                class="mb-2 leading-tight tracking-tight font-bold text-gray-800 text-2xl md:text-3xl"
                            >{{ recipe[0].description }}</h2>
                            <p class="text-gray-500 text-sm mt-5">
                                By
                                <a href="#" class="text-indigo-600 hover:underline">Abebe</a>
                            </p>
                            <h4 class="text-gray-500 mt-5">Category: {{ recipe[0].category }}</h4>
                            <h4 class="text-gray-500 mt-5">
                                Preparation Time:
                                {{ recipe[0].prep_time }} Min
                            </h4>
                            <h4 class="text-gray-500 mt-5">
                                Calories:
                                {{ recipe[0].calories }} KCal
                            </h4>
                            <h4 class="text-gray-500 mt-5">Servings: {{ recipe[0].serving }}</h4>
                            <h4 class="text-gray-500 mt-5">
                                Posted at:
                                {{
                                    convertTime(
                                        recipe[0].created_at
                                    )
                                }}
                            </h4>

                            <div class="flex xl:mt-20 lg:pt-10 space-x-4">
                                <button
                                    type="button"
                                    class="h-14 px-20 py-2 font-semibold flex rounded-xl bg-green hover:bg-gradient-to-r from-green-500 to-pink-500 hover:shadow-2xl text-white items-center"
                                    @click="createFav()"
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
                <div class="w-full">
                        <h1>Hello Guys</h1>
                </div>
            </div>
        </template>
    </div>
</template>

<script setup>

import { ref } from 'vue'
import { useRouter, useRoute } from 'vue-router'
import { useQuery, useResult } from '@vue/apollo-composable'
import { get_recipe_detail } from '../graphql/query'
import vue3starRatings from 'vue3-star-ratings'
import Popper from 'vue3-popper'
import { useHead } from '@vueuse/head'
useHead({
    title: 'Details',
});

const route = useRoute()
const router = useRouter()
const id = route.params.id // read parameter id (it is reactive)
const showControl = ref(false)
const disableClick = ref(true)
const ratingVal = ref(0)
const step = ref(0.1)

console.log( localStorage.getItem('user'), 'this is user info')



const {
    result,
    loading: recipeLoading,
    error: recipeError
} = useQuery(get_recipe_detail.query, { id })

const recipe = useResult(result, null, data => data.recipes)
const imgToShow = ref(0)

const rateRecipe = () => {
    console.log(ratingVal.value, 'rating value')
}
const createFav = () => {
    console.log('fav created')
}
const showImage = (index) => {
    imgToShow.value = index
}


// console.log(recipe, 'this is all the recipe')
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
</style>