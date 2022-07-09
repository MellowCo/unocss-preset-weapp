

export default function BorderWidth() {
  return (
    <view className='p-2'>
    <view className='text-2xl text-center my-3'>
      border-width
    </view>
    <view className='flex flex-col items-center'>
      <view className='w-half h-200 mb-3  bg-blue-100 center text-center border-0'>
        border-0
      </view>

      <view className='w-half h-200 mb-3  bg-blue-100 center text-center border'>
        border
      </view>

      <view className='w-half h-200 mb-3  bg-blue-100 center text-center border-base'>
        border-base
      </view>

      <view className='w-half h-200 mb-3  bg-blue-100 center text-center border-2'>
        border-2
      </view>

      <view className='w-half h-200 mb-3  bg-blue-100 center text-center border-4'>
        border-4
      </view>

      <view className='w-half h-200 mb-3  bg-blue-100 center text-center border-6'>
        border-6
      </view>

      <view className='w-half h-200 mb-3  bg-blue-100 center text-center border-8'>
        border-8
      </view>

      <view className='w-half h-200 mb-3  bg-blue-100 center text-center border-10'>
        border-10
      </view>
    </view>
  </view>
  )
}
