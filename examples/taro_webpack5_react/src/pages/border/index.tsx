
import BorderRadius from './components/BorderRadius'
import BorderWidth from './components/BorderWidth'
import BorderStyle from './components/BorderStyle'
import BorderColor from './components/BorderColor'
import {View} from '@tarojs/components'

export default function() {
  return (
    <View className='bg-white'>
    <BorderRadius />
    <BorderWidth />
    <BorderStyle />
    <BorderColor />
  </View>
  )
}
