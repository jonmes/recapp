<template>
    <div
        class="flex flex-wrap justify-center px-6 mx-auto max-w-screen-xl sm:px-8 md:px-12 lg:px-16 xl:px-24 z-0  bg-gradient-to-br from-transparent to-green-100"
    >
        <div
            v-if="reg_show_alert"
            class="text-white text-2xl text-center font-bold p-5 mb-4"
            :class="reg_alert_variant"
        >{{ reg_alert_msg }}</div>
        <vee-form
            class="relative md:m-10 md:2-1/2 w-full bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4"
            :validation-schema="schema"
            @submit="register"
        >
            <h1 class="mb-10 text-4xl">
                Create
                <span
                    class="before:block before:absolute before:-inset-1 hover:shadow-xl hover:before:-skew-y-1 before:-skew-y-6 before:bg-green-100 relative inline-block"
                >
                    <span class="relative text-green">Your Own &nbsp;</span>
                </span>&nbsp;Recipe
            </h1>
            <!-- =========================== title =============================================== -->
            <hr mt-10 mb-10 />
            <div class="flex w-full items-center mt-5 mb-5">
                <label class="w-2/12">Name</label>
                <vee-field
                    name="Title"
                    type="text"
                    v-model="title"
                    class="shadow appearance-none border rounded w-3/12 py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    placeholder="Title"
                />
                <ErrorMessage class="text-red-600 ml-5" name="Title" />
            </div>
            <!-- ========================= IMAGE UPLOAD ===========================  -->
            <hr mt-10 mb-10 />
            <div class="flex w-full items-center mt-5 mb-5">
                <label class="w-2/12">Upload Image</label>
                <button
                    @click="openUploadModal"
                    type="button"
                    class="bg-green hover:bg-gradient-to-r from-green-400 to-blue-500 text-white font-bold py-2 px-4 rounded-full"
                >Upload Images</button>
                <vee-field
                    name="images"
                    type="text"
                    v-model="imageArray"
                    class="hidden"
                    placeholder="name"
                />
                <ErrorMessage class="text-red-600 ml-5" name="images" />
            </div>
            <!-- <p class="block">{{imageArray}}</p> -->
            <div
                class="p-1 inline-block flex flex-wrap justify-start px-0 mx-auto max-w-screen-xl sm:px-8 md:px-12 lg:px-16 xl:px-24 mt-12 z-0"
            >
                <article
                    v-for="(imageP, index) in imageArray"
                    :key="index"
                    tabindex="0"
                    class="group flex inline-block inline-block hasImage w-10 h-10 md:w-20 md:h-20 lg:w-40 lg:h-40 xl:w-40 xl:h-60 mb-5 ml-1 xl:ml-5 rounded-md focus:outline-none focus:shadow-outline bg-green-100 cursor-pointer relative text-transparent hover:text-white shadow-sm"
                >
                    <img
                        :src="imageP"
                        alt="upload preview"
                        class="img-preview absolute inline-block inset-0 w-10 h-10 md:w-20 md:h-20 lg:w-40 lg:h-40 xl:w-40 xl:h-60 object-cover rounded-md bg-fixed"
                    />

                    <section
                        class="flex flex-col rounded-md text-xs break-words w-full h-full z-20 absolute top-0 py-2 px-3"
                    >
                        <h1 class="flex-1"></h1>
                        <div class="flex">
                            <span class="p-1">
                                <i>
                                    <svg
                                        class="fill-current w-4 h-4 ml-auto pt-"
                                        xmlns="http://www.w3.org/2000/svg"
                                        width="24"
                                        height="24"
                                        viewBox="0 0 24 24"
                                    >
                                        <path
                                            d="M5 8.5c0-.828.672-1.5 1.5-1.5s1.5.672 1.5 1.5c0 .829-.672 1.5-1.5 1.5s-1.5-.671-1.5-1.5zm9 .5l-2.519 4-2.481-1.96-4 5.96h14l-5-8zm8-4v14h-20v-14h20zm2-2h-24v18h24v-18z"
                                        />
                                    </svg>
                                </i>
                            </span>

                            <p class="p-1 size text-xs"></p>
                            <button
                                class="delete ml-auto focus:outline-none hover:bg-gray-300 p-1 rounded-md"
                                @click="imgDelete(index)"
                            >
                                <svg
                                    class="pointer-events-none fill-current w-4 h-4 ml-auto"
                                    xmlns="http://www.w3.org/2000/svg"
                                    width="24"
                                    height="24"
                                    viewBox="0 0 24 24"
                                >
                                    <path
                                        class="pointer-events-none"
                                        d="M3 6l3 18h12l3-18h-18zm19-4v2h-20v-2h5.711c.9 0 1.631-1.099 1.631-2h5.316c0 .901.73 2 1.631 2h5.711z"
                                    />
                                </svg>
                            </button>
                        </div>
                    </section>
                </article>
            </div>

            <!-- =========================== CATEGORY ======================= -->
            <hr mt-10 mb-10 />
            <div class="flex w-full items-center mt-5 mb-5">
                <label class="w-2/12">Category</label>
                <vee-field
                    as="select"
                    name="category"
                    type="text"
                    v-model="category"
                    class="shadow appearance-none border rounded w-3/12 py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    placeholder
                >
                    <option value="Soup">Soup</option>
                    <option value="Juice">Juice and Coctail</option>
                    <option value="Seafoods">Frozen Seafoods</option>
                    <option value="Meats">Raw Meat</option>
                    <option value="Fruits_and_Vegetables">Fruits and Vegetables</option>
                    <option value="Breads_and_Sweets">Breads and Sweets</option>
                </vee-field>
                <ErrorMessage class="text-red-600 ml-5" name="category" />

                <input type="text" v-model="userData" class="hidden" />

                <!-- Dropdown menu -->
            </div>
            <!-- ================================== PREPARATION TIME ====================================  -->
            <hr mt-10 mb-10 />
            <div class="flex w-full items-center mt-5 mb-5">
                <label class="w-2/12">Preparation Time</label>
                <vee-field
                    name="prep_time"
                    type="number"
                    v-model="prep_time"
                    class="shadow appearance-none border rounded w-3/12 py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    placeholder="10 - 20 min"
                />
                <ErrorMessage class="text-red-600 ml-5" name="prep_time" />
            </div>
            <!-- ============================= CALORIES   ===================================== -->
            <hr mt-10 mb-10 />
            <div class="flex w-full items-center mt-5 mb-5">
                <label class="w-2/12">Calories</label>
                <vee-field
                    name="calories"
                    type="number"
                    v-model="calories"
                    class="shadow appearance-none border rounded w-3/12 py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    placeholder="1000"
                />
                <ErrorMessage class="text-red-600 ml-5" name="calories" />
            </div>
            <!-- ============================= SERVING   ===================================== -->
            <hr mt-10 mb-10 />
            <div class="flex w-full items-center mt-5 mb-5">
                <label class="w-2/12">Serving</label>
                <vee-field
                    name="serving"
                    type="number"
                    v-model="servings"
                    class="shadow appearance-none border rounded w-3/12 py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    placeholder="10"
                />
                <ErrorMessage class="text-red-600 ml-5" name="serving" />
            </div>
            <!-- ================================= INGREDIANTS ==================================== -->

            <hr mt-10 mb-10 />
            <div class="mt-5 mb-5">
                <div class="mb-5" v-for="(food, index) in ingrediant" :key="index">
                    <div class="flex w-full">
                        <label class="w-2/12">Ingredient</label>
                        <vee-field
                            :name="`ingrediant[${index}]`"
                            v-model="food.ing"
                            type="text"
                            class="shadow appearance-none border rounded w-3/12 py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                            placeholder="Ingredient Name"
                        />
                        <ErrorMessage class="text-red-600 ml-5" name="ingrediant[1]" />

                        <button
                            class="uppercase ml-4 p-3 flex items-center border border-red-300 hover:border-red-600 text-red-500 hover:text-white hover:bg-red-600 max-w-max shadow-sm hover:shadow-lg rounded-full w-12 h-12"
                            @click="removeIngrediant(index)"
                            type="button"
                        >
                            <svg
                                width="32"
                                height="32"
                                preserveAspectRatio="xMidYMid meet"
                                viewBox="0 0 32 32"
                                style="transform: rotate(360deg)"
                            >
                                <path d="M12 12h2v12h-2z" fill="currentColor" />
                                <path d="M18 12h2v12h-2z" fill="currentColor" />
                                <path
                                    d="M4 6v2h2v20a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V8h2V6zm4 22V8h16v20z"
                                    fill="currentColor"
                                />
                                <path d="M12 2h8v2h-8z" fill="currentColor" />
                            </svg>
                        </button>
                    </div>
                </div>
            </div>

            <div class="mt-10 pb-10">
                <button
                    @click="addIngrediant"
                    type="button"
                    class="bg-green hover:bg-gradient-to-r from-green-400 to-blue-500 text-white font-bold py-2 px-4 rounded-full"
                >+ Add Ingrediant</button>
            </div>

            <!-- ========================== STEPS ============================================ -->
            <hr mt-10 mb-10 />
            <div class="mt-5 mb-5">
                <div class="mb-5" v-for="(foodStep, index) in steps" :key="index">
                    <div class="flex w-full">
                        <label class="w-2/12">Step {{ index + 1 }}</label>
                        <vee-field
                            as="textarea"
                            :name="`steps[${index}]`"
                            v-model="foodStep.step"
                            type="text"
                            rows="5"
                            cols="60"
                            class="shadow appearance-none border rounded w-3/12 py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                            placeholder="Steps..."
                        ></vee-field>
                        <ErrorMessage class="text-red-600 ml-5" name="steps[1]" />
                        <button
                            class="uppercase ml-4 p-3 flex items-center border border-red-300 hover:border-red-600 text-red-500 hover:text-white hover:bg-red-600 max-w-max shadow-sm hover:shadow-lg rounded-full w-12 h-12"
                            @click="removeStep(index)"
                            type="button"
                        >
                            <svg
                                width="32"
                                height="32"
                                preserveAspectRatio="xMidYMid meet"
                                viewBox="0 0 32 32"
                                style="transform: rotate(360deg)"
                            >
                                <path d="M12 12h2v12h-2z" fill="currentColor" />
                                <path d="M18 12h2v12h-2z" fill="currentColor" />
                                <path
                                    d="M4 6v2h2v20a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V8h2V6zm4 22V8h16v20z"
                                    fill="currentColor"
                                />
                                <path d="M12 2h8v2h-8z" fill="currentColor" />
                            </svg>
                        </button>
                    </div>
                </div>
            </div>

            <div class="mt-10 pb-10">
                <button
                    @click="addStep"
                    type="button"
                    class="bg-green hover:bg-gradient-to-r from-green-400 to-blue-500 text-white font-bold py-2 px-4 rounded-full"
                >+ Add Steps</button>
            </div>
            <!-- ============================= DESCRIPTION   ===================================== -->
            <hr mt-10 mb-10 />
            <div class="flex w-full items-center mt-5 mb-5">
                <label class="w-2/12">Description</label>
                <vee-field
                    as="textarea"
                    name="description"
                    v-model="description"
                    type="text"
                    rows="5"
                    cols="60"
                    class="shadow appearance-none border rounded w-3/12 py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    placeholder="Description..."
                ></vee-field>
                <ErrorMessage class="text-red-600 ml-5" name="description" />
            </div>
            <div class="form-group">
                <button
                    type="submit"
                    class="bg-green hover:bg-gradient-to-r from-green-400 to-blue-500 text-white font-bold py-2 px-4 rounded-full"
                >Submit</button>
            </div>
        </vee-form>
    </div>
