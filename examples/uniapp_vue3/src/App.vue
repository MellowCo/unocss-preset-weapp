<script setup lang="ts">
import { onHide, onLaunch, onShow } from '@dcloudio/uni-app'
onLaunch(() => {
  console.log('App Launch')
})
onShow(() => {
  console.log('App Show')
})
onHide(() => {
  console.log('App Hide')
})
</script>

<style>

view,:before,:after {
  border-width: 0;
  border-style: solid;
  border-color: #e5e7eb
}
</style>
