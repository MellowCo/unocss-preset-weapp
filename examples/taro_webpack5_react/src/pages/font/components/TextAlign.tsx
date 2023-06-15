import {View} from '@tarojs/components'

export default function TextAlign() {
  return (
    <View className='p-2'>
    <View className='text-2xl text-center my-3'>
      text-align
    </View>

    <View className='text-left'>
      text-left
    </View>

    <View className='text-center'>
      text-center
    </View>

    <View className='text-right'>
      text-right
    </View>
  </View>
  )
}
