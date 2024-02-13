<template>
  <div
    class="flex h-14 w-full items-center border-b border-gray-200/40 shadow-md backdrop-filter backdrop-blur-sm px-4 shadow-red-950/20"
  >
    <RouterLink class="flex items-center text-sm font-medium transition-all hover:scale-110" to="/">
        <span
        class="text-xl  border-gray-100 dark:border-gray-950"
        >
        301
    </span>
    <img :src="logo" alt="301Vue Logo" class="w-8 px-1" />
      <span
        class="text-xl border-gray-100  dark:border-gray-950"
      >
        ue
      </span>
    </RouterLink>

    <nav class="ml-auto flex items-center gap-4">
      <RouterLink
        class="border-b-2 border-transparent transition-colors flex items-center gap-2 text-sm font-medium hover:border-red-500"
        to="/"
      >
        Home
      </RouterLink>
      <RouterLink
        class="border-b-2 border-transparent transition-colors flex items-center gap-2 text-sm font-medium hover:border-red-500"
        to="/signup"
      >
        Sign Up
      </RouterLink>
      <RouterLink
        class="border-b-2 border-transparent transition-colors flex items-center gap-2 text-sm font-medium hover:border-red-500"
        to="/login"
      >
        Log In
      </RouterLink>
    </nav>
  </div>
</template>

<script>
import { RouterLink } from 'vue-router'
export default {
  name: 'Navbar',
  data() {
    return {
      logo: '/public/VueRedLogo.png'
    }
  }
}
</script>

<style scoped></style>
