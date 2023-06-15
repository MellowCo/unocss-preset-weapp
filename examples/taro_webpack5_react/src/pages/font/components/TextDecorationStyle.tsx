import {View} from '@tarojs/components'

export default function TextDecorationStyle() {
  return (
    <View className='p-2'>
    <View className='text-2xl text-center my-3'>
      text-decoration-style
    </View>

    <View className='underline decoration-solid'>
      underline decoration-solid
    </View>

    <View className='underline decoration-double'>
      underline decoration-double
    </View>

    <View className='underline decoration-dotted'>
      underline decoration-dotted
    </View>

    <View className='underline decoration-dashed'>
      underline decoration-dashed
    </View>

    <View className='underline decoration-wavy'>
      underline decoration-wavy
    </View>
  </View>
  )
}
