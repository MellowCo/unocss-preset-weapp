import {View} from '@tarojs/components'

export default function() {
  return (
    <View>
    <View className='p-2'>
      <View className='text-2xl text-center my-3'>
        width
      </View>
      <View className='h-50 bg-blue-200 mb-3 w-xs'>
        w-xs
      </View>

      <View className='h-50 bg-blue-200 mb-3 w-sm'>
        w-sm
      </View>

      <View className='h-50 bg-blue-200 mb-3 w-md'>
        w-md
      </View>

      <View className='h-50 bg-blue-200 mb-3 w-lg'>
        w-lg
      </View>

      <View className='h-50 bg-blue-200 mb-3 w-xl'>
        w-xl
      </View>

      <View className='h-50 bg-blue-200 mb-3 w-2xl'>
        w-2xl
      </View>

      <View className='h-50 bg-blue-200 mb-3 w-3xl'>
        w-3xl
      </View>

      <View className='h-50 bg-blue-200 mb-3 w-4xl'>
        w-4xl
      </View>

      <View className='h-50 bg-blue-200 mb-3 w-200'>
        w-200
      </View>

      <View className='h-50 bg-blue-200 mb-3 w-500'>
        w-500
      </View>

      <View className='h-50 bg-blue-200 mb-3 w-1_4'>
        w-1_4
      </View>

      <View className='h-50 bg-blue-200 mb-3 w-1/4'>
        w-1/4
      </View>

      <View className='h-50 bg-blue-200 mb-3 w-1_3'>
        w-1_3
      </View>

      <View className='h-50 bg-blue-200 mb-3 w-1/3'>
        w-1/3
      </View>

      <View className='h-50 bg-blue-200 mb-3 w-1_2'>
        w-1_2
      </View>

      <View className='h-50 bg-blue-200 mb-3 w-1/2'>
        w-1/2
      </View>

      <View className='h-50 bg-blue-200 mb-3 w-half'>
        w-half
      </View>

      <View className='h-50 bg-blue-200 mb-3 w-auto'>
        w-auto
      </View>

      <View className='h-50 bg-blue-200 mb-3 w-full'>
        w-full
      </View>
    </View>

    <View className='p-1'>
      <View className='text-2xl text-center my-3'>
        height
      </View>
      <View className='flex flex-wrap h-600 bg-green-500'>
        <View className='bg-green-200 mb-3 flex-1 mr-1 text-xs text-center h-xs'>
          h-xs
        </View>

        <View className='bg-green-200 mb-3 flex-1 mr-1 text-xs text-center h-sm'>
          h-sm
        </View>

        <View className='bg-green-200 mb-3 flex-1 mr-1 text-xs text-center h-md'>
          h-md
        </View>

        <View className='bg-green-200 mb-3 flex-1 mr-1 text-xs text-center h-lg'>
          h-lg
        </View>

        <View className='bg-green-200 mb-3 flex-1 mr-1 text-xs text-center h-xl'>
          h-xl
        </View>

        <View className='bg-green-200 mb-3 flex-1 mr-1 text-xs text-center h-200'>
          h-200
        </View>

        <View className='bg-green-200 mb-3 flex-1 mr-1 text-xs text-center h-500'>
          h-500
        </View>

        <View className='bg-green-200 mb-3 flex-1 mr-1 text-xs text-center h-1_4'>
          h-1_4
        </View>

        <View className='bg-green-200 mb-3 flex-1 mr-1 text-xs text-center h-1/4'>
          h-1/4
        </View>

        <View className='bg-green-200 mb-3 flex-1 mr-1 text-xs text-center h-1_3'>
          h-1_3
        </View>

        <View className='bg-green-200 mb-3 flex-1 mr-1 text-xs text-center h-1/3'>
          h-1/3
        </View>

        <View className='bg-green-200 mb-3 flex-1 mr-1 text-xs text-center h-1_2'>
          h-1_2
        </View>

        <View className='bg-green-200 mb-3 flex-1 mr-1 text-xs text-center h-1/2'>
          h-1/2
        </View>

        <View className='bg-green-200 mb-3 flex-1 mr-1 text-xs text-center h-half'>
          h-half
        </View>

        <View className='bg-green-200 mb-3 flex-1 mr-1 text-xs text-center h-auto'>
          h-auto
        </View>

        <View className='bg-green-200 mb-3 flex-1 mr-1 text-xs text-center h-full'>
          h-full
        </View>
      </View>
    </View>

    <View className='p-3 flex flex-col items-center'>
      <View className='text-2xl text-center my-3'>
        Box Sizing
      </View>
      <View className='box-border w-550 h-550 p-4 bg-blue-300 mb-2 center'>
        border-box w-550 h-550 p-4
      </View>

      <View className='box-content w-550 h-550 p-4 bg-blue-300 center'>
        content-box w-550 h-550 p-4
      </View>
    </View>
  </View>
  )
}
