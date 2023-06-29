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

    <view text-lg fw300 m1 line-clamp-2>
      The instant on-demand Atomic CSS engine.The instant on-demand Atomic CSS engine.The instant on-demand Atomic CSS engine.The instant on-demand Atomic CSS engine.The instant on-demand Atomic CSS engine.The instant on-demand Atomic CSS engine.The instant on-demand Atomic CSS engine.
    </view>
  </view>
</template>
