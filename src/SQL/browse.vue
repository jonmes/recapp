<template>
    <div class="min-h-screen bg-gradient-to-br from-transparent to-green-100">
        <!-- header -->

        <!-- body -->
        <div
            class="flex max-w-screen-xl justify-between items-center py-6 px-6 mx-auto md:px-12 lg:px-16 xl:px-24"
        >
            <section class="container mx-auto pt-12">
                <!-- title -->
                <div class="relative flex items-center font-bold">
                    <h2 class="text-2xl">Browse by Category</h2>
                    <a href class="ml-10 flex items-center text-gray-400">
                        <span class="text-sm mr-4">All Categories</span>
                        <svg
                            class="svg-inline--fa fa-chevron-right fa-w-8 fa-9x"
                            width="15px"
                            height="15px"
                            viewBox="0 0 256 512"
                            aria-hidden="true"
                            focusable="false"
                            data-prefix="far"
                            data-icon="chevron-right"
                            role="img"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <path
                                fill="currentColor"
                                d="M24.707 38.101L4.908 57.899c-4.686 4.686-4.686 12.284 0 16.971L185.607 256 4.908 437.13c-4.686 4.686-4.686 12.284 0 16.971L24.707 473.9c4.686 4.686 12.284 4.686 16.971 0l209.414-209.414c4.686-4.686 4.686-12.284 0-16.971L41.678 38.101c-4.687-4.687-12.285-4.687-16.971 0z"
                            />
                        </svg>
                    </a>
                </div>
                <!-- cards -->
                <section>
                    <div class="mt-10 mb-10 w-full">
                        <ul class="w-full grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-6 gap-4">
                            <li
                                class="m-3.5 h-52 w-full bg-gray-100 rounded-xl flex flex-col items-center justify-center text-center duration-300 hover:bg-white hover:shadow-2xl"
                            >
                                <img
                                    class="max-h-20"
                                    src="https://i.ibb.co/Smq7sZK/2021-11-07-13h26-50.png"
                                    alt
                                />
                                <span class="font-semibold">Fruits & Vegetables</span>
                            </li>
                            <li
                                class="m-3.5 h-52 w-full bg-gray-100 rounded-xl flex flex-col items-center justify-center text-center duration-300 hover:bg-white hover:shadow-2xl"
                            >
                                <img
                                    class="max-h-20"
                                    src="https://i.ibb.co/PwYJkQs/2021-11-07-13h39-41.png"
                                    alt
                                />
                                <!-- <Bread class="w-20 h-20 text-green-900 fill-current" /> -->
                                <span class="font-semibold">Breads & Sweets</span>
                            </li>
                            <!-- <li
                            class="m-3.5 h-52 w-40 bg-gray-100 rounded-xl flex flex-col items-center justify-center text-center duration-300 hover:bg-white hover:shadow-2xl"
                        >
                            <img
                                class="max-h-20"
                                src="../assets/images/snacks.png"
                                alt
                            />
                        
                            <span class="font-semibold">Snacks</span>
                            </li>-->
                            <li
                                class="m-3.5 h-52 w-full bg-gray-100 rounded-xl flex flex-col items-center justify-center text-center duration-300 hover:bg-white hover:shadow-2xl"
                            >
                                <img
                                    class="max-h-20"
                                    src="https://i.ibb.co/Hx3vbFx/2021-11-07-13h39-52.png"
                                    alt
                                />
                                <span class="font-semibold">Frozen Seafoods</span>
                            </li>

                            <li
                                class="m-3.5 h-52 w-full bg-gray-100 rounded-xl flex flex-col items-center justify-center text-center duration-300 hover:bg-white hover:shadow-2xl"
                            >
                                <img
                                    class="max-h-20"
                                    src="https://i.ibb.co/4PCjhsS/2021-11-07-13h40-02.png"
                                    alt
                                />
                                <span class="font-semibold">Raw Meats</span>
                            </li>
                            <li
                                class="m-3.5 h-52 w-full bg-gray-100 rounded-xl flex flex-col items-center justify-center text-center duration-300 hover:bg-white hover:shadow-2xl"
                            >
                                <img class="max-h-20" src="../assets/images/soup.png" alt />
                                <span class="font-semibold">Soup</span>
                            </li>
                            <li
                                class="m-3.5 h-52 w-full bg-gray-100 rounded-xl flex flex-col items-center justify-center text-center duration-300 hover:bg-white hover:shadow-2xl"
                            >
                                <img class="max-h-20" src="../assets/images/juce.png" alt />
                                <span class="font-semibold">Juice & Cocktails</span>
                            </li>
                        </ul>
                    </div>
                </section>

                <section>
                    <h1
                        class="w-full mt-10 font-great font-black text-4xl text-center"
                    >Search Your Favorite Recipe</h1>
                    <div class="w-full mt-16 mb-20 my-2 flex sm:flex-row flex-col">
                        <div class="flex flex-row mb-1 sm:mb-0">
                            <div class="relative">
                                <select
                                    class="appearance-none h-full rounded-l border block appearance-none w-full bg-white border-gray-400 text-gray-700 py-2 px-4 pr-8 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                                    v-model="selectedTime"
                                >
                                    <option value="All">All</option>
                                    <option value="Under 15">Under 15</option>
                                    <option value="15 - 30 min">15 - 30 min</option>
                                    <option value="30 - 60 min">30 - 60 min</option>
                                    <option value="Over 1 hour">Over 1 hour</option>
                                </select>
                                <div
                                    class="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700"
                                >
                                    <svg
                                        class="fill-current h-4 w-4"
                                        xmlns="http://www.w3.org/2000/svg"
                                        viewBox="0 0 20 20"
                                    >
                                        <path
                                            d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"
                                        />
                                    </svg>
                                </div>
                            </div>
                        </div>
                        <div class="w-full block relative">
                            <span class="h-full absolute inset-y-0 left-0 flex items-center pl-2">
                                <svg
                                    viewBox="0 0 24 24"
                                    class="h-4 w-4 fill-current text-gray-500"
                                >
                                    <path
                                        d="M10 4a6 6 0 100 12 6 6 0 000-12zm-8 6a8 8 0 1114.32 4.906l5.387 5.387a1 1 0 01-1.414 1.414l-5.387-5.387A8 8 0 012 10z"
                                    />
                                </svg>
                            </span>
                            <span class="w-full">
                                <input
                                    placeholder="Search by recipe name or by ingrediant"
                                    v-model="searchContent"
                                    @keypress.enter="searchView()"
                                    class="inline-block w-10/12 appearance-none rounded-r rounded-l sm:rounded-l-none border border-gray-400 border-b block pl-8 pr-6 py-2 bg-white text-sm placeholder-gray-400 text-gray-700 focus:bg-white focus:placeholder-gray-600 focus:text-gray-700 focus:outline-none"
                                />
                                <button
                                    class="bg-green sm:w-auto ml-4 h-10 py-2 h-8 px-10 font-large text-white rounded-md whitespace-nowrap hover:shadow-xl transition-shadow duration-300"
                                    @click="searchView()"
                                >Search</button>
                            </span>
                        </div>
                    </div>
                </section>

                <div v-if="recipesError">Something went wrong... {{ recipesError }}</div>

                <template v-if="recipesLoading">
                    <div class="w-full flex justify-center">
                        <!-- <CubeSpin></CubeSpin> -->
                        Loading...
                    </div>
                </template>
                <template v-else>
                    <div
                        class="w-full h-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 gap-x-7 gap-y-4"
                    >
                        <div
                            v-show="true"
                            class="max-w-xs mb-5 rounded-md overflow-hidden hover:scale-105 hover:shadow-2xl transition duration-300 cursor-pointer"
                            v-for="rec in searchRecipe"
                            :key="rec.id"
                        >
                            <router-link
                                role="button"
                                :to="{
                                    name: 'Details',
                                    params: { id: rec.id },
                                }"
                                class="font-semibold text-gray-800"
                            >
                                <div>
                                    <img class="w-80 h-80" :src="rec.image[0]" alt="pic" />
                                </div>
                                <div class="py-4 px-4 bg-white">
                                    <h3 class="text-2xl font-great font-black text-gray-600">
                                        {{ rec.title }}
                                        <br />by &quot; Abebe
                                    </h3>
                                    <p class="mt-4 text-lg font-thin">{{ rec.description }}</p>
                                    <vue3starRatings
                                        class="stars"
                                        id="stars"
                                        v-model="rec.avg_rating"
                                        starSize="25"
                                        starColor="#10B981"
                                        inactiveColor="#e6ebdf"
                                        controlBg="transparent"
                                        :showControl="false"
                                        :disableClick="true"
                                        controlSize="0"
                                    />

                                    <span
                                        class="flex items-center justify-center space-x-4 mt-4 w-full text-white bg-green hover:bg-green-500 py-1 rounded"
                                    >
                                        <svg
                                            width="20px"
                                            height="20px"
                                            fill="white"
                                            viewBox="0 0 20 20"
                                            xmlns="http://www.w3.org/2000/svg"
                                        >
                                            <path
                                                d="M10 4.4C3.439 4.4 0 9.232 0 10c0 .766 3.439 5.6 10 5.6 6.56 0 10-4.834 10-5.6 0-.768-3.44-5.6-10-5.6zm0 9.907c-2.455 0-4.445-1.928-4.445-4.307S7.545 5.691 10 5.691s4.444 1.93 4.444 4.309-1.989 4.307-4.444 4.307zM10 10c-.407-.447.663-2.154 0-2.154-1.228 0-2.223.965-2.223 2.154s.995 2.154 2.223 2.154c1.227 0 2.223-.965 2.223-2.154 0-.547-1.877.379-2.223 0z"
                                            />
                                        </svg>
                                        <span>View Recipe</span>
                                    </span>
                                </div>
                            </router-link>
                        </div>

                        <!-- <div
                            v-show=" false"
                            class="max-w-xs mb-5 rounded-md overflow-hidden hover:scale-105 hover:shadow-2xl transition duration-300 cursor-pointer"
                            v-for="rec in recipe"
                            :key="rec.id"
                        >
                            <router-link
                                role="button"
                                :to="{
                                    name: 'Details',
                                    params: { id: rec.id },
                                }"
                                class="font-semibold text-gray-800"
                            >
                                <div>
                                    <img class="w-80 h-80" :src="rec.image[0]" alt="pic" />
                                </div>
                                <div class="py-4 px-4 bg-white">
                                    <h3 class="text-2xl font-great font-black text-gray-600">
                                        {{ rec.title }}
                                        <br />by &quot; Abebe
                                    </h3>
                                    <p class="mt-4 text-lg font-thin">{{ rec.description }}</p>
                                    <vue3starRatings
                                        class="stars"
                                        id="stars"
                                        v-model="rec.avg_rating"
                                        starSize="25"
                                        starColor="#10B981"
                                        inactiveColor="#e6ebdf"
                                        controlBg="transparent"
                                        :showControl="false"
                                        :disableClick="true"
                                        controlSize="0"
                                    />

                                    <span
                                        class="flex items-center justify-center space-x-4 mt-4 w-full text-white bg-green hover:bg-green-500 py-1 rounded"
                                    >
                                        <svg
                                            width="20px"
                                            height="20px"
                                            fill="white"
                                            viewBox="0 0 20 20"
                                            xmlns="http://www.w3.org/2000/svg"
                                        >
                                            <path
                                                d="M10 4.4C3.439 4.4 0 9.232 0 10c0 .766 3.439 5.6 10 5.6 6.56 0 10-4.834 10-5.6 0-.768-3.44-5.6-10-5.6zm0 9.907c-2.455 0-4.445-1.928-4.445-4.307S7.545 5.691 10 5.691s4.444 1.93 4.444 4.309-1.989 4.307-4.444 4.307zM10 10c-.407-.447.663-2.154 0-2.154-1.228 0-2.223.965-2.223 2.154s.995 2.154 2.223 2.154c1.227 0 2.223-.965 2.223-2.154 0-.547-1.877.379-2.223 0z"
                                            />
                                        </svg>
                                        <span>View Recipe</span>
                                    </span>
                                </div>
                            </router-link>
                        </div> -->
                    </div>
                </template>
            </section>
        </div>
    </div>
