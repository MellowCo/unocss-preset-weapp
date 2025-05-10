<script setup lang="ts">
import { navigateTo } from '@tarojs/taro'

const list = [
  { name: 'font', path: '/pages/font/index' },
  { name: 'size', path: '/pages/size/index' },
  { name: 'shadow', path: '/pages/shadow/index' },
  { name: 'border', path: '/pages/border/index' },
  { name: 'spacing', path: '/pages/spacing/index' },
  { name: 'shortcuts', path: '/pages/shortcuts/index' },
  { name: ':class', path: '/pages/class/index' },
  { name: 'color', path: '/pages/color/index' },
  { name: 'attributify', path: '/pages/attributify-mode/index' },
  { name: 'animation', path: '/pages/animation/index' },
  { name: 'rpxTranform', path: '/pages/rpxTranform/index' },
  { name: 'bg', path: '/pages/bg/index' },
  { name: 'first-last', path: '/pages/first-last/index' },
  { name: 'odd-even', path: '/pages/odd-even/index' },
  { name: 'space-x', path: '/pages/space/index' },
  { name: 'divide-x', path: '/pages/divide/index' },
  { name: 'icon', path: '/pages/icon/index' },
]

const to = (to: string) => {
  navigateTo({
    url: to,
  })
}
</script>

<template>
  <view class="py-3">
    <view class="grid grid-cols-3 justify-items-center">
      <view
        v-for="(item, index) in list"
        :key="index"
        class="w-200 h-200 shadow-md center rounded-md"
        @tap="to(item.path)"
      >
        {{ item.name }}
      </view>
    </view>
  </view>
</template>
