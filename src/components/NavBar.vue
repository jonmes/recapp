<template>
    <div class="bg-gradient-to-r from-green-200 via-yellow-100 to-green-100 sticky top-0 z-20">
        <nav
            class="flex max-w-screen-xl justify-between items-center py-4 px-6 mx-auto md:px-12 lg:px-16 xl:px-24"
        >
            <router-link
                :to="{ name: 'Home' }"
                class="text-3xl md:text-4xl font-bold tracking-wide slideUp"
            >
                <span
                    class="text-black before:block before:absolute before:-inset-1 hover:shadow-2xl hover:before:-skew-y-1 before:-skew-y-6 before:bg-green relative inline-block"
                >
                    <span class="relative">r</span>
                    <span class="relative text-green-200">E</span>
                    <span class="relative">cipe</span>
                </span>
            </router-link>
            <div
                class="inset-0 transition-all bg-white/70 backdrop-blur-xl z-20 md:static md:bg-transparent md:flex items-center justify-center space-y-8 md:space-y-0 md:space-x-8 flex-col md:flex-row lg:space-x-14"
                :class="sidebarOpen ? 'fixed flex' : 'hidden'"
            >
                <ul
                    class="flex flex-col md:flex-row items-center space-y-6 md:space-y-0 md:space-x-6 lg:md:-x-8"
                >
                    <li class="text-lg md:text-base lg:text-lg font-medium group">
                        <router-link :to="{ name: 'Home' }" @click="sidebarOpen = !sidebarOpen">Home</router-link>
                        <div
                            class="h-0.5 bg-green scale-x-0 group-hover:scale-100 transition-transform origin-left rounded-full duration-300 ease-out"
                        />
                    </li>
                    <li
                        class="text-lg md:text-base lg:text-lg font-medium group"
                        :class="{ 'text-green': activeMenu === 'about' }"
                    >
                        <router-link
                            :to="{ name: 'Browse' }"
                            @click="sidebarOpen = !sidebarOpen"
                        >Browse</router-link>
                        <div
                            class="h-0.5 bg-green scale-x-0 group-hover:scale-100 transition-transform origin-left rounded-full duration-300 ease-out"
                        />
                    </li>
                    <li
                        class="text-lg md:text-base lg:text-lg font-medium group"
                        :class="{ 'text-green': activeMenu === 'about' }"
                    >
                        <router-link :to="{ name: 'Cook' }" @click="sidebarOpen = !sidebarOpen">Cook</router-link>
                        <div
                            class="h-0.5 bg-green scale-x-0 group-hover:scale-100 transition-transform origin-left rounded-full duration-300 ease-out"
                        />
                    </li>
                    <li class="text-lg md:text-base lg:text-lg font-medium group">
                        <div v-if="!authLoading">
                            <button
                                v-if="!authenticated"
                                @click="login"
                                class="flex justify-center items-center sm:w-auto h-8 px-4 font-medium text-gray-900 border border-gray-900 rounded-xl whitespace-nowrap hover:shadow-xl transition-shadow duration-300"
                            >Login</button>

                            <div v-if="authenticated">
                                <Popper arrow class="inline-block">
                                    <div class="flex items-center justify-center">
                                        <div class="bg-red-400 w-12 h-12 rounded-full">
                                            <button class="bg-green-400 w-12 h-12 rounded-full">
                                                <img class="w-12 h-12 rounded-full" :src="picture" />
                                            </button>
                                        </div>
                                    </div>
                                    <template #content="{}">
                                        <div class="menu">
                                            <h3
                                                class="w-full flex justify-center items-center text-black text-md py-4"
                                            >{{ nickname }}</h3>
                                            <ul class>
                                                <li
                                                    class="list-none py-1 flex justify-start hover:text-black"
                                                >
                                                    <box-icon name="user" animation="burst-hover">
                                                        <i class="bx bx-user"></i>
                                                    </box-icon>
                                                    <router-link :to="{ name: 'Profile' }">
                                                        <span
                                                            class="pl-2 transition-all duration-500"
                                                        >Profile</span>
                                                    </router-link>
                                                </li>
                                                <li
                                                    class="list-none py-1 border-t border-gray flex justify-start hover:text-black"
                                                >
                                                    <box-icon
                                                        name="heart"
                                                        animation="flashing-hover"
                                                    >
                                                        <i class="bx bx-heart"></i>
                                                    </box-icon>
                                                    <router-link :to="{ name: 'Favorites' }">
                                                        <span
                                                            class="pl-2 transition-all duration-500"
                                                        >Favorites</span>
                                                    </router-link>
                                                </li>
                                                <li
                                                    class="list-none py-2 border-t border-gray flex justify-start hover:text-black"
                                                >
                                                    <box-icon
                                                        name="log-out-circle"
                                                        animation="fade-left-hover"
                                                    >
                                                        <i class="bx bx-log-out-circle"></i>
                                                    </box-icon>
                                                    <span
                                                        class="pl-2 cursor-pointer transition-all duration-500"
                                                        @click="logout"
                                                    >Logout</span>
                                                    <!-- <a href="#" @click="logout">Logout</a> -->
                                                </li>
                                            </ul>
                                        </div>
                                    </template>
                                </Popper>
                            </div>
                        </div>
                    </li>
                </ul>
            </div>
            <button @click="sidebarOpen = !sidebarOpen" class="block md:hidden relative z-30">
                <HamburgerIcon class="w-8 h-8 fill-current text-gray-900" />
            </button>
        </nav>
    </div>
