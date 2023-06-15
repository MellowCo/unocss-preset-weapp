import {View} from '@tarojs/components'

export default function TextDecoration() {
  return (
    <View className='p-2'>
    <View className='text-2xl text-center my-3'>
      text-decoration
    </View>

    <View className='overline'>
      overline
    </View>

    <View className='underline'>
      underline
    </View>

    <View className='line-through'>
      line-through
    </View>

    <View className='no-underline'>
      no-underline
    </View>

    <View className='decoration-solid'>
      decoration-solid
    </View>
  </View>
  )
}
