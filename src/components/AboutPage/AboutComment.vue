<script setup>
import {defineProps} from "vue";
const props = defineProps({
  item:{
    type: Object,
    default: () => {}
  }
})
</script>


<template>
  <li class="w-[380px] flex flex-col px-[16px] py-[16px]">
      <p class="font-semibold font-roboto text-[20px] text-[#333333] leading-normal mb-[10px]">{{item.label}}</p>

      <p class="font-thin font-roboto text-[14px] text-[#333333] leading-normal">{{item.text}}</p>
  </li>
</template>

<style scoped>

</style>