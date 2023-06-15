import {View} from '@tarojs/components'

export default function TextIndent() {
  return (
    <View className='p-2'>
    <View className='text-2xl text-center my-3'>
      text-indent
    </View>

    <View className='indent'>
      indent
    </View>

    <View className='indent-2em'>
      indent-2em
    </View>

    <View className='indent-32rpx'>
      indent-32rpx
    </View>

    <View className='indent-xs'>
      indent-xs
    </View>

    <View className='indent-sm'>
      indent-sm
    </View>

    <View className='indent-md'>
      indent-md
    </View>

    <View className='indent-lg'>
      indent-lg
    </View>

    <View className='indent-xl'>
      indent-xl
    </View>

    <View className='indent-2xl'>
      indent-2xl
    </View>

    <View className='indent-3xl'>
      indent-3xl
    </View>

    <View className='-indent-xs'>
      -indent-xs
    </View>

    <View className='-indent-5rpx'>
      -indent-5rpx
    </View>
  </View>
  )
}
