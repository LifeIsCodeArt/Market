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
  <div class="flex flex-col  items-center w-[280px]">

      <div class="bg-[#4174CB] w-[80px] h-[80px] flex justify-center items-center rounded-[50%]">
          <img :src="item.link" alt="" class="w-[48px] h-[48px]">
      </div>

      <p class="text-center font-roboto font-bold text-[20px] text-[#153E84] mb-[12px] mt-[24px] ">
          {{item.label}}
      </p>

      <p class="text-center font-roboto font-thin text-[14px] text-[#153E84]">
          {{item.text}}
      </p>

  </div>
</template>

<style scoped>

</style>