import {View} from '@tarojs/components'

export default function() {
  return (
    <View className='flex flex-col items-center'>
    <View className='w-300 h-300 bg-red-200 center my-3'>
      center
    </View>

    <View className='w-300 h-300 bg-white border-base'>
      border-base
    </View>
  </View>
  )
}
