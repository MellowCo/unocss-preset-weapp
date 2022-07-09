import {View} from '@tarojs/components'
import FontSize from './components/FontSize'
import FontBold from './components/FontBold'
import LetterSpacing from './components/LetterSpacing'
import LineHeight from './components/LineHeight'
import TextAlign from './components/TextAlign'
import TextColor from './components/TextColor'
import TextDecoration from './components/TextDecoration'
import TextDecorationStyle from './components/TextDecorationStyle'
import TextIndent from './components/TextIndent'
import TextOpacity from './components/TextOpacity'
import TextShadow from './components/TextShadow'



export default function() {
  return (
    <View>
    <FontSize />
    <FontBold />
    <LetterSpacing />
    <LineHeight />
    <TextAlign />
    <TextColor />
    <TextDecoration />
    <TextDecorationStyle />
    <TextIndent />
    <TextOpacity />
    <TextShadow />
  </View>
  )
}
