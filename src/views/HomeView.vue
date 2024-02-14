<template>
  <SearchBar></SearchBar>
  <VideoGrid :fetchedVideos="fetchedVideos" />
</template>

<script>
import VideoGrid from '../components/VideoGrid.vue'
import SearchBar from '@/components/SearchBar.vue'
import { findVideos, findChannels } from '../api/youtubeHandler'
export default {
  components: {
    VideoGrid,SearchBar
  },
  data() {
    return {
      fetchedVideos: [],
      query: 'VueJS'
    }
  },
  methods: {
    async fetchYoutube() {
      try {
        this.fetchedVideos = await findVideos(this.query)
        console.log(this.fetchedVideos)
      } catch (error) {
        throw error
      }
    }
  },
  beforeMount() {
    this.fetchYoutube()
  }
}
</script>

<style scoped></style>
