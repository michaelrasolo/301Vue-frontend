<template>
  <SearchBar @query-updated="updateQuery"></SearchBar>
  <VideoGrid
    class="mt-24"
    :formatedDisplayVideos="formatedDisplayVideos"
    :formatedFavorites="formatedFavorites"
    @remove-fav="removeFav"
    @add-fav="addToFavs"
  />
</template>

<script>
import VideoGrid from '../components/VideoGrid.vue'
import SearchBar from '@/components/SearchBar.vue'
import { findVideos } from '../api/youtubeHandler'
import { getFavorites, removeFavorite, addToFavorites } from '../api/favsHandler.js'

export default {
  name: 'Home',
  components: {
    VideoGrid,
    SearchBar
  },
  data() {
    return {
      fetchedVideos: [],
      favoriteVideos: [],
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
      console.log('formatedDisplayVideos', this.formatedDisplayVideos)
    },
    async fetchMyFavs() {
      try {
        const response = await getFavorites()
        this.favoriteVideos = response.data
        console.log('favoriteVideos', this.favoriteVideos[0])
      } catch (error) {
        throw error
      }
    },
    async addToFavs(videoData) {
      try {
        const savedFav = await addToFavorites(videoData)
        console.log('Video added:', savedFav)
        this.fetchYoutube(), this.fetchMyFavs()
      } catch (error) {
        console.error('Error adding video to favorites:', error)
      }
    },
    async removeFav(id) {
      try {
        const response = await removeFavorite(id)
        console.log('removeFav', response)
        this.fetchYoutube(), this.fetchMyFavs()
      } catch (error) {
        throw error
      }
    }
  },
  beforeMount() {
    this.fetchYoutube(), this.fetchMyFavs()
  },
  computed: {
    formatedDisplayVideos() {
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
    },
    formatedFavorites() {
      return this.favoriteVideos.map((video) => {
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
