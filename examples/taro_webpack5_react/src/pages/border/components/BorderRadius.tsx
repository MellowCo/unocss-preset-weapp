import {View} from '@tarojs/components'

export default function BorderRadius() {
  return (
    <View className='p-2'>
    <View className='text-2xl text-center my-3'>
      border-radius
    </View>
    <View className='flex flex-col items-center'>
      <View className='w-half h-200 mb-3  bg-blue-100 center text-center rounded-none'>
        rounded-none
      </View>

      <View className='w-half h-200 mb-3  bg-blue-100 center text-center rounded-sm'>
        rounded-sm
      </View>

      <View className='w-half h-200 mb-3  bg-blue-100 center text-center rounded'>
        rounded
      </View>

      <View className='w-half h-200 mb-3  bg-blue-100 center text-center rounded-md'>
        rounded-md
      </View>

      <View className='w-half h-200 mb-3  bg-blue-100 center text-center rounded-lg'>
        rounded-lg
      </View>

      <View className='w-half h-200 mb-3  bg-blue-100 center text-center rounded-xl'>
        rounded-xl
      </View>

      <View className='w-half h-200 mb-3  bg-blue-100 center text-center rounded-2xl'>
        rounded-2xl
      </View>

      <View className='w-half h-200 mb-3  bg-blue-100 center text-center rounded-3xl'>
        rounded-3xl
      </View>

      <View className='w-half h-200 mb-3  bg-blue-100 center text-center rounded-1_2'>
        rounded-1_2
      </View>

      <View className='w-half h-200 mb-3  bg-blue-100 center text-center rounded-1/2'>
        rounded-1/2
      </View>

      <View className='w-half h-200 mb-3  bg-blue-100 center text-center rounded-full'>
        rounded-full
      </View>
    </View>
  </View>
  )
}
