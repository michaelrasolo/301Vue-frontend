<template>
  <div
    class="relative cursor-pointer flex flex-col items-start space-y-2 border border-gray-200 dark:border-gray-800 p-4 rounded-lg hover:shadow-lg transition duration-300"
  >
    <img
      :src="video.thumbnail"
      alt="Photo 1"
      width="500"
      height="400"
      class="aspect-[16/9] object-cover rounded-lg overflow-hidden"
    />
    <div class="space-y-1 text-left w-full">
      <h3 class="text-base font-semibold md:text-lg">{{ video.title }}</h3>
      <p class="flex align-middle text-center text-sm text-gray-500 dark:text-gray-400 h-12">
        {{ video.channelName }}
      </p>

      <Button
        @click="addToFavs"
        variant="destructive"
        class="absolute rounded-full absolute bottom-4 right-4 text-lg"
        >+</Button
      >
    </div>
  </div>
</template>

<script>
import Button from '../components/ui/button/Button.vue'
import addToFavorites from '../api/addToFavorites'
export default {
  name: 'VideoCard',
  props: {
    video: Object
  },
  components: {
    Button
  },
  methods: {
    async addToFavs() {
    
      try {
        const savedFav = await addToFavorites(this.video)
        console.log('Video added:', savedFav)
      } catch (error) {
        console.error('Error adding video to favorites:', error)
      }
    }
  }
}
</script>
