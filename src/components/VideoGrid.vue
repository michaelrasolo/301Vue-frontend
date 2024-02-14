<template>
  <section class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 p-4 md:p-6">
    <RouterView v-for="video in fetchedVideos" :key="video.id">
      <div
        class="flex flex-col items-start space-y-2 border border-gray-200 dark:border-gray-800 p-4 rounded-lg hover:shadow-lg transition duration-300"
      >
        <img
          :src="video.image"
          alt="Photo 1"
          width="500"
          height="400"
          class="aspect-[1.25] object-cover rounded-lg overflow-hidden"
        />
        <div class="space-y-1 text-left">
          <h3 class="text-base font-semibold md:text-lg">{{ video.title }}</h3>
          <p class="text-sm text-gray-500 dark:text-gray-400">{{ video.channel }}</p>
        </div>
      </div>
    </RouterView>
  </section>
</template>

<script>
import { RouterView } from 'vue-router'
export default {
  name: 'VideoGrid',
  props: {
    fetchedVideos: Array
  }
}
</script>
