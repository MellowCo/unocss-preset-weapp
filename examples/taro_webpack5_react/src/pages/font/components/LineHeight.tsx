import {View} from '@tarojs/components'

export default function LineHeight() {
  return (
    <View className='p-2'>
    <View className='text-2xl text-center my-3'>
      line-height
    </View>

    <View className='leading-none'>
      leading-none
    </View>

    <View className='leading-tight'>
      leading-tight
    </View>

    <View className='leading-snug'>
      leading-snug
    </View>

    <View className='leading-normal'>
      leading-normal
    </View>

    <View className='leading-relaxed'>
      leading-relaxed
    </View>

    <View className='leading-loose'>
      leading-loose
    </View>
  </View>
  )
}
