<!--
 * @Author: licl
 * @Date: 2022-06-26 18:30:52
 * @LastEditTime: 2022-06-27 21:54:50
 * @LastEditors: licl
 * @Description:
-->
<script setup lang="ts">
import { height, width } from '../../../../targets'
</script>

<template>
  <view>
    <view class="p-2">
      <view class="text-2xl text-center my-3">
        {{ width.title }}
      </view>
      <view v-for="(className, j) in width.classNames" :key="j" :class="className" class="h-50 bg-blue-200 mb-3">
        {{ className }}
      </view>
    </view>

    <view class="p-1">
      <view class="text-2xl text-center my-3">
        {{ height.title }}
      </view>
      <view class="flex flex-wrap h-600 bg-green-500">
        <view v-for="(className, j) in height.classNames" :key="j" :class="className" class="bg-green-200 mb-3 flex-1 mr-1 text-xs text-center">
          {{ className }}
        </view>
      </view>
    </view>

    <view class="p-3 flex flex-col items-center">
      <view class="text-2xl text-center my-3">
        Box Sizing
      </view>
      <view class="box-border w-550 h-550 p-4 bg-blue-300 mb-2 center">
        border-box w-550 h-550 p-4
      </view>

      <view class="box-content w-550 h-550 p-4 bg-blue-300 center">
        content-box w-550 h-550 p-4
      </view>
    </view>
  </view>
</template>

