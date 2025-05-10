<template>
  <view :class="[aaClass, bbclass]">11111111</view>
</template>

<script setup>
const props = defineProps({
  aaClass: String,
  bbclass: String,
})
</script>

