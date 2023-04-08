<template>
  <view class="dark:bg-#000/30">
    <div
      text="sm green"
      p="y-2 x-4"
      m="4"
      my-attr="y-1 x-2 sm"
    >
      div
    </div>

    <div
      text-base text-blue
      py-2 px-4
      m-4
    >
      div
    </div>

    <div
      li-text="sm green"
      li-p="y-2 x-4"
      li-m="4"
      li-my-attr="y-1 x-2 sm"
    >
      div
    </div>

    <div border="~ red" m="4">
      div
    </div>

    <div flex="~ col wrap" class="m4">
      div
    </div>

    <text text="red" li-text="blue">
      This conflicts with links' text prop
    </text>

    <view bg="#333/80">
      111
    </view>

    <view bg="[#aa2222]">
      111
    </view>

    <view bg="#2ddd71:50">
      111
    </view>

    <view bg-red pr-bg-blue text="#fff" pr-text="green">
      prefixedOnly
    </view>

    <view text-[32px] bg-[#ccc] mt-2>
      valueless
    </view>
  </view>
</template>

<style lang="scss" scoped>

</style>
