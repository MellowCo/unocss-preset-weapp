import {View} from '@tarojs/components'

export default function BorderColor() {
  const day = 10

  function classnames(obj:Record<string,boolean>){
    let arr:string[] = []

    for (const key in obj) {
      if (obj[key]) {
        arr.push(key)
      }
    }
    return arr.join(' ')
  }

  return (
    <View className='p-2 text-center'>
    <View className='bg-[#3498db] mb-1'>
      bg-[#3498db]
    </View>
    <View className='bg-[#3498db]/80 mb-1'>
      bg-[#3498db] 80
    </View>

    <View className='bg-[#3498db]:60 mb-1'>
      bg-[#3498db]:60
    </View>

    <View className='bg-[#3498db]_40 mb-1'>
      bg-[#3498db]_40
    </View>

    <View className='bg-hex-e74c3c mb-1'>
      bg-hex-e74c3c
    </View>

    <View className='text-hex-8e44ad  mb-1'>
      text-hex-8e44ad
    </View>

    <View className='text-hex-8e44ad/80 mb-1'>
      text-hex-8e44ad/80
    </View>

    <View className='text-hex-8e44ad:60 mb-1'>
      text-hex-8e44ad:60
    </View>

    <View className='text-hex-8e44ad_40 mb-1'>
      text-hex-8e44ad_40
    </View>

    <View className='bg-hex-000/80 text-hex-fff:60 mb-1'>
      bg-hex-000/80 text-hex-fff:60
    </View>

    <View className={day < 20 ? 'c-#e67e22' : "c-[#157]/60"} >剩余 {day} 天</View>

    <View className={classnames({
        'c-#e67e22':true,
        "c-$color-variable/10": true
      })
    }
    >222222</View>
  </View>
  )
}
