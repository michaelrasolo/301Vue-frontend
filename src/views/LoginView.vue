<script>
import Button from '../components/ui/button/Button.vue'
import backendApi from '@/api/backendHandler'
import { RouterLink } from 'vue-router'

export default {
  name: 'Login',
  components: {
    Button
  },
  data() {
    return {
      username: '',
      password: ''
    }
  },
  methods: {
    async submitLogin() {
      let userData = {
        username: this.username,
        password: this.password
      }
      try {
        const response = await backendApi.post('auth/login', userData)
        // console.log(response.data)
        localStorage.setItem("token", response.data.authToken)

      } catch (error) {
        throw error
      }
    }
  },
  computed: {
    isLoginDisabled() {
      return this.password === '' || this.username === ''
    }
  }
}
</script>

<template>
  <div
    class="h-hero flex flex-col items-center gap-4 md:gap-8 md:grid md:items-stretch md:gap-0 lg:grid-cols-2"
  >
    <div class="flex items-center justify-center p-6 lg:p-10">
      <div class="mx-auto w-[350px] space-y-6">
        <div class="space-y-2 text-center">
          <h1 class="text-3xl font-bold">Login</h1>
          <p class="text-gray-500 dark:text-gray-400">
            To create an account,
            <RouterLink class="underline" to="/signup">Sign Up </RouterLink>
          </p>
        </div>
        <form class="space-y-4" @submit.prevent="submitLogin">
          <div class="space-y-2">
            <label
              class="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
              for="username"
              >Username</label
            ><input
              class="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
              id="username"
              v-model="username"
              placeholder="Alma16"
              required="true"
              type="text"
            />
          </div>
          <div class="space-y-2">
            <label
              class="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
              for="password"
              >Password</label
            ><input
              class="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
              id="password"
              v-model="password"
              required="true"
              type="password"
            />
          </div>
          <Button
            class="h-10 px-4 py-2 w-full rounded-full"
            type="submit"
            variant="destructive"
            :disabled="isLoginDisabled"
            >Log In</Button
          >
        </form>
      </div>
    </div>
    <div
      class="items-center justify-center text-white p-6 bg-center bg-no-repeat bg-cover lg:flex lg:bg-hero6 md:bg-hero6 lg:p-10 dark:lg:bg-gray-800 sm:hidden"
    >
      <div class="mx-auto grid max-w-[350px] gap-3 lg:max-w-[500px]">
        <h1 class="text-2xl font-semibold leading-snug lg:text-4xl lg:leading-normal xl:text-4xl">
          Text.
        </h1>
      </div>
    </div>
  </div>
</template>

<style scoped></style>
