<template>
  <SearchBar @query-updated="updateQuery"></SearchBar>
  <VideoGrid class="mt-24" :formatedVideos="formatedVideos" />
</template>

<script>
import VideoGrid from '../components/VideoGrid.vue'
import SearchBar from '@/components/SearchBar.vue'
import { findVideos, findChannels } from '../api/youtubeHandler'
export default {
  name: 'Home',
  components: {
    VideoGrid,
    SearchBar
  },
  data() {
    return {
      fetchedVideos: [],
      query: ''
    }
  },
  methods: {
    async fetchYoutube() {
      try {
        this.fetchedVideos = await findVideos(this.query)
        // console.log(this.fetchedVideos)
      } catch (error) {
        throw error
      }
    },
    async updateQuery(newQuery) {
      this.query = newQuery
      await this.fetchYoutube()
      console.log("formatedVideos",this.formatedVideos);
    }
  },
  beforeMount() {
    this.fetchYoutube()
  },
  computed: {
    formatedVideos() {
      return this.fetchedVideos.map((video) => {
        return {
          title: video.snippet.title,
          videoYtId: video.id.videoId,
          thumbnail: video.snippet.thumbnails.medium.url,
          description: video.snippet.description,
          publishedAt: video.snippet.publishTime,
          channelYtId: video.snippet.channelId,
          channelName: video.snippet.channelTitle
        }
      })
    }
  }
}
</script>
<style scoped>
VideoGrid {
  margin-top: 120px;
}
</style>
