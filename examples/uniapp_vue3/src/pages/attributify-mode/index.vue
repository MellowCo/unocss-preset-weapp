<script>
export default {
  setup() {
    return {}
  },
}
</script>

<template>
  <view class="dark:bg-#000/30">
    <view
      text="b"
      p="y-2 x-4"
      m="4"
      my-attr="y-1 x-2 sm"
    >
      view
    </view>

    <view
      text-base text-blue
      py-2 px-4
      m-4
    >
      view
    </view>

    <view
      text="black base"
      li-text="blue base"
      li-p="y-2 x-4"
      li-m="4"
      li-my-attr="y-1 x-2 sm"
    >
      view
    </view>

    <view border="~ red" m="4">
      view
    </view>

    <view flex="~ col wrap" class="m4">
      view
    </view>

    <text text="red" li-text="blue">
      This conflicts with links' text prop
    </text>

    <view bg="#333:30">
      111
    </view>

    <view bg="[#11dddd]:80">
      222
    </view>

    <view bg="#2ecc71:50">
      333
    </view>

    <view bg-red li-bg-blue text="#fff" li-text="green">
      prefixedOnly
    </view>

    <view bg="dark:#43efef/20 hover:blue-400:50 active:red">
      p
    </view>
  </view>
</template>

<style lang="scss" scoped>

</style>
