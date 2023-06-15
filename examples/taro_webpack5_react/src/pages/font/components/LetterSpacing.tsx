
import {View} from '@tarojs/components'

export default function LetterSpacing() {
  return (
    <View className='p-2'>
    <View className='text-2xl text-center my-3'>
      letter-spacing
    </View>
    <View className='tracking-tighter'>
      tracking-tighter
    </View>

    <View className='tracking-tight'>
      tracking-tight
    </View>

    <View className='tracking-normal'>
      tracking-normal
    </View>

    <View className='tracking-wide'>
      tracking-wide
    </View>

    <View className='tracking-wider'>
      tracking-wider
    </View>

    <View className='tracking-widest'>
      tracking-widest
    </View>

    <View className='tracking-5px'>
      tracking-5px
    </View>

    <View className='tracking-5rpx'>
      tracking-5rpx
    </View>
  </View>
  )
}
