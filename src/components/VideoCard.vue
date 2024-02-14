<template>
  <div
    class="cursor-pointer flex flex-col items-start space-y-2 border border-gray-200 dark:border-gray-800 p-4 rounded-lg hover:shadow-lg transition duration-300"
  >
    <img
      :src="video.snippet.thumbnails.high.url"
      alt="Photo 1"
      width="500"
      height="400"
      class="aspect-[16/9] object-cover rounded-lg overflow-hidden"
    />
    <div class="space-y-1 text-left">
      <h3 class="text-base font-semibold md:text-lg">{{ video.snippet.title }}</h3>
      <p class="text-sm text-gray-500 dark:text-gray-400">{{ video.snippet.channelTitle }}</p>
    </div>
  </div>
</template>

<script>
export default {
  name:'VideoCard',
  props: {
    video: Object
  }
}
</script>
