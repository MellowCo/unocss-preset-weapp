<template>
  <view class="p-2">
    <view>
      <view class="text-xl font-bold">
        first:class last:class
      </view>

      <view class="text-black:65 text-sm">
        <view>
          第一个子元素为 bg-red
        </view>
        <view>
          最后一个子元素为 bg-green
        </view>
        <view>
          其他为 bg-blue
        </view>
      </view>
    </view>
    <view>
      <view class="first:bg-red last:bg-green bg-blue mb-1">
        1
      </view>
      <view class="first:bg-red last:bg-green bg-blue mb-1">
        2
      </view>
      <view class="first:bg-red last:bg-green bg-blue mb-1">
        3
      </view>
      <view class="first:bg-red last:bg-green bg-blue mb-1">
        4
      </view>
    </view>
  </view>
</template>

