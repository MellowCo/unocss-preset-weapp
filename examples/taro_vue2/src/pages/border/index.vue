<script>
import BorderRadius from './components/BorderRadius.vue'
import BorderWidth from './components/BorderWidth.vue'
import BorderStyle from './components/BorderStyle.vue'
import BorderColor from './components/BorderColor.vue'
export default {
  components: {
    BorderRadius,
    BorderWidth,
    BorderStyle,
    BorderColor,
  },
}
</script>

<template>
  <view class="bg-white">
    <BorderRadius />
    <BorderWidth />
    <BorderStyle />
    <BorderColor />
  </view>
</template>

