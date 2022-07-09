

export default function BorderStyle() {
  return (
    <view className='p-2'>
    <view className='text-2xl text-center my-3'>
      border-style
    </view>
    <view className='flex flex-col items-center'>
      <view className='w-half h-200 mb-3  bg-blue-100 center text-center border-none'>
        border-none
      </view>

      <view className='w-half h-200 mb-3  bg-blue-100 center text-center border-solid'>
        border-solid
      </view>

      <view className='w-half h-200 mb-3  bg-blue-100 center text-center border-dashed'>
        border-dashed
      </view>

      <view className='w-half h-200 mb-3  bg-blue-100 center text-center border-dotted'>
        border-dotted
      </view>

      <view className='w-half h-200 mb-3  bg-blue-100 center text-center border-double'>
        border-double
      </view>
    </view>
  </view>
  )
}
