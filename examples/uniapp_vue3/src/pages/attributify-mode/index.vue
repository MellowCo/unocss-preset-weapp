<script>
export default {
  setup() {
    return {}
  },
}
</script>

<template>
  <view class="dark:bg-#000/30">
    <div
      text="sm green"
      p="y-2 x-4"
      m="4"
      my-attr="y-1 x-2 sm"
    >
      Button
    </div>

    <div
      text-base text-blue
      py-2 px-4
      m-4
    >
      Button
    </div>

    <div
      li-text="sm green"
      li-p="y-2 x-4"
      li-m="4"
      li-my-attr="y-1 x-2 sm"
    >
      Button
    </div>

    <div border="~ red" m="4">
      Button
    </div>

    <div flex="~ col wrap" class="m4">
      Button
    </div>

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

    <view bg-red pr-bg-blue text="#fff" pr-text="green">
      prefixedOnly
    </view>
  </view>
</template>

<style lang="scss" scoped>

</style>
