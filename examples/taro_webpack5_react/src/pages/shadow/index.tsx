import {View} from '@tarojs/components'

export default function() {
  return (
    <View>
    <View className='p-2 bg-gray-100'>
      <View className='text-2xl text-center my-3'>
        shadow
      </View>
      <View className='h-200 mb3 bg-white center shadow-none'>
        shadow-none
      </View>

      <View className='h-200 mb3 bg-white center shadow'>
        shadow
      </View>

      <View className='h-200 mb3 bg-white center shadow-sm'>
        shadow-sm
      </View>

      <View className='h-200 mb3 bg-white center shadow-md'>
        shadow-md
      </View>

      <View className='h-200 mb3 bg-white center shadow-lg'>
        shadow-lg
      </View>

      <View className='h-200 mb3 bg-white center shadow-xl'>
        shadow-xl
      </View>

      <View className='h-200 mb3 bg-white center shadow-2xl'>
        shadow-2xl
      </View>

      <View className='h-200 mb3 bg-white center shadow-inner'>
        shadow-inner
      </View>
    </View>
  </View>
  )
}
