<template>
  <view>
    <button
      text="sm green"
      p="y-2 x-4"
      m="4"
      my-attr="y-1 x-2 sm"
    >
      Button
    </button>

    <button
      text-base text-blue
      py-2 px-4
      m-4
    >
      Button
    </button>

    <button
      li-text="sm green"
      li-p="y-2 x-4"
      li-m="4"
      li-my-attr="y-1 x-2 sm"
    >
      Button
    </button>

    <button border="~ red" m="4">
      Button
    </button>

    <button flex="~ col wrap" class="m4">
      Button
    </button>

    <text text="red" li-text="blue">
      This conflicts with links' text prop
    </text>

    <view bg="#33aaa3:90">
      111
    </view>

    <view bg="[#aaddd2]/50">
      222
    </view>

    <view bg="#2ecc71:50">
      333
    </view>
  </view>
</template>

<style lang="scss" scoped>

</style>
