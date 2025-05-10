<template>
  <view class="c-white">
    <view class="flex justify-around">
      <view class="text-16px w-100px h-200px bg-red">
        px
      </view>

      <view class="px-tranform">
        px-class
      </view>
    </view>

    <view class="flex justify-around mt-5">
      <view class="text-16PX w-100PX h-100PX bg-blue">
        PX
      </view>

      <view class="PX-tranform">
        PX-class
      </view>
    </view>

    <view class="flex justify-around mt-5">
      <view class="text-32rpx w-200rpx h-200rpx bg-blue">
        rpx
      </view>

      <view class="rpx-tranform">
        rpx-class
      </view>
    </view>
  </view>
</template>


<style>
.px-tranform {
  font-size: 16px;
  width: 100px;
  height: 200px;
  background-color: red;
}

.PX-tranform {
  font-size: 16PX;
  width: 100PX;
  height: 100PX;
  background-color: red;
}

.rpx-tranform {
  font-size: 32rpx;
  width: 200rpx;
  height: 200rpx;
  background-color: blue;
}
</style>
