<script>
export default {

}
</script>

<template>
  <view>
    <view>
      <view even:bg-red odd:bg-green first:mb-5 last:p-4>
        1
      </view>
      <view even:bg-red odd:bg-green first:p-2 last:p-4>
        2
      </view>
      <view even:bg-red odd:bg-green first:p-2 last:p-4>
        3
      </view>
      <view even:bg-red odd:bg-green first:p-2 last:p-4>
        4
      </view>
    </view>

    <view>
      <view not-even:bg-blue not-odd:bg-yellow>
        1
      </view>
      <view not-even:bg-blue not-odd:bg-yellow>
        2
      </view>
      <view not-even:bg-blue not-odd:bg-yellow>
        3
      </view>
      <view not-even:bg-blue not-odd:bg-yellow>
        4
      </view>
    </view>
  </view>
</template>

<style lang="scss" scoped>

</style>
