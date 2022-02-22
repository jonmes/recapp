<template>
    <div class="min-h-screen bg-gradient-to-br from-transparent to-green-100">
        <!-- header -->

        <!-- body -->
        <div
            class="flex max-w-screen-xl justify-between items-center py-6 px-6 mx-auto md:px-12 lg:px-16 xl:px-24"
        >
            <section class="container mx-auto pt-12">
                <!-- title -->
                <div class="relative flex items-end font-bold">
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
                    <div class="ml-auto flex">
                        <button
                            @click="moveleft()"
                            class="h-6 w-6 flex items-center justify-center rounded-md bg-gray-100"
                        >
                            <svg
                                class="svg-inline--fa fa-chevron-left fa-w-8 fa-3x"
                                width="15px"
                                height="15px"
                                viewBox="0 0 256 512"
                                aria-hidden="true"
                                focusable="false"
                                data-prefix="far"
                                data-icon="chevron-left"
                                role="img"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <path
                                    fill="currentColor"
                                    d="M231.293 473.899l19.799-19.799c4.686-4.686 4.686-12.284 0-16.971L70.393 256 251.092 74.87c4.686-4.686 4.686-12.284 0-16.971L231.293 38.1c-4.686-4.686-12.284-4.686-16.971 0L4.908 247.515c-4.686 4.686-4.686 12.284 0 16.971L214.322 473.9c4.687 4.686 12.285 4.686 16.971-.001z"
                                />
                            </svg>
                        </button>
                        <button
                            @click="moveright"
                            class="ml-1.5 h-6 w-6 flex items-center justify-center rounded-md bg-green-400"
                        >
                            <svg
                                class="svg-inline--fa fa-chevron-right fa-w-8 fa-3x"
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
                        </button>
                    </div>
                </div>
                <!-- cards -->
                <div class="mt-10 mb-20">
                    <ul class="-m-3.5 flex justify-start">
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
                        </li> -->
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

                <p v-if="recipesError">Something went wrong... {{recipesError}}</p>
                <p v-if="recipesLoading">Loading... Login First...</p>
                <template v-else>
                    <div
                        v-show="true"
                        class="max-w-xs mb-5 rounded-md overflow-hidden hover:scale-105 hover:shadow-2xl transition duration-500 cursor-pointer"
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
                                    class="flex items-center justify-center mt-4 w-full bg-green hover:bg-green-500 py-1 rounded"
                                >
                                    <svg
                                        width="20px"
                                        height="20px"
                                        viewBox="0 0 20 20"
                                        xmlns="http://www.w3.org/2000/svg"
                                    >
                                        <path
                                            d="M10 4.4C3.439 4.4 0 9.232 0 10c0 .766 3.439 5.6 10 5.6 6.56 0 10-4.834 10-5.6 0-.768-3.44-5.6-10-5.6zm0 9.907c-2.455 0-4.445-1.928-4.445-4.307S7.545 5.691 10 5.691s4.444 1.93 4.444 4.309-1.989 4.307-4.444 4.307zM10 10c-.407-.447.663-2.154 0-2.154-1.228 0-2.223.965-2.223 2.154s.995 2.154 2.223 2.154c1.227 0 2.223-.965 2.223-2.154 0-.547-1.877.379-2.223 0z"
                                        />
                                    </svg>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;View Recipe
                                </span>
                            </div>
                        </router-link>
                    </div>
                </template>
            </section>
        </div>
    </div>
</template>

<script setup>
import { ref } from 'vue'
import { useQuery, useResult } from '@vue/apollo-composable'
import { get_all_recipe } from '../graphql/query'
import vue3starRatings from 'vue3-star-ratings'
import Bread from '../assets/images/bread.svg'
import { useHead } from '@vueuse/head'
useHead({
    title: 'Browse Recipe',
});


const moveleft = () => {
    console.log('previous')
}

const moveright = () => {
    console.log('next')
}
const showControl = ref(false)
const disableClick = ref(true)
const {
    result,
    loading: recipesLoading,
    error: recipesError,
} = useQuery(get_all_recipe.query)

const recipe = useResult(result, null, data => data.recipes)

console.log(recipesError.value, 'recipe error value')


// console.log(recipe, "all recipes value")

</script>


<style scoped>
</style>