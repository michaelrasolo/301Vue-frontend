<template>
  <VideoGrid :fetchedVideos="fetchedVideos" />
</template>

<script>
import VideoGrid from '../components/VideoGrid.vue'
export default {
  components: {
    VideoGrid
  },
  data() {
    return {
      fetchedVideos: [
        { title: 'Title of the first video', image: '/hero2.jpg', channel: 'Squeezie', id: 1 },
        {
          title: 'Title of the second video which is way longer than the first one',
          id: 1,
          image: '/hero4.jpg',
          channel: 'FIRST TEAM'
        }
      ]
    }
  }
}
</script>

<style scoped></style>
