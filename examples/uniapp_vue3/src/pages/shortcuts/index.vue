<!--
 * @Author: licl
 * @Date: 2022-06-26 19:40:08
 * @LastEditTime: 2022-06-27 21:54:09
 * @LastEditors: licl
 * @Description:
-->
<script setup lang="ts">
import { shortcuts } from '../../../../targets'
</script>

<template>
  <view class="flex flex-col items-center">
    <view v-for="(shortcut, index) in shortcuts" :key="index" :class="shortcut.className">
      {{ shortcut.title }}
    </view>
  </view>
</template>

<style lang="scss" scoped>

</style>
