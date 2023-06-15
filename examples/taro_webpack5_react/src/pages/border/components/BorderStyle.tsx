import {View} from '@tarojs/components'

export default function BorderStyle() {
  return (
    <View className='p-2'>
    <View className='text-2xl text-center my-3'>
      border-style
    </View>
    <View className='flex flex-col items-center'>
      <View className='w-half h-200 mb-3  bg-blue-100 center text-center border-none'>
        border-none
      </View>

      <View className='w-half h-200 mb-3  bg-blue-100 center text-center border-solid'>
        border-solid
      </View>

      <View className='w-half h-200 mb-3  bg-blue-100 center text-center border-dashed'>
        border-dashed
      </View>

      <View className='w-half h-200 mb-3  bg-blue-100 center text-center border-dotted'>
        border-dotted
      </View>

      <View className='w-half h-200 mb-3  bg-blue-100 center text-center border-double'>
        border-double
      </View>
    </View>
  </View>
  )
}
