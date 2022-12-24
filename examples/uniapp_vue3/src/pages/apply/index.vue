<template>
  <view class="bg-to-t">
    apply bg-to-t
  </view>

  <view class="bg-unocss" />

  <view class="bg-to-r">
    apply bg-to-r
  </view>
</template>

<style scoped>
.bg-to-t {
  @apply center h-200 rounded-md bg-gradient-to-t from-#f39c12/60 via-#2ecc71:80 to-#9b59b6_70 mb-3;
}

.bg-unocss{
  @apply w-100 h-100 bg-cover mb-3 bg-[url(https://img.cdn.sugarat.top/mdImg/MTY2ODA4OTc3MjcyMg==unocss-icon-gray.svg)] m-auto;
}

.bg-to-r{
  --at-apply: center h-200 rounded-md bg-gradient-to-r from-#f39c12/60 via-#2ecc71:80 to-#9b59b6_70 mb-3
}
</style>
