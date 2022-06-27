<script setup lang="ts">
const list = [
  { name: 'font', path: '/pages/font/index' },
  { name: 'size', path: '/pages/size/index' },
  { name: 'shadow', path: '/pages/shadow/index' },
  { name: 'border', path: '/pages/border/index' },
  { name: 'spacing', path: '/pages/spacing/index' },
  { name: 'shortcuts', path: '/pages/shortcuts/index' },
]

const to = (to: string) => {
  uni.navigateTo({
    url: to,
  })
}
</script>

<template>
  <view class="py-3">
    <view class="grid grid-cols-3 justify-items-center">
      <view v-for="(item, index) in list" :key="index" class="w-200 h-200 shadow-md center rounded-md" @click="to(item.path)">
        {{ item.name }}
      </view>
    </view>
  </view>
</template>

