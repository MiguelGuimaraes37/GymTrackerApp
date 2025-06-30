<template>
  <v-app>
    <v-sheet class="mx-auto mt-4" width="300">
      <v-form @submit.prevent="submitForm">
        <v-text-field v-model.trim="username" label="Username"></v-text-field>
        <v-text-field
          v-model.trim="password"
          type="password"
          label="Password"
        ></v-text-field>
        <v-btn class="mt-2" type="submit" block>Submit</v-btn>
        <p v-if="!formIsValid">
          Please enter a valid email and password (must be at least 6 characters
          long)
        </p>
      </v-form>
    </v-sheet>
  </v-app>
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
