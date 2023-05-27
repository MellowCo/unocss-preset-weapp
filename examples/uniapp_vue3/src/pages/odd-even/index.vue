<template>
  <view class="p-2">
    <view class="text-xl  font-bold">
      odd:class even:class
    </view>

    <view class="text-black:65 text-sm">
      <view>
        odd:class 奇数为 bg-green
      </view>

      <view>
        even:class 偶数为 bg-red
      </view>
    </view>

    <view>
      <view even:bg-red odd:bg-green>
        1
      </view>
      <view class="even:bg-red odd:bg-green">
        2
      </view>
      <view even:bg-red odd:bg-green>
        3
      </view>
      <view even:bg-red odd:bg-green>
        4
      </view>
    </view>
  </view>
</template>

