<template>
  <div class="fixed top-14 z-50 w-screen bg-transparant">
    <div
      class="container flex items-center justify-around px-4 md:px-6 h-14"
    >
      <div class="flex-1 flex items-center justify-center ">
        <div class="relative w-5/6">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
            class="absolute left-2.5 top-2.5 h-4 w-4 text-gray-500 dark:text-gray-400"
          >
            <circle cx="11" cy="11" r="8"></circle>
            <path d="m21 21-4.3-4.3"></path>
          </svg>
          <input
            class="flex h-10 border border-input bg-white/90 px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 pl-8 w-full rounded-full"
            placeholder="Search here..."
            type="search"
            v-model="query"
            @keydown.enter="setQuery"

          />
        </div>
      </div>
    </div>
  </div>
</template>

<script>

export default {
  name: 'SearchBar',
  data() {
    return {
      query: 'VueJS'
    }
  },
  methods: {
    setQuery() {
      if (event.key === 'Enter') {
        this.$emit('query-updated', this.query);
      }
    }
  },
}
</script>

<style lang="scss" scoped></style>
