<template>
  <div
    :class="sidebarOpen ? 'overflow-hidden h-screen' : ''"
  >

    <section
      class="flex flex-wrap-reverse gap-y-24 justify-between py-12 px-6 mx-auto max-w-screen-xl sm:px-8 md:px-12 lg:px-16 xl:px-24"
    >
      <div class="relative z-10 md:w-1/2 w-full">
        <img
          class="absolute top-0 right-0 md:-top-4 md:-right-8 w-24 h-auto slideUp"
          src="/img/leaf.png"
          alt
        />
        <span class="flex items-center px-1 text-xl text-green slideUp">
          <span class="font-medium">100% Organic food</span>
          <img class="w-auto h-8" src="/img/vegetable.png" alt />
        </span>
        <h1
          class="pt-4 text-4xl font-great sm:text-5xl lg:text-6xl text-green font-bold tracking-tighter leading-tight whitespace-nowrap slideUp"
        >
          Healthy Lifestyle
          <br />is your only
          <br />
          <span class="whitespace-nowrap text-green">unfair advantage</span>
        </h1>
        <!-- <h2 class="bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-green-500 font-bold text-3xl md:text-4 lg:text-6xl text-center lg:text-center mb-2 py-2 slideUp">
				Learn. Cook. Share.<br>Cooking Made Easy.
        </h2>-->
        <p class="pt-8 sm:text-lg max-w-md font-normal text-gray-600 leading-relaxed z-0 slideUp">
          Cook healthy foods with r
          <span class="text-green">E</span>cipe daily meal posted by world wide expert nutritionist,
          chef and even Your mom🤶.
        </p>
        <div class="flex z-10 pt-8 space-x-4 sm:space-x-6">
          <div class="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <router-link
              :to="{ name: 'Browse' }"
              class="flex z-10 justify-center items-center w-full sm:w-auto h-13 px-8 bg-green font-medium text-white rounded-xl whitespace-nowrap hover:shadow-primary transition-shadow duration-300"
            >🔍Explore recipes</router-link>
            <router-link
              :to="{ name: 'Cook' }"
              class="flex justify-center items-center w-full sm:w-auto h-13 px-8 font-medium text-gray-900 border border-gray-900 rounded-xl whitespace-nowrap hover:shadow-xl transition-shadow duration-300"
            >let's cook 👩‍🍳</router-link>
          </div>
        </div>
        <div class="flex pt-20">
          <img class="w-24" src="/img/chef.png" alt />
          <div class="pt-5 pl-3">
            <div class="text-xl font-bold leading-relaxed">Chef of the month</div>
            <div class="inline-flex text-gray-600 leading-relaxed">People loved his 🍳</div>
            <div class="font-bold text-green leading-relaxed">80+ famous dishes</div>
          </div>
        </div>
        <div>
          <div class="flex md:hidden pt-8 justify-end space-x-1 font-bold">
            <span>Powered by</span>
            <Minab class="w-8 h-8 text-green-900 fill-current" />
            <span>Minab</span>
          </div>
        </div>
      </div>

      <div class="relative md:w-1/2 w-full flex flex-col justify-between">
        <img
          class="w-96 lg:w-full drop-shadow-2xl self-center lg:self-end fadeInRotate"
          src="/img/dish.png"
          alt
        />
        <div
          class="absolute right-0 lg:-right-6 top-0 lg:top-28 flex flex-col py-5 px-7 rounded-2xl shadow-xl bg-white/80 backdrop-blur-xl hover:-translate-y-2 hover:shadow-2xl transition-all duration-300"
        >
          <div class="flex -space-x-3">
            <div
              v-for="i in 3"
              class="w-13 h-13 rounded-full border-4 border-white object-cover overflow-hidden"
              :key="i"
            >
              <img :src="`/img/avatar-${i}.jpeg`" alt />
            </div>
          </div>
          <div class="pt-3 font-bold">Top Rated Chefs</div>
          <div class="flex items-center text-gray-600 leading-relaxed">
            <StarIcon class="w-5 h-5" />
            <span class="pl-1">4.9 (+2.5k Ratings)</span>
          </div>
        </div>
        <div
          class="absolute left-0 bottom-0 md:bottom-32 lg:bottom-16 flex bg-white/80 rounded-2xl shadow-xl backdrop-blur-xl hover:-translate-y-2 hover:shadow-2xl transition-all duration-300"
        >
          <img class="w-auto h-20 self-end" src="/img/hero-dish.png" alt />
          <div class="pr-7 pl-2 py-5">
            <div class="font-bold">Best Nutritions</div>
            <div class="text-gray-600 leading-relaxed">Boost Your Nutrition 🚀</div>
          </div>
        </div>
        <div class="hidden md:flex justify-end align-center space-x-1 font-bold">
          <span>Intern Project for</span>
          <Minab class="w-8 h-8 text-green-900 fill-current" />
          <span>Minab</span>
        </div>
      </div>
    </section>
    <!-- <marquee-vue /> -->
  </div>
</template>

<script setup>
import { ref, computed } from 'vue'
import HamburgerIcon from '../assets/icons/hamburger.svg'
import StarIcon from '../assets/icons/star.svg'
import Minab from '../assets/icons/minab.svg'
// import MarqueeVue from '../components/Marquee.vue';
import { useHead } from '@vueuse/head'
useHead({
  title: 'Recipe',
  style: [
    {
      children: `body {}`,
    },
  ],
});


const activeMenu = 'Home'
const menus = ['Home', 'Delivery', 'Pricing', 'FAQs', 'Contact']
const sidebarOpen = ref(false)
</script>

<style scoped></style>
