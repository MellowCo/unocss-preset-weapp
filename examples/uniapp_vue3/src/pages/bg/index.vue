<script setup>
import xxClass from './components/xxClass.vue';

</script>

<template>
  <view text="white base" class="p-3">
    <xxClass aaClass="bg-#333" bbclass="text-#2ecc71:80"></xxClass>

    <view class="left-[calc(-1*var(--td-badge-basic-height)+1rpx)]" >
      test
    </view>

    <view :class="[
      1 === 1 ? 'left-[calc(-1*var(--td-badge-basic-height)+1rpx)] left' : 'xxx',
      2 === 2 ? 'right-[calc(-1*var(--td-badge-basic-height)+1rpx)] left' : 'bbb',
      3 === 3 && 'top-[calc(-1*var(--td-badge-basic-height)+1rpx)] left',
    ]">
      test
    </view>

    <view class="bg-[--l-tab-bar-bg-color] [--l-tab-bar-bg-color:theme(color.blue)] w-100 h-100" />
    <view :class="{ 'mt-2 bg-[--l-tab-bar-bg-color,theme(color.blue)] w-100 h-100': 1 === 1 }" />

    <view class="mt-2 bg-[--l-tab-bar-bg-color,theme(color.blue)] w-100 h-100" />
    <view class="mt-2 bg-[theme(color.red)] w-100 h-100" />
    <view class="mt-2 bg-[theme(color.sun)] w-100 h-100" />
    <view class="mt-2 bg-[theme(color.green)] w-100 h-100" />

    <view class="mt-2 border-1 border-solid border-[theme(border.blue)] w-100 h-100" />
    <view class="mt-2 border-1 border-solid border-[theme(border.red)] w-100 h-100" />
    <view class="mt-2 border-1 border-solid border-[theme(border.sun)] w-100 h-100" />
    <view class="mt-2 border-1 border-solid border-[theme(border.green)] w-100 h-100" />

    <view flex justify-center w-full class="!px-4 important:p-10 -m-4">
      <view class="w-100 h-100 bg-cover mb-3" style="background-image: url(../../static/logo.png)" />
    </view>

    <view flex justify-center w-full>
      <view
        class="w-100 h-100 bg-cover mb-3 bg-[url(https://img.cdn.sugarat.top/mdImg/MTY2ODA4OTc3MjcyMg==unocss-icon-gray.svg)]" />
    </view>

    <view flex justify-center w-full>
      <view
        class="w-100 h-100 blur-sm bg-cover mb-3 bg-[url(https://img.cdn.sugarat.top/mdImg/MTY2ODA4OTc3MjcyMg==unocss-icon-gray.svg)]" />
    </view>

    <view class="center h-200 rounded-md bg-gradient-to-t from-#f39c12/60 via-#2ecc71:80 to-#9b59b6_70 mb-3">
      to-t
    </view>

    <view class="center h-200 rounded-md bg-gradient-to-tr from-#f39c12/60 via-#2ecc71:80 to-#9b59b6_70 mb-3">
      to-tr
    </view>

    <view class="center h-200 rounded-md bg-gradient-to-r from-#f39c12/60 via-#2ecc71:80 to-#9b59b6_70 mb-3">
      to-r
    </view>

    <view class="center h-200 rounded-md bg-gradient-to-br from-#f39c12/60 via-#2ecc71:80 to-#9b59b6_70 mb-3">
      to-br
    </view>

    <view class="center h-200 rounded-md bg-gradient-to-b from-#f39c12/60 via-#2ecc71:80 to-#9b59b6_70 mb-3">
      to-b
    </view>

    <view class="center h-200 rounded-md bg-gradient-to-bl from-#f39c12/60 via-#2ecc71:80 to-#9b59b6_70 mb-3">
      to-bl
    </view>

    <view class="center h-200 rounded-md bg-gradient-to-l from-#f39c12/60 via-#2ecc71:80 to-#9b59b6_70 mb-3">
      to-l
    </view>

    <view class="center h-200 rounded-md bg-gradient-to-tl from-#f39c12/60 via-#2ecc71:80 to-#9b59b6_70 mb-3">
      to-tl
    </view>
  </view>
</template>

<style>
.bg-local-logo {
  background-image: var(--logo);

  --logo: url(../../static/logo.png);
}
</style>
