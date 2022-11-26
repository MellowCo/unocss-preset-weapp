<template>
  <view class="px-2 pb-10">
    <view class="space-y-5">
      <!-- start: space-x  -->
      <view class="text-xl font-bold">
        space-x
      </view>

      <view class="flex h-50 space-x-4">
        <view class="bg-red flex-1 center">
          view
        </view>
        <view class="bg-blue flex-1 center">
          view
        </view>
        <view class="bg-green flex-1 center">
          view
        </view>
      </view>

      <view class="flex space-x-4">
        <image class="bg-red flex-1 block" src="https://img.cdn.sugarat.top/mdImg/MTY2ODA4OTc3MjcyMg==unocss-icon-gray.svg" mode="widthFix" />
        <image class="bg-blue flex-1 block" src="https://img.cdn.sugarat.top/mdImg/MTY2ODA4OTc3MjcyMg==unocss-icon-gray.svg" mode="widthFix" />
        <image class="bg-green flex-1 block" src="https://img.cdn.sugarat.top/mdImg/MTY2ODA4OTc3MjcyMg==unocss-icon-gray.svg" mode="widthFix" />
      </view>

      <view class="flex h-50 space-x-4">
        <text class="bg-red flex-1 center">
          text
        </text>
        <text class="bg-blue flex-1 center">
          text
        </text>
        <text class="bg-green flex-1 center">
          text
        </text>
      </view>

      <view class="flex h-50 space-x-4">
        <button class="bg-red flex-1 center">
          button
        </button>
        <button class="bg-blue flex-1 center">
          button
        </button>
        <button class="bg-green flex-1 center">
          button
        </button>
      </view>
      <!-- end: space-x  -->

      <!-- start  -->
      <view class="text-xl font-bold">
        使用 flex-row-reverse 元素倒序, 使用 space-x-reverse 间隔来确保每个元素被添加到正确的一侧
      </view>

      <view class="space-x-4 space-x-reverse flex-row-reverse flex items-center">
        <view class="bg-red center flex-1">
          view
        </view>
        <view class="bg-blue center flex-1">
          view
        </view>
        <view class="bg-green center flex-1">
          view
        </view>
      </view>
      <!-- end  -->

      <!-- start: space-y  -->
      <view class="text-xl font-bold">
        space-y
      </view>

      <view class="space-y-4">
        <view class="bg-red flex-1 center">
          view
        </view>
        <view class="bg-blue flex-1 center">
          view
        </view>
        <view class="bg-green flex-1 center">
          view
        </view>
      </view>
      <!-- end: space-y  -->

      <!-- start  -->
      <view class="text-xl font-bold">
        space-(number)rpx
      </view>

      <view class="space-y-20rpx">
        <view class="bg-red flex-1 center">
          view
        </view>
        <view class="bg-blue flex-1 center">
          view
        </view>
        <view class="bg-green flex-1 center">
          view
        </view>
      </view>
      <!-- end  -->
    </view>
  </view>
</template>

<style>

</style>
