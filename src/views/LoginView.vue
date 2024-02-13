<template>
  <div
    class="flex flex-col items-center gap-4 py-10 md:gap-8 md:grid md:items-stretch md:py-16 md:gap-0 lg:grid-cols-2"
  >
    <div class="flex items-center justify-center p-6 lg:p-10">
      <div class="mx-auto w-[350px] space-y-6">
        <div class="space-y-2 text-center">
          <h1 class="text-3xl font-bold">Login</h1>
          <p class="text-gray-500 dark:text-gray-400">
            Already have an account?
            <a class="underline" href="#"> Sign in </a>
          </p>
        </div>
        <div class="space-y-4">
          <div class="space-y-2">
            <label
              class="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
              for="email"
              >Email</label
            ><input
              class="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
              id="email"
              placeholder="m@example.com"
              required=""
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
              required=""
              type="password"
            />
          </div>
          <button
            class="inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 bg-primary text-primary-foreground hover:bg-primary/90 h-10 px-4 py-2 w-full"
            type="submit"
          >
            Sign in
          </button>
        </div>
      </div>
    </div>
    <div class="items-center justify-center p-6 lg:flex lg:bg-gray-100 lg:p-10 dark:lg:bg-gray-800">
      <div class="border mx-auto grid max-w-[350px] gap-3 lg:max-w-[500px]">
        <blockquote
          class="text-lg font-semibold leading-snug lg:text-xl lg:leading-normal xl:text-2xl"
        >
          LOGIN PAGE TITLE HERE
        </blockquote>
        <div><div class="font-semibold">Jules Winnfield</div></div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
    
}
</script>

<style lang="scss" scoped></style>
