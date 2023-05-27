export default function BorderColor() {
  const day = 30

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
    <view className='p-2 text-center'>
    <view className='bg-[#3498db] mb-1'>
      bg-[#3498db]
    </view>
    <view className='bg-[#3498db]/80 mb-1'>
      bg-[#3498db] 80
    </view>

    <view className='bg-[#3498db]:60 mb-1'>
      bg-[#3498db]:60
    </view>

    <view className='bg-[#3498db]_40 mb-1'>
      bg-[#3498db]_40
    </view>

    <view className='bg-hex-e74c3c mb-1'>
      bg-hex-e74c3c
    </view>

    <view className='text-hex-8e44ad  mb-1'>
      text-hex-8e44ad
    </view>

    <view className='text-hex-8e44ad/80 mb-1'>
      text-hex-8e44ad/80
    </view>

    <view className='text-hex-8e44ad:60 mb-1'>
      text-hex-8e44ad:60
    </view>

    <view className='text-hex-8e44ad_40 mb-1'>
      text-hex-8e44ad_40
    </view>

    <view className='bg-hex-000/80 text-hex-fff:60 mb-1'>
      bg-hex-000/80 text-hex-fff:60
    </view>

    <view className={day < 20 ? 'c-#e67e22' : "c-[#157]/60"} >剩余 {day} 天</view>

    <view className={classnames({
        'c-#e67e22':true,
        "c-$color-variable/10": true
      })
    }
    >222222</view>
  </view>
  )
}
