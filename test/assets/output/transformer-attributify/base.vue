
<template>
<view
  text="sm green"
  p="y-2 x-4"
  m="4"
 class="text-sm text-green p-y-2 p-x-4 m-4">
xx
</view>

<view flex="~ col wrap" class="m4 flex flex-col flex-wrap">
  xxx
</view>


<view even:bg-red odd:bg-green class="even_cl_bg-red odd_cl_bg-green">
  1
</view>

<view first:bg-red last:bg-green bg-blue mb-1 class="first_cl_bg-red last_cl_bg-green bg-blue mb-1">
  1
</view>

<view bg="cover active:red-400" text="base hover:blue-600/40" class="bg-cover active_cl_bg-red-400 text-base hover_cl_text-blue-600_sl_40">
  1
</view>
</template>
