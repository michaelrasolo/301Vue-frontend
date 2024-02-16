<template>
  <VideoGrid
    class="mt-12"
    :formatedDisplayVideos="formatedVideos"
    :formatedFavorites="formatedVideos"
    @remove-fav="removeFav"
  />
</template>

<script>
import VideoGrid from '../components/VideoGrid.vue'
import { getFavorites, removeFavorite } from '../api/favsHandler.js'

export default {
  name: 'Favs',
  components: {
    VideoGrid
  },
  data() {
    return {
      fetchedVideos: [],
      formatedVideos: []
    }
  },
  methods: {
    async fetchMyFavs() {
      try {
        const response = await getFavorites()
        this.fetchedVideos = response.data
        console.log('fetchedVideos', this.fetchedVideos)
      } catch (error) {
        throw error
      }
    },
    async removeFav(id) {
      try {
        const response = await removeFavorite(id)
        console.log('removeFav', response)
        this.fetchMyFavs()
      } catch (error) {
        throw error
      }
    }
  },
  mounted() {
    this.fetchMyFavs()
  },
  computed: {
    formatedVideos() {
      return this.fetchedVideos.map((video) => {
        return {
          title: video.videoId.title,
          videoYtId: video.videoId.videoYtId,
          thumbnail: video.videoId.thumbnail,
          description: video.videoId.description,
          publishedAt: video.videoId.publishedAt,
          channelYtId: video.videoId.channelYtId,
          channelName: video.videoId.channelName
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
