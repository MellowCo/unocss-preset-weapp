<script setup lang="ts">
import Size from '../components/Size.vue'
import Border from '../components/Border.vue'
import BorderColor from '../components/BorderColor.vue'
import Align from '../components/Align.vue'
import Color from '../components/Color.vue'
import Bg from '../components/Bg.vue'
import Typography from '../components/Typography.vue'
import Spacing from '../components/Spacing.vue'
</script>

<template>
  <view class="p-5 bg-red/10 text-justify line-through truncate whitespace-nowrap lowercase">
    <Size />
    <Border />
    <BorderColor />
    <Align />
    <Color />
    <Bg />
    <Typography />
    <Spacing />
  </view>
</template>
