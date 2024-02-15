<script>
import Button from '../components/ui/button/Button.vue'
import backendApi from '@/api/backendHandler'
import { RouterLink } from 'vue-router'

export default {
  name: 'Signup',
  components: {
    Button
  },
  data() {
    return {
      username: '',
      password: '',
      email: '',
      confirmPassword: ''
    }
  },

  methods: {
    async submitSignup() {
      if (this.confirmPassword === this.password) {
        let userData = {
          username: this.username,
          email: this.email,
          password: this.password
        }
        try {
          const response = await backendApi.post('/auth/signup', userData)
          console.log(response.data)
        } catch (error) {
          throw error
        }
      }
    }
  },
  computed: {
    isSignupDisabled() {
      return (
        this.password === '' ||
        this.confirmPassword === '' ||
        this.password !== this.confirmPassword
      )
    }
  }
}
</script>

<template>
  <div
    class="h-screen flex flex-col items-center gap-4 md:gap-8 md:grid md:items-stretch md:gap-0 lg:grid-cols-2"
  >
    <div class="flex items-center justify-center p-6 lg:p-10">
      <div class="mx-auto w-[350px] space-y-6">
        <div class="space-y-2 text-center">
          <h1 class="text-3xl font-bold">Create an account</h1>
          <p class="text-gray-500 dark:text-gray-400">
            Already have an account?
            <RouterLink class="underline" to="/login"> Log in </RouterLink>
          </p>
        </div>
        <form class="space-y-4 border-blackborder" @submit.prevent="submitSignup">
          <div class="space-y-2">
            <label
              class="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
              for="username"
              >Username</label
            ><input
              class="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
              id="username"
              v-model="username"
              required="true"
              placeholder="Alma16"
            />
          </div>
          <div class="space-y-2">
            <label
              class="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
              for="email"
              >Email</label
            ><input
              class="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
              id="email"
              v-model="email"
              placeholder="alma@ironhack.com"
              required="true"
              type="email"
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
          <div class="space-y-2">
            <label
              class="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
              for="confirm-password"
              >Confirm Password</label
            ><input
              class="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
              id="confirm-password"
              v-model="confirmPassword"
              required="true"
              type="password"
            />
            <p
              v-if="password !== '' && confirmPassword !== '' && password !== confirmPassword"
              class="text-red-500 text-sm"
            >
              Passwords do not match.
            </p>
          </div>

          <Button
            class="h-10 px-4 py-2 w-full rounded-full"
            type="submit"
            variant="destructive"
            :disabled="isSignupDisabled"
            >Sign Up</Button
          >
        </form>
      </div>
    </div>
    <div
      class="items-center justify-center text-white p-6 bg-center bg-no-repeat bg-cover lg:flex md:bg-hero1 lg:bg-hero1 lg:p-10 dark:lg:bg-gray-800 sm:hidden"
    >
    </div>
  </div>
</template>

<style scoped></style>
