import {View} from '@tarojs/components'

export default function TextShadow() {
  return (
    <View className='p-2'>
    <View className='text-2xl text-center my-3'>
      text-shadow
    </View>

    <View className='text-shadow'>
      text-shadow
    </View>

    <View className='text-shadow-sm'>
      text-shadow-sm
    </View>

    <View className='text-shadow-md'>
      text-shadow-md
    </View>

    <View className='text-shadow-lg'>
      text-shadow-lg
    </View>

    <View className='text-shadow-xl'>
      text-shadow-xl
    </View>

    <View className='text-shadow-none'>
      text-shadow-none
    </View>
  </View>
  )
}
