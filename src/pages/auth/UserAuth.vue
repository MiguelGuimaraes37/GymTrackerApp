<template>
  <div class="h-screen flex items-center justify-center">
    <form class="max-w-sm" @submit.prevent="submitForm">
      <h1 class="mb-20">Gym Weigth Tracker</h1>
      <div class="mb-10">
        <label for="email" class="block mb-2 text-sm font-medium text-gray-900"
          >Your username</label
        >
        <input
          type="email"
          id="email"
          class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
          placeholder="name@flowbite.com"
          required
          v-model.trim="username"
        />
      </div>
      <div class="mb-5">
        <label
          for="password"
          class="block mb-2 text-sm font-medium text-gray-900"
          >Your password</label
        >
        <input
          type="password"
          id="password"
          class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
          required
          v-model.trim="password"
        />
      </div>
      <button
        type="submit"
        class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
      >
        Submit
      </button>
    </form>

    <p v-if="!formIsValid">
      Please enter a valid email and password (must be at least 6 characters
      long)
    </p>
  </div>
</template>

<script setup>
import { useStore } from 'vuex'
import { ref } from 'vue'
import { useRouter } from 'vue-router'

const store = useStore()
const router = useRouter()

const username = ref('')
const password = ref('')
let formIsValid = ref(true)
let mode = ref('login')

async function submitForm() {
  formIsValid.value = true
  if (username.value === '' || password.value.length < 6) {
    formIsValid.value = false
    return
  }
  const actionPayload = {
    username: username.value,
    password: password.value,
  }

  try {
    if (mode.value === 'login') {
      await store.dispatch('auth/login', actionPayload)
    }
    const redirectUrl = '/workouts'

    router.replace(redirectUrl)
  } catch (error) {
    console.log('Failed to authenticate. Check your login data.')
  }
}
</script>
