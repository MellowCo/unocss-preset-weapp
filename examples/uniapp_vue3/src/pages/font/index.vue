<!--
 * @Author: licl
 * @Date: 2022-06-26 17:28:31
 * @LastEditTime: 2022-06-27 21:49:17
 * @LastEditors: licl
 * @Description:
-->
<script setup lang="ts">
import { fontAlign, fontBold, fontColor, fontDecoration, fontDecorationStyle, fontIndent, fontLetter, fontLine, fontOpacity, fontShadow, fontSize } from '../../../../targets'

const list = [fontAlign, fontBold, fontColor, fontDecoration, fontDecorationStyle, fontIndent, fontLetter, fontLine, fontOpacity, fontShadow, fontSize]
</script>

<template>
  <view>
    <view v-for="(item, i) in list" :key="i" class="p-2">
      <view class="text-2xl text-center my-3">
        {{ item.title }}
      </view>
      <view v-for="(className, j) in item.classNames" :key="j" :class="className">
        {{ className }}
      </view>
    </view>
  </view>
</template>

<style lang="scss" scoped>

</style>
