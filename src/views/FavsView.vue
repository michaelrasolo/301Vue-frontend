<template>
    <VideoGrid class="mt-12" :fetchedVideos="fetchedVideos" />
  </template>
  
  <script>
  import VideoGrid from '../components/VideoGrid.vue'
  import { findVideos, findChannels } from '../api/youtubeHandler'
  export default {
    name:"My Favs",
    components: {
      VideoGrid,
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
      }, updateQuery(newQuery) {
        this.query = newQuery;
        this.fetchYoutube();
      }
    },
    beforeMount() {
      this.fetchYoutube()
    }
  }
  </script>
  <style scoped>
  VideoGrid{
    margin-top:120px
  }
  
  
  
  </style>
  