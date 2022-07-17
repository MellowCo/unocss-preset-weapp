<script>
export default {
  data() {
    return {
      title: 'Hello',
    }
  },
  onLoad() {

  },
  methods: {

  },
}
</script>

<template>
  <view class="content">
    <view class="text-center">
      <text class="title">
        {{ title }}
      </text>

      <view class="c-[#157666]:50 bg-[#5258]:90">
        c-[#157666]
      </view>

      <view class="c-blue:50">
        c-blue
      </view>
    </view>
  </view>
</template>