</template>

<script setup>
import { ref } from 'vue'
import { useMutation } from '@vue/apollo-composable'
import { post_recipe } from '../graphql/mutation'
import { useRouter } from 'vue-router'
import { useHead } from '@vueuse/head'
useHead({
    title: 'Cook',
});

const router = useRouter()

const reg_in_submission = ref(false)
const reg_show_alert = ref(false)
const reg_alert_variant = ref('bg-green-300')
const reg_alert_msg = ref('Please wait! Your Comment is being created!')
const schema = {
    Title: 'required|min:2|max:50',
    category: 'required',
    prep_time: 'required|integer',
    calories: 'required|integer',
    serving: 'required|integer',
    ingrediant: 'required',
    steps: 'required',
    description: 'required|max:100',
    images: 'required'
}
const register = (values) => {
    reg_show_alert.value = true
    reg_in_submission.value = true
    reg_alert_variant.value = ref('bg-green-300')
    reg_alert_msg.value = ref('Please wait! Your Recipe is being created!')
    reg_alert_variant.value = ref('bg-green-300')
    reg_alert_msg.value = ref('Success! Your Comment has been created.')

    createRecipe()
}

const imageArray = ref([])

const openUploadModal = () => {
    console.log('upload started')
    cloudinary
        .openUploadWidget(
            { cloud_name: 'dyut9eifz', upload_preset: 'recipe' },
            (error, result) => {
                if (!error && result && result.event === 'success') {
                    imageArray.value.push(result.info.url)
                }
            }
        )
        .open()
}