</template>

<script setup>
import { ref, computed, onBeforeMount, onMounted, onUpdated } from 'vue'
import { useStore } from 'vuex'
import { useQuery, useLazyQuery, useResult } from '@vue/apollo-composable'
import { get_user_data } from '../graphql/query'
import { useRouter } from 'vue-router'
import { signIn, signOut } from '../auth'
import HamburgerIcon from '../assets/icons/hamburger.svg'
import Popper from 'vue3-popper'
const menus = ['Home', 'Browse', 'Cook', 'Contact']
const sidebarOpen = ref(false)
const activeMenu = 'Home'
const store = useStore()
const router = useRouter()
const authLoading = computed(() => store.getters['main/isLoading'])
const authenticated = computed(() => store.getters['main/isAuthenticated'])
const userData = computed(() => store.getters['main/user'])
const nickname = ref('')
const picture = ref('')
const enabled = ref(false)
const userId = ref('')



// const settingProfile = () => {
//     if (localStorage.user) {
//         nickname.value = JSON.parse(localStorage.user).nickname
//         picture.value = JSON.parse(localStorage.user).picture
//         // enabled.value = true
//     }
// }

// settingProfile()


const login = async () => {
    await signIn()
    if (authenticated.value) {
        router.push({ name: 'Home' })
        // settingProfile()
        // $router.go(0);
        enabled.value = true
    }
}


const logout = async () => {
    await signOut()
}

// ================ Query ==================


onUpdated(() => {
    userId.value = JSON.parse(localStorage.user).sub;
    console.log(userId.value, 'this is where we know about user authentication')
    if(authenticated.value){
        enabled.value = true
    }
    console.log(enabled.value, 'this is authenticated value .j000000000000000000000000000000000');
})


const {
    result: userResult,
    loading: userLoading,
    error: userError,
    // refetch: refetchUser,
    onResult
} = useQuery(get_user_data.query,
    () => ({ user_id: userId.value }),
    () => ({ enabled: enabled.value })
)

picture.value = useResult(userResult, null, data => data.users_by_pk.avatar)
console.log(picture.value, 'this is picture')



onResult(queryResult => {
    console.log(queryResult.data, 'this is queyr result data')
    if(queryResult.data){
        picture.value = queryResult.data.users_by_pk.avatar
        nickname.value = queryResult.data.users_by_pk.name
        console.log(picture.value, 'picture value')
    }
    console.log(queryResult.loading, 'same here')
})




// refetchUser()
// =========================================

</script>


<style scoped>
:deep(.popper) {
    background: #ffffff;
    padding: 10px 20px;
    border-radius: 20px;
    box-sizing: 0 5px 25px rgba(0, 0, 0, 0.1);
    color: rgb(153, 153, 153);
    font-weight: bold;
    transition: 0.5s;
    box-shadow: 2px 6px 20px rgba(0, 0, 0, 0.4);
}
:deep(.popper #arrow::before) {
    background: #ffffff;
}
:deep(.popper:hover),
:deep(.popper:hover > #arrow::before) {
    background: #ffffff;
}
a.router-link-active {
    color: green;
}
</style>