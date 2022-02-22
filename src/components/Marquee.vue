<template>
    <section
        class="flex flex-wrap gap-y-24 justify-between py-12 px-6 mx-auto max-w-screen-xl sm:px-8 md:px-12 lg:px-16 xl:px-24"
    >
        <h1 class="w-full font-great font-black text-4xl text-start">Browse By Categories</h1>
        <MarqueeText :duration="10" :repeat="4" :paused="isPaused" class="py-10 relative">
            <span class="badge badge-success ml-2 text-2xl text-bold text-black hover:text-green">
                <img
                    class="h-40 w-40 rounded-full mx-4 inline-block saturate-0 hover:saturate-100 shadow-xl backdrop-blur-xl hover:-translate-y-2 hover:shadow-2xl transition-all duration-300"
                    src="https://images.unsplash.com/photo-1467003909585-2f8a72700288?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxleHBsb3JlLWZlZWR8OXx8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=60"
                    alt
                />Salad
            </span>

            <span class="badge badge-danger ml-2 text-2xl text-bold text-black hover:text-green">
                <img
                    class="h-40 w-40 rounded-full mx-4 inline-block saturate-0 hover:saturate-100 shadow-xl backdrop-blur-xl hover:-translate-y-2 hover:shadow-2xl transition-all duration-300"
                    src="https://images.unsplash.com/photo-1565958011703-44f9829ba187?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxleHBsb3JlLWZlZWR8NHx8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=60"
                    alt
                />Cake
            </span>

            <span class="badge badge-success ml-2 text-2xl text-bold text-black hover:text-green">
                <img
                    class="h-40 w-40 rounded-full mx-4 inline-block saturate-0 hover:saturate-100 shadow-xl backdrop-blur-xl hover:-translate-y-2 hover:shadow-2xl transition-all duration-300"
                    src="https://images.unsplash.com/photo-1484723091739-30a097e8f929?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxleHBsb3JlLWZlZWR8MTJ8fHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=500&q=60"
                    alt
                />Sandwich
            </span>

            <span class="badge badge-danger ml-2 text-2xl text-bold text-black hover:text-green">
                <img
                    class="h-40 w-40 rounded-full mx-4 inline-block saturate-0 hover:saturate-100 shadow-xl backdrop-blur-xl hover:-translate-y-2 hover:shadow-2xl transition-all duration-300"
                    src="https://images.unsplash.com/photo-1529042410759-befb1204b468?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxleHBsb3JlLWZlZWR8MTh8fHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=500&q=60"
                    alt
                />MeatBall
            </span>

            <span class="badge badge-success ml-2 text-2xl text-bold text-black hover:text-green">
                <img
                    class="h-40 w-40 hover:text-green rounded-full mx-4 inline-block saturate-0 hover:saturate-100 shadow-xl backdrop-blur-xl hover:-translate-y-2 hover:shadow-2xl transition-all duration-300"
                    src="https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxleHBsb3JlLWZlZWR8MTl8fHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=500&q=60"
                    alt
                />Pizza
            </span>

            <span class="badge badge-info ml-2 text-2xl text-bold text-black hover:text-green">
                <img
                    class="h-40 w-40 rounded-full mx-4 inline-block saturate-0 hover:saturate-100 shadow-xl backdrop-blur-xl hover:-translate-y-2 hover:shadow-2xl transition-all duration-300"
                    src="https://images.unsplash.com/photo-1497034825429-c343d7c6a68f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxleHBsb3JlLWZlZWR8MjR8fHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=500&q=60"
                    alt
                />IceCream
            </span>

            <span class="badge badge-success ml-2 text-2xl text-bold text-black hover:text-green">
                <img
                    class="h-40 w-40 rounded-full mx-4 inline-block saturate-0 hover:saturate-100 shadow-xl backdrop-blur-xl hover:-translate-y-2 hover:shadow-2xl transition-all duration-300"
                    src="https://images.unsplash.com/photo-1432139509613-5c4255815697?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxleHBsb3JlLWZlZWR8MzB8fHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=500&q=60"
                    alt
                />Barbeque
            </span>
        </MarqueeText>
    </section>
</template>

<script setup>
import MarqueeText from 'vue-marquee-text-component'

</script>

<style lang="scss" scoped>
</style>