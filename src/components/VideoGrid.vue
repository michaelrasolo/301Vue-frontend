<template>
  <section class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 p-4 md:p-6">
    <RouterView v-for="video in formatedDisplayVideos" :key="video.videoYtId">
      <VideoCard :video="video" :formatedFavorites="formatedFavorites" @remove-fav="$emit('remove-fav',video.videoYtId)" @add-fav="$emit('add-fav',video)"/>
    </RouterView>
  </section>
</template>

<script>
import { RouterView } from 'vue-router'
import VideoCard from './VideoCard.vue';

export default {
  name: 'VideoGrid',
  components: {
    VideoCard,
  },
  props: {
    formatedDisplayVideos: Array,
    formatedFavorites: Array,

  },
  emits: ['remove-fav', "add-fav"]
}
</script>
