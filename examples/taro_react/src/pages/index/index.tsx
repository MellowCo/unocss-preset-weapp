import {navigateTo} from '@tarojs/taro'
import {View} from '@tarojs/components'

export default function() {
  const list = [
    { name: 'font', path: '/pages/font/index' },
    { name: 'size', path: '/pages/size/index' },
    { name: 'shadow', path: '/pages/shadow/index' },
    { name: 'border', path: '/pages/border/index' },
    { name: 'spacing', path: '/pages/spacing/index' },
    { name: 'shortcuts', path: '/pages/shortcuts/index' },
  ]

  function to(url:string) {
    navigateTo({
      url,
    })
  }

  return (
    <View className='py-3'>
    <View className='grid grid-cols-3 justify-items-center'>
      {
        list.map((item,index) => (
          <View key={index} className='w-200 h-200 shadow-md center rounded-md' onClick={() => to(item.path)}>
            { item.name }
          </View>
        ))
      }
    </View>
  </View>
  )
}
