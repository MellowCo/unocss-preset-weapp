import {View} from '@tarojs/components'

export default function BorderWidth() {
  return (
    <View className='p-2'>
    <View className='text-2xl text-center my-3'>
      border-width
    </View>
    <View className='flex flex-col items-center'>
      <View className='w-half h-200 mb-3  bg-blue-100 center text-center border-0'>
        border-0
      </View>

      <View className='w-half h-200 mb-3  bg-blue-100 center text-center border'>
        border
      </View>

      <View className='w-half h-200 mb-3  bg-blue-100 center text-center border-base'>
        border-base
      </View>

      <View className='w-half h-200 mb-3  bg-blue-100 center text-center border-2'>
        border-2
      </View>

      <View className='w-half h-200 mb-3  bg-blue-100 center text-center border-4'>
        border-4
      </View>

      <View className='w-half h-200 mb-3  bg-blue-100 center text-center border-6'>
        border-6
      </View>

      <View className='w-half h-200 mb-3  bg-blue-100 center text-center border-8'>
        border-8
      </View>

      <View className='w-half h-200 mb-3  bg-blue-100 center text-center border-10'>
        border-10
      </View>
    </View>
  </View>
  )
}
