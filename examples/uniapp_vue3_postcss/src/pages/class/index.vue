<script>
export default {
  data() {
    return {
      flag: false,
    }
  },
  methods: {
    onChange() {
      this.flag = !this.flag
    },
  },
}
</script>

<template>
  <view class="p-2">
    <button class="w-300 p-2 bg-green-200 text-center" @click="onChange">
      change flag
    </button>

    <view
      :class="{
        'bg-blue-600:80': flag,
        'text-green-600/80': !flag,
      }"
      class="mb-3 text-xs"
    >
      {
      'bg-blue-600:80': flag,
      'text-green-600/80': !flag,
      }
    </view>

    <view
      class="mb-3 text-xs"
      :class="{ 'bg-blue-600:80': flag, 'text-green-600/80': !flag }"
    >
      { 'bg-blue-600:80': flag, 'text-green-600/80': !flag }
    </view>

    <view
      class="mb-3 text-xs"
      :class="[
        flag ? 'bg-blue-600/80' : 'bg-red-600:80',
        !flag ? 'text-yellow-800/80' : 'text-green-800/80',
      ]"
    >
      [
      flag ? 'bg-blue-600/80' : 'bg-red-600:80',
      !flag ? 'text-yellow-800/80' : 'text-green-800/80',
      ]
    </view>

    <view
      class="mb-3 text-xs"
      :class="[flag ? 'bg-blue-600/80' : 'bg-red-600:80', !flag ? 'text-yellow-800/80' : 'text-green-800/80']"
    >
      [flag ? 'bg-blue-600/80' : 'bg-red-600:80', !flag ? 'text-yellow-800/80' : 'text-green-800/80']
    </view>
  </view>
</template>

<style lang="scss" scoped>

</style>
