<script>
import { navigateTo } from "@tarojs/taro";

export default {
  data() {
    return {
      list: [
        { name: "font", path: "/pages/font/index" },
        { name: "size", path: "/pages/size/index" },
        { name: "shadow", path: "/pages/shadow/index" },
        { name: "border", path: "/pages/border/index" },
        { name: "spacing", path: "/pages/spacing/index" },
        { name: "shortcuts", path: "/pages/shortcuts/index" },
        { name: ":class", path: "/pages/class/index" },
        { name: "color", path: "/pages/color/index" },
        { name: "attributify", path: "/pages/attributify-mode/index" },
      ],
    };
  },
  methods: {
    to(url) {
      navigateTo({
        url,
      });
    },
  },
};
</script>

<template>
  <view class="py-3">
    <view class="grid grid-cols-3 justify-items-center">
      <view
        v-for="(item, index) in list"
        :key="index"
        class="w-200 h-200 shadow-md center rounded-md"
        @tap="to(item.path)"
      >
        {{ item.name }}
      </view>
    </view>
  </view>
</template>