</template>

<script setup>
import { ref, watchEffect } from 'vue'
import { useQuery, useResult } from '@vue/apollo-composable'
import { get_all_recipe, search_recipe } from '../graphql/query'
import vue3starRatings from 'vue3-star-ratings'
import Bread from '../assets/images/bread.svg'
// import CubeSpin from 'vue-loading-spinner/components/Cube'
import { useHead } from '@vueuse/head'
useHead({
    title: 'Browse Recipe',
});

// const searchStatus = ref(false)
const selectedTime = ref('All')
const searchContent = ref('')
// const search = ref('')
const showControl = ref(false)
const disableClick = ref(true)
// const enabled = ref(false)


// const searchView = () => {
    // search.value = searchContent.value
    // console.log(search.value, 'this is search value')
    // searchStatus.value = true
    //     if (search.value != '') {
    //         enabled.value = true
    //     }
// }


// const {
//     result: browseRecipe,
//     loading: recipesLoading,
//     error: recipesError,
//     refetch: allRefetch
// } = useQuery(get_all_recipe.query)
// allRefetch()

// const recipe = useResult(browseRecipe, null, data => data.recipes)


const {
    result: searchResult,
    loading: searchLoading,
    error: searchError,
    refetch: allRefetch
} = useQuery(search_recipe.query,
    () => ({ search: searchContent.value, })
    // () => ({enabled: enabled.value,})
)

const searchRecipe = useResult(searchResult, null, data => data.search_recipes);

allRefetch()




</script>


<style scoped>
</style>