const title = ref('')
const category = ref()
const prep_time = ref('')
const calories = ref('')
const servings = ref('')
const description = ref('')
const ingrediant = ref([{ ing: '' }])
const steps = ref([{ step: '' }])

const addIngrediant = () => {
    ingrediant.value.push({ ing: '' })
}

const removeIngrediant = (index) => {
    if (ingrediant.value.length > 1) {
        ingrediant.value.splice(index, 1)
    }
}

const addStep = () => {
    steps.value.push({ step: '' })
}
const removeStep = (index) => {
    if (steps.value.length > 1) {
        steps.value.splice(index, 1)
    }
}

const {
    mutate: createRecipe,
    loading,
    error,
    onDone,
} = useMutation(
    post_recipe.mutation,
    () => ({
        variables: {
            title: title.value,
            image:
                '{' +
                imageArray.value.map((img) => {
                    return img
                }) +
                '}',
            category: category.value,
            prep_time: prep_time.value,
            calories: calories.value,
            serving: servings.value,
            ingrediants:
                '{' +
                ingrediant.value.map((ingred) => {
                    return ingred.ing
                }) +
                '}',
            steps:
                '{' +
                steps.value.map((stp) => {
                    return stp.step
                }) +
                '}',
            description: description.value,
        },
    })
)

onDone(() => {
    router.push({ name: 'Profile' })
})
</script>


<route>
{
  name: "Cook",
  meta: {
    requiresAuth: true
  },
}
</route>

<style scoped></style>