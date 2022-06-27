<!--
 * @Author: licl
 * @Date: 2022-06-26 19:25:34
 * @LastEditTime: 2022-06-26 20:16:46
 * @LastEditors: licl
 * @Description:
-->
<script setup>
import { margin, padding } from '../../../../targets'
</script>

<template>
  <view>
    <view class="p-2">
      <view class="text-2xl text-center mb-10">
        {{ padding.title }}
      </view>
      <view class="flex flex-wrap">
        <text v-for="(className, j) in padding.classNames" :key="j" :class="className" class="bg-green-100 mr-2 mb-2 center">
          {{ className }}
        </text>
      </view>
    </view>

    <view class="p-2">
      <view class="text-2xl text-center mb-10">
        {{ margin.title }}
      </view>
      <view class="flex flex-wrap">
        <text v-for="(className, j) in margin.classNames" :key="j" :class="className" class="bg-green-100 center">
          {{ className }}
        </text>
      </view>
    </view>
  </view>
</template>

<style lang="scss" scoped>

</style>
