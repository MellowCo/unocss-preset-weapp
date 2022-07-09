

export default function BorderRadius() {
  return (
    <view className='p-2'>
    <view className='text-2xl text-center my-3'>
      border-radius
    </view>
    <view className='flex flex-col items-center'>
      <view className='w-half h-200 mb-3  bg-blue-100 center text-center rounded-none'>
        rounded-none
      </view>

      <view className='w-half h-200 mb-3  bg-blue-100 center text-center rounded-sm'>
        rounded-sm
      </view>

      <view className='w-half h-200 mb-3  bg-blue-100 center text-center rounded'>
        rounded
      </view>

      <view className='w-half h-200 mb-3  bg-blue-100 center text-center rounded-md'>
        rounded-md
      </view>

      <view className='w-half h-200 mb-3  bg-blue-100 center text-center rounded-lg'>
        rounded-lg
      </view>

      <view className='w-half h-200 mb-3  bg-blue-100 center text-center rounded-xl'>
        rounded-xl
      </view>

      <view className='w-half h-200 mb-3  bg-blue-100 center text-center rounded-2xl'>
        rounded-2xl
      </view>

      <view className='w-half h-200 mb-3  bg-blue-100 center text-center rounded-3xl'>
        rounded-3xl
      </view>

      <view className='w-half h-200 mb-3  bg-blue-100 center text-center rounded-1_2'>
        rounded-1_2
      </view>

      <view className='w-half h-200 mb-3  bg-blue-100 center text-center rounded-1/2'>
        rounded-1/2
      </view>

      <view className='w-half h-200 mb-3  bg-blue-100 center text-center rounded-full'>
        rounded-full
      </view>
    </view>
  </view>
  )
}
