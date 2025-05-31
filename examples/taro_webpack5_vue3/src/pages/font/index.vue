<script setup lang="ts">
  import FontSize from './components/FontSize.vue'
  import FontBold from './components/FontBold.vue'
  import LetterSpacing from './components/LetterSpacing.vue'
  import LineHeight from './components/LineHeight.vue'
  import TextAlign from './components/TextAlign.vue'
  import TextColor from './components/TextColor.vue'
  import TextDecoration from './components/TextDecoration.vue'
  import TextDecorationStyle from './components/TextDecorationStyle.vue'
  import TextIndent from './components/TextIndent.vue'
  import TextOpacity from './components/TextOpacity.vue'
  import TextShadow from './components/TextShadow.vue'
</script>

<template>
  <view>

    <view>
      <view class="w-200 h-200 bg-red"></view>
      <view class="mt-20 text-20">1111</view>
    </view>


    <FontSize />
    <FontBold />
    <LetterSpacing />
    <LineHeight />
    <TextAlign />
    <TextColor />
    <TextDecoration />
    <TextDecorationStyle />
    <TextIndent />
    <TextOpacity />
    <TextShadow />
  </view>
</template>
