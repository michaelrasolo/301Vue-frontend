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
        v-if="!isFavorite"
        @click="addToFavs(video)"
        variant="destructive"
        class="absolute rounded-full absolute bottom-4 right-4 text-lg"
        >+
      </Button>
      <Button
        v-else
        @click="removeFav(video.videoYtId)"
        variant="secondary"
        class="absolute rounded-full absolute bottom-4 right-4 text-lg"
        >X
      </Button>
    </div>
  </div>
</template>

<script>
import Button from '../components/ui/button/Button.vue'
// import { addToFavorites } from '../api/favsHandler.js'

export default {
  name: 'VideoCard',
  props: {
    video: Object,
    formatedFavorites: Array
  },
  components: {
    Button
  },
  methods: {
    async addToFavs(videoData) {
      this.$emit('add-fav',videoData)

    },
    removeFav(videoYtId){
this.$emit('remove-fav',videoYtId)
    }

  },
  computed: {
    isFavorite() {
      return this.formatedFavorites.some((favorite) => favorite.videoYtId === this.video.videoYtId)
    }
  }
}
</script>
