<!--
 * @Author: licl
 * @Date: 2022-06-26 17:28:31
 * @LastEditTime: 2022-06-27 21:47:31
 * @LastEditors: licl
 * @Description:
-->
<script setup lang="ts">
import { borderColor, borderRadius, borderStyle, borderWidth } from '../../../../targets'

const list = [borderColor, borderRadius, borderStyle, borderWidth]
</script>

<template>
  <view class="bg-white">
    <view v-for="(item, i) in list" :key="i" class="p-2">
      <view class="text-2xl text-center my-3">
        {{ item.title }}
      </view>
      <view class="flex flex-col items-center">
        <view v-for="(className, j) in item.classNames" :key="j" :class="className" class="w-half h-200 mb-3  bg-blue-100 center text-center">
          {{ className }}
        </view>
      </view>
    </view>
  </view>
</template>

<style lang="scss" scoped>

</style>
