<script>
export default {
  setup() {
    return {}
  },
}
</script>

<template>
  <view>
    <view
      text="sm green"
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
      li-text="sm green"
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

    <view bg="[#eaeaaa]/50">
      222
    </view>

    <view bg="#2ed1dd:80">
      333
    </view>
  </view>
</template>